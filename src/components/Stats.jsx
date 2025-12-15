import SectionHeading from './SectionHeading'
import { motion } from 'framer-motion'
import { Parallax } from 'react-scroll-parallax'
import CountUp from './CountUp'

const stats = [
  { value: '35%', label: 'Manual ops reduced' },
  { value: '3x', label: 'Faster triage' },
  { value: '22%', label: 'Lead QA speed-up' },
  { value: '95%', label: 'Task accuracy with HITL' },
]

export default function Stats() {
  return (
    <section id="stats" className="relative overflow-hidden mx-auto max-w-6xl px-4 py-20">
      <Parallax speed={-4}>
        <div className="pointer-events-none absolute inset-x-0 top-8 h-40 bg-gradient-to-r from-brand-blue-600/10 via-transparent to-brand-blue-500/10" />
      </Parallax>
      <SectionHeading title="Outcomes at a Glance" />
      <div className="mt-10 rounded-2xl bg-white/80 backdrop-blur-sm p-6 shadow-sm border border-black/5 relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgb(0, 123, 255) 1px, transparent 0)', backgroundSize: '40px 40px' }} aria-hidden="true" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.06 * i }}
              className="flex flex-col items-center text-center gap-2 rounded-2xl p-5"
            >
              <div className="relative">
                <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-brand-blue-600/15 to-brand-blue-500/10 blur" aria-hidden />
                <div className="relative inline-flex h-16 w-16 items-center justify-center rounded-full bg-white/90 border border-black/5 shadow-sm">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-brand-blue-600/20 to-transparent" aria-hidden />
                  <CountUp value={s.value} className="font-display text-xl font-semibold text-brand-charcoal" />
                </div>
              </div>
              <div className="text-sm text-brand-charcoal/80">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
