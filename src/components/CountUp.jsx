import { useEffect, useMemo, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

function parseParts(val) {
  const match = String(val).match(/^(\d+(?:\.\d+)?)(.*)$/)
  if (!match) return { num: 0, suffix: '' }
  return { num: parseFloat(match[1]), suffix: match[2] || '' }
}

export default function CountUp({ value, duration = 1200, className = '' }) {
  const { num, suffix } = useMemo(() => parseParts(value), [value])
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-20% 0px -20% 0px' })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    let start = null
    const from = 0
    const to = num
    const d = duration

    const step = (ts) => {
      if (start == null) start = ts
      const p = Math.min(1, (ts - start) / d)
      const eased = 1 - Math.pow(1 - p, 3) // easeOutCubic
      const current = from + (to - from) * eased
      setDisplay(current)
      if (p < 1) requestAnimationFrame(step)
    }
    const id = requestAnimationFrame(step)
    return () => cancelAnimationFrame(id)
  }, [inView, num, duration])

  return (
    <span ref={ref} className={className}>
      {num % 1 === 0 ? Math.round(display) : display.toFixed(1)}{suffix}
    </span>
  )
}
