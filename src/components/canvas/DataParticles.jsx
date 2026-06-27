import { useRef, useMemo, useState, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function DataParticles({ count = 3000 }) {
  const pointsRef = useRef()
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
      // Sphere distribution for a cloud-like data shape
      const theta = THREE.MathUtils.randFloatSpread(360) 
      const phi = THREE.MathUtils.randFloatSpread(360) 
      const r = distance * Math.cbrt(Math.random())

      positions[i * 3] = r * Math.sin(theta) * Math.cos(phi)
      positions[i * 3 + 1] = r * Math.sin(theta) * Math.sin(phi)
      positions[i * 3 + 2] = r * Math.cos(theta)
    }
    return positions
  }, [count])

  // Subtle rotation, scroll-linked movement, and mouse repulsion
  useFrame((state, delta) => {
    if (!pointsRef.current || isMobile) return

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
    pointsRef.current.rotation.y = THREE.MathUtils.lerp(pointsRef.current.rotation.y, timeX + scrollOffsetX + targetX, 0.05)
    pointsRef.current.rotation.x = THREE.MathUtils.lerp(pointsRef.current.rotation.x, timeY + scrollOffsetY + targetY, 0.05)
  })

  if (isMobile) return null

  return (
    <points ref={pointsRef}>
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
  )
}
