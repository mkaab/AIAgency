import { useEffect, useRef } from 'react'

export default function ParticlesBG({ className = '', density = 0.00025, color = 'rgba(0,123,255,0.25)' }) {
  const ref = useRef(null)
  const rafRef = useRef(0)
  const reduced = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d', { alpha: true })
    let w = (canvas.width = canvas.offsetWidth)
    let h = (canvas.height = canvas.offsetHeight)

    const handleResize = () => {
      w = canvas.width = canvas.offsetWidth
      h = canvas.height = canvas.offsetHeight
      init()
    }

    const particles = []

    function init() {
      particles.length = 0
      const n = Math.max(20, Math.floor(w * h * density))
      for (let i = 0; i < n; i++) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.15,
          vy: (Math.random() - 0.5) * 0.15,
          r: 1 + Math.random() * 1.5,
        })
      }
    }

    function step() {
      ctx.clearRect(0, 0, w, h)
      ctx.fillStyle = color
      for (let p of particles) {
        p.x += p.vx
        p.y += p.vy
        if (p.x < -5) p.x = w + 5
        if (p.x > w + 5) p.x = -5
        if (p.y < -5) p.y = h + 5
        if (p.y > h + 5) p.y = -5
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fill()
      }
      rafRef.current = requestAnimationFrame(step)
    }

    init()
    if (!reduced) {
      rafRef.current = requestAnimationFrame(step)
    } else {
      // Draw static points when reduced motion
      ctx.fillStyle = color
      for (let p of particles) {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    const ro = new ResizeObserver(handleResize)
    ro.observe(canvas)

    return () => {
      cancelAnimationFrame(rafRef.current)
      ro.disconnect()
    }
  }, [density, color])

  return (
    <canvas ref={ref} className={"pointer-events-none block w-full h-full " + className} />
  )
}
