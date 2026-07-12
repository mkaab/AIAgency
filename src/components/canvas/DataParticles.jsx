import { useRef, useMemo, useState, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function DataParticles({ count = 3000 }) {
  const groupRef = useRef()
  const [isMobile, setIsMobile] = useState(false)

  // Mobile check to disable 3D processing for performance
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Generate particle positions and connection lines
  const { positions: particlesPosition, lines: linePositions } = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const distance = 10
    for (let i = 0; i < count; i++) {
      // Sphere distribution for a cloud-like data shape
      const theta = THREE.MathUtils.randFloatSpread(360) 
      const phi = THREE.MathUtils.randFloatSpread(360) 
      const r = distance * Math.cbrt(Math.random())

      positions[i * 3] = r * Math.sin(theta) * Math.cos(phi)
      positions[i * 3 + 1] = r * Math.sin(theta) * Math.sin(phi)
      positions[i * 3 + 2] = r * Math.cos(theta)
    }

    // Connect every 8th or 10th particle to create a 3D network/constellation effect
    const lines = []
    for (let i = 0; i < count; i++) {
      if (i > 3 && i % 8 === 0) {
        // connect to i - 1
        lines.push(
          positions[i * 3], positions[i * 3 + 1], positions[i * 3 + 2],
          positions[(i - 1) * 3], positions[(i - 1) * 3 + 1], positions[(i - 1) * 3 + 2]
        )
      }
      if (i > 4 && i % 10 === 0) {
        // connect to i - 3 to create intersecting lines
        lines.push(
          positions[i * 3], positions[i * 3 + 1], positions[i * 3 + 2],
          positions[(i - 3) * 3], positions[(i - 3) * 3 + 1], positions[(i - 3) * 3 + 2]
        )
      }
    }
    return { positions, lines: new Float32Array(lines) }
  }, [count])

  // Subtle rotation, scroll-linked movement, and mouse repulsion
  useFrame((state, delta) => {
    if (!groupRef.current || isMobile) return

    const scrollY = window.scrollY

    // Base time rotation
    const timeX = state.clock.elapsedTime * 0.05
    const timeY = state.clock.elapsedTime * 0.02

    // Scroll rotation offset (make it spin smoothly as you scroll down the page)
    const scrollOffsetX = scrollY * 0.0005
    const scrollOffsetY = scrollY * 0.00025

    // Mouse repel effect (subtle tilt based on pointer)
    const targetX = (state.pointer.x * Math.PI) / 6
    const targetY = (state.pointer.y * Math.PI) / 6

    // Combine them and smoothly lerp to avoid jitter
    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, timeX + scrollOffsetX + targetX, 0.05)
    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, timeY + scrollOffsetY + targetY, 0.05)
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
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={linePositions.length / 3}
            array={linePositions}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color="#19325a"
          transparent
          opacity={0.15}
          blending={THREE.AdditiveBlending}
        />
      </lineSegments>
    </group>
  )
}
