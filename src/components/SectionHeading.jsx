import { motion } from 'framer-motion'

import RandomRevealText from './RandomRevealText'

export default function SectionHeading({ eyebrow, title, className = '', darkTheme = false }) {
  return (
    <div className={`max-w-6xl mx-auto text-center ${className}`}>
      {eyebrow && (
        <div className={`text-[11px] font-sans font-medium uppercase tracking-[0.16em] text-center mb-2.5 ${darkTheme ? 'text-white/60' : 'text-brand-charcoal/50'}`}>{eyebrow}</div>
      )}
      <div className="inline-block relative">
        <RandomRevealText
          as="h2"
          text={title}
          className={`font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-[-0.015em] leading-[1.12] ${darkTheme ? 'text-white' : 'text-brand-charcoal'}`}
        />
      </div>
    </div>
  )
}
