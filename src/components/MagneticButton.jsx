import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

export default function MagneticButton({
  as: As = 'a',
  href,
  className = '',
  children,
  ...rest
}) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const springX = useSpring(x, { stiffness: 300, damping: 20, mass: 0.4 })
  const springY = useSpring(y, { stiffness: 300, damping: 20, mass: 0.4 })

  const translate = {
    x: useTransform(springX, (v) => `${v}px`),
    y: useTransform(springY, (v) => `${v}px`),
  }

  function handleMove(e) {
    const target = e.currentTarget
    const rect = target.getBoundingClientRect()
    const relX = e.clientX - rect.left
    const relY = e.clientY - rect.top
    const midX = rect.width / 2
    const midY = rect.height / 2
    const max = 8 // max px offset
    const offsetX = ((relX - midX) / midX) * max
    const offsetY = ((relY - midY) / midY) * max
    x.set(offsetX)
    y.set(offsetY)
  }
  function handleLeave() {
    x.set(0)
    y.set(0)
  }

  return (
    <As
      {...(href && As === 'a' ? { href } : {})}
      className={`relative inline-block will-change-transform ${className}`}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      {...rest}
    >
      <motion.span style={{ translateX: translate.x, translateY: translate.y }} className="inline-flex">
        {children}
      </motion.span>
    </As>
  )
}
