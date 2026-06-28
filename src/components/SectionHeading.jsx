import { motion } from 'framer-motion'

export default function SectionHeading({ eyebrow, title, className = '', darkTheme = false }) {
  return (
    <div className={`max-w-6xl mx-auto text-center ${className}`}>
      {eyebrow && (
        <div className={`text-sm md:text-base font-semibold uppercase tracking-wider text-center ${darkTheme ? 'text-white/60' : 'text-brand-charcoal/60'}`}>{eyebrow}</div>
      )}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="mt-1 inline-block relative"
      >
        <div className="relative">
          <h2 className={`font-display text-4xl md:text-5xl font-extrabold tracking-tight ${darkTheme ? 'text-white' : 'text-brand-charcoal'}`}>
            {title}
          </h2>
        </div>
      </motion.div>
    </div>
  )
}
