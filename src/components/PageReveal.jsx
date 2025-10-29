import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'

export default function PageReveal({ duration = 900, columns = 16, showOnce = true }) {
  const [show, setShow] = useState(true)
  const prefersReduced = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches

  useEffect(() => {
    if (prefersReduced) {
      setShow(false)
      return
    }
    if (showOnce) {
      try {
        const shown = sessionStorage.getItem('as_reveal_shown')
        if (shown === '1') {
          setShow(false)
          return
        }
        sessionStorage.setItem('as_reveal_shown', '1')
      } catch {}
    }
    const id = setTimeout(() => setShow(false), duration + 400)
    return () => clearTimeout(id)
  }, [duration, prefersReduced, showOnce])

  const cols = useMemo(() => Array.from({ length: columns }), [columns])

  if (!show) return null

  return (
    <motion.div
      className="fixed inset-0 z-[60] pointer-events-none"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: duration / 1000 + 0.2, ease: 'easeOut' }}
    >
      {/* Columns for a subtle matrix-like sweep (visible on white) */}
      <div className="absolute inset-0 grid" style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}>
        {cols.map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: '-110%', opacity: 1 }}
            animate={{ y: '110%', opacity: [1, 0.85, 0.2] }}
            transition={{ duration: duration / 1000, ease: 'easeInOut', delay: (i * 0.015) }}
            className="relative"
          >
            <div className="absolute inset-x-0 top-0 h-[130%] bg-[linear-gradient(180deg,rgba(0,90,200,0.28),rgba(0,123,255,0.18)_40%,transparent)]" />
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
