import { Canvas } from '@react-three/fiber'
import { Preload } from '@react-three/drei'
import { Suspense, useState, useEffect } from 'react'
import DataParticles from './DataParticles'

export default function Scene() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <div className={`fixed inset-0 w-full h-full -z-10 pointer-events-none transition-colors duration-1000 ${isMobile ? 'bg-gradient-to-br from-gray-50 via-white to-gray-100' : 'bg-[#f4f6f8]'}`}>
      {!isMobile && (
        <Canvas
          camera={{ position: [0, 0, 8], fov: 45 }}
          gl={{ antialias: true, alpha: true }}
          eventSource={document.getElementById('root')}
          eventPrefix="client"
        >
          <Suspense fallback={null}>
            <ambientLight intensity={0.5} />
            <DataParticles count={3400} />
            <Preload all />
          </Suspense>
        </Canvas>
      )}
    </div>
  )
}
