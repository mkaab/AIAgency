import { motion } from 'framer-motion'

export default function SectionHeading({ eyebrow, title, className = '' }) {
  return (
    <div className={`max-w-6xl mx-auto text-center ${className}`}>
      {eyebrow && (
        <div className="text-sm md:text-base font-semibold uppercase tracking-wider text-brand-charcoal/80 text-center">{eyebrow}</div>
      )}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="mt-1 inline-block relative"
      >
        <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-brand-blue-600/10 to-brand-blue-500/10 blur-lg" aria-hidden />
        <div className="relative">
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-brand-charcoal">
            {title}
          </h2>
          <div className="mt-2 h-[3px] w-20 rounded-full bg-gradient-to-r from-brand-blue-600 to-brand-blue-500 mx-auto" />
        </div>
      </motion.div>
    </div>
  )
}
