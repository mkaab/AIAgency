import SectionHeading from './SectionHeading'
import { motion } from 'framer-motion'
import CountUp from './CountUp'

const stats = [
  { value: '35%', label: 'Manual ops reduced' },
  { value: '3x', label: 'Faster triage' },
  { value: '22%', label: 'Lead QA speed-up' },
  { value: '95%', label: 'Task accuracy with HITL' },
]

export default function Stats() {
  return (
    <section id="stats" className="relative pointer-events-auto bg-[#0c1a2f] text-white py-24 overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
      <div className="relative mx-auto max-w-6xl px-4">
        <SectionHeading title="Outcomes at a Glance" darkTheme={true} />
        <div className="mt-16 rounded-3xl bg-white/5 backdrop-blur-xl p-8 md:p-12 shadow-2xl shadow-black/50 border border-white/10 relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-lg bg-white/10 blur-[100px] rounded-full pointer-events-none" />
          
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 relative z-10">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.06 * i }}
                className="flex flex-col items-center text-center gap-5 rounded-2xl p-4"
              >
                <div className="relative">
                  <div className="absolute -inset-4 rounded-full bg-white/10 blur-xl opacity-50" aria-hidden />
                  <div className="relative inline-flex h-20 w-20 items-center justify-center rounded-full bg-white/10 border border-white/20 shadow-xl shadow-black/20">
                    <CountUp value={s.value} className="font-display text-2xl font-bold text-white" />
                  </div>
                </div>
                <div className="text-sm font-bold text-white/70 uppercase tracking-widest">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
