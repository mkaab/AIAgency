import { useRef, useMemo, useState, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

// Each animated line has: start particle, end particle, progress (0→1 growing, 1→2 holding, 2→3 fading)
const MAX_LINES = 60 // half of previous ~120 static lines
const LINE_GROW_SPEED = 0.8 // how fast lines travel (units/sec in progress)
const LINE_HOLD_TIME = 0.5 // seconds to hold at full
const LINE_FADE_SPEED = 1.2 // fade out speed

export default function DataParticles({ count = 1200 }) {
  const groupRef = useRef()
  const linesRef = useRef()
  const [isMobile, setIsMobile] = useState(false)

  // Mobile check to disable 3D processing for performance
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Generate particle positions
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const distance = 10
    for (let i = 0; i < count; i++) {
      const theta = THREE.MathUtils.randFloatSpread(360)
      const phi = THREE.MathUtils.randFloatSpread(360)
      const r = distance * Math.cbrt(Math.random())

      positions[i * 3] = r * Math.sin(theta) * Math.cos(phi)
      positions[i * 3 + 1] = r * Math.sin(theta) * Math.sin(phi)
      positions[i * 3 + 2] = r * Math.cos(theta)
    }
    return positions
  }, [count])

  // Animated line state: each line tracks start/end indices + progress
  const lineState = useRef(null)
  if (!lineState.current) {
    const lines = []
    for (let i = 0; i < MAX_LINES; i++) {
      lines.push({
        startIdx: 0,
        endIdx: 1,
        progress: Math.random() * 3, // stagger initial phases
        phase: 'grow', // 'grow' | 'hold' | 'fade'
        opacity: 0,
      })
    }
    lineState.current = lines
  }

  // Buffer for animated line positions (2 vertices per line segment)
  const linePositions = useMemo(() => new Float32Array(MAX_LINES * 6), [])
  const lineOpacities = useMemo(() => new Float32Array(MAX_LINES * 2), [])

  const pickRandomPair = () => {
    const a = Math.floor(Math.random() * count)
    let b = Math.floor(Math.random() * count)
    
    let tries = 0
    while (tries < 50) {
      if (a !== b) {
        const dx = particlesPosition[a * 3] - particlesPosition[b * 3]
        const dy = particlesPosition[a * 3 + 1] - particlesPosition[b * 3 + 1]
        const dz = particlesPosition[a * 3 + 2] - particlesPosition[b * 3 + 2]
        const distSq = dx * dx + dy * dy + dz * dz
        // Limit max line length to avoid long sprawling connections
        if (distSq < 20) {
          return [a, b]
        }
      }
      b = Math.floor(Math.random() * count)
      tries++
    }
    
    // Fallback if we couldn't find a close one
    return [a, (a + 1) % count]
  }

  // Initialize lines with random pairs
  useMemo(() => {
    if (!lineState.current) return
    lineState.current.forEach((line) => {
      const [a, b] = pickRandomPair()
      line.startIdx = a
      line.endIdx = b
    })
  }, [count])

  // Subtle rotation, scroll-linked movement, and mouse repulsion
  useFrame((state, delta) => {
    if (!groupRef.current || isMobile) return

    const scrollY = window.scrollY
    const timeX = state.clock.elapsedTime * 0.05
    const timeY = state.clock.elapsedTime * 0.02
    const scrollOffsetX = scrollY * 0.0005
    const scrollOffsetY = scrollY * 0.00025
    const targetX = (state.pointer.x * Math.PI) / 6
    const targetY = (state.pointer.y * Math.PI) / 6

    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, timeX + scrollOffsetX + targetX, 0.05)
    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, timeY + scrollOffsetY + targetY, 0.05)

    // Animate lines
    if (!linesRef.current) return
    const lines = lineState.current
    const pos = particlesPosition

    for (let i = 0; i < MAX_LINES; i++) {
      const line = lines[i]
      const si = line.startIdx * 3
      const ei = line.endIdx * 3

      // Start point (always the start particle)
      const sx = pos[si], sy = pos[si + 1], sz = pos[si + 2]
      // End point (the destination particle)
      const ex = pos[ei], ey = pos[ei + 1], ez = pos[ei + 2]

      line.progress += delta * LINE_GROW_SPEED

      if (line.progress < 1.0) {
        // GROWING: line travels from start toward end
        const t = Math.min(line.progress, 1.0)
        const smooth = t * t * (3 - 2 * t) // smoothstep
        linePositions[i * 6] = sx
        linePositions[i * 6 + 1] = sy
        linePositions[i * 6 + 2] = sz
        linePositions[i * 6 + 3] = sx + (ex - sx) * smooth
        linePositions[i * 6 + 4] = sy + (ey - sy) * smooth
        linePositions[i * 6 + 5] = sz + (ez - sz) * smooth
        line.opacity = Math.min(t * 2, 0.2) // fade in gently
      } else if (line.progress < 1.0 + LINE_HOLD_TIME) {
        // HOLDING: full line visible
        linePositions[i * 6] = sx
        linePositions[i * 6 + 1] = sy
        linePositions[i * 6 + 2] = sz
        linePositions[i * 6 + 3] = ex
        linePositions[i * 6 + 4] = ey
        linePositions[i * 6 + 5] = ez
        line.opacity = 0.2
      } else if (line.progress < 2.0 + LINE_HOLD_TIME) {
        // FADING: line retracts from start toward end (disappearing from start)
        const fadeT = (line.progress - 1.0 - LINE_HOLD_TIME) / 1.0 * LINE_FADE_SPEED
        if (fadeT > 1.0) {
           line.progress = 3.0 // force reset
        } else {
            const smooth = fadeT * fadeT * (3 - 2 * fadeT)
            linePositions[i * 6] = sx + (ex - sx) * smooth
            linePositions[i * 6 + 1] = sy + (ey - sy) * smooth
            linePositions[i * 6 + 2] = sz + (ez - sz) * smooth
            linePositions[i * 6 + 3] = ex
            linePositions[i * 6 + 4] = ey
            linePositions[i * 6 + 5] = ez
            line.opacity = 0.2 * (1 - fadeT)
        }
      } else {
        // RESET: pick new random pair and restart
        const [a, b] = pickRandomPair()
        line.startIdx = a
        line.endIdx = b
        line.progress = 0
        line.opacity = 0
        // Collapse to zero-length so it's invisible this frame
        linePositions[i * 6] = pos[a * 3]
        linePositions[i * 6 + 1] = pos[a * 3 + 1]
        linePositions[i * 6 + 2] = pos[a * 3 + 2]
        linePositions[i * 6 + 3] = pos[a * 3]
        linePositions[i * 6 + 4] = pos[a * 3 + 1]
        linePositions[i * 6 + 5] = pos[a * 3 + 2]
      }

      // Set opacity for both vertices of this segment
      lineOpacities[i * 2] = line.opacity
      lineOpacities[i * 2 + 1] = line.opacity
    }

    // Update GPU buffers
    const geom = linesRef.current.geometry
    geom.attributes.position.needsUpdate = true
    geom.attributes.opacity.needsUpdate = true
  })

  if (isMobile) return null

  return (
    <group ref={groupRef}>
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particlesPosition.length / 3}
            array={particlesPosition}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.04}
          color="#19325a"
          transparent
          opacity={0.8}
          sizeAttenuation
          blending={THREE.AdditiveBlending}
        />
      </points>
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={MAX_LINES * 2}
            array={linePositions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-opacity"
            count={MAX_LINES * 2}
            array={lineOpacities}
            itemSize={1}
          />
        </bufferGeometry>
        <shaderMaterial
          transparent
          blending={THREE.AdditiveBlending}
          vertexShader={`
            attribute float opacity;
            varying float vOpacity;
            void main() {
              vOpacity = opacity;
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
          `}
          fragmentShader={`
            varying float vOpacity;
            void main() {
              gl_FragColor = vec4(0.098, 0.196, 0.353, vOpacity);
            }
          `}
        />
      </lineSegments>
    </group>
  )
}
