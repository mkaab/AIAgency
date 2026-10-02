import { motion } from 'framer-motion'

import RandomRevealText from './RandomRevealText'

export default function SectionHeading({ eyebrow, title, className = '', darkTheme = false }) {
  return (
    <div className={`max-w-6xl mx-auto text-center ${className}`}>
      {eyebrow && (
        <div className={`text-sm md:text-base font-semibold uppercase tracking-wider text-center mb-1 ${darkTheme ? 'text-white/60' : 'text-brand-charcoal/60'}`}>{eyebrow}</div>
      )}
      <div className="inline-block relative">
        <RandomRevealText
          as="h2"
          text={title}
          className={`font-display text-4xl md:text-5xl font-extrabold tracking-tight ${darkTheme ? 'text-white' : 'text-brand-charcoal'}`}
        />
      </div>
    </div>
  )
}
