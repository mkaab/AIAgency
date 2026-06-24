import { useRef, useState } from 'react'
import { motion, useSpring, useTransform } from 'framer-motion'
import clsx from 'clsx'

export default function MagneticButton({ children, href, className }) {
  const ref = useRef(null)
  const [isHovered, setIsHovered] = useState(false)

  // Spring physics for smooth magnetic pull
  const springConfig = { damping: 20, stiffness: 300, mass: 0.5 }
  const x = useSpring(0, springConfig)
  const y = useSpring(0, springConfig)

  // 3D Tilt Transforms
  const rotateX = useTransform(y, [-30, 30], [15, -15])
  const rotateY = useTransform(x, [-30, 30], [-15, 15])

  const handleMouseMove = (e) => {
    if (!ref.current) return
    const { clientX, clientY } = e
    const { left, top, width, height } = ref.current.getBoundingClientRect()

    const centerX = left + width / 2
    const centerY = top + height / 2

    // Calculate distance from center
    const moveX = clientX - centerX
    const moveY = clientY - centerY

    // Apply limited magnetic pull
    x.set(moveX * 0.3)
    y.set(moveY * 0.3)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    x.set(0)
    y.set(0)
  }

  const Tag = href ? 'a' : 'button'

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{ x, y, rotateX, rotateY, perspective: 1000 }}
      className="relative z-10 inline-block"
      whileTap={{ scale: 0.95 }}
    >
      <Tag
        href={href}
        className={clsx(
          "relative inline-flex items-center justify-center px-8 py-4 overflow-hidden rounded-full font-medium transition-all duration-300",
          "bg-brand-charcoal text-white shadow-lg",
          "hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)] hover:-translate-y-0.5",
          className
        )}
      >
        <span className="relative z-10">{children}</span>
      </Tag>
    </motion.div>
  )
}
