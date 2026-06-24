import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'

const services = [
  { title: 'AI Strategy', desc: 'No 6-month strategy work. No 200-slide presentations. We get right to work on holistic & function-specific audits that surface the most compelling AI use cases.' },
  { title: 'Automation Design', desc: 'Custom partnership that combines bespoke change management & AI tooling with baseline metrics to drive measurable ROI.' },
  { title: 'Custom Agentic Systems', desc: 'We deliver state-of-the-art customised agentic and AI powered solutions tailored to you.' },
  { title: 'Application development', desc: 'Our team expertly handles comprehensive full-stack app development, from backend APIs to frontend UI design.' },
]

export default function Services() {
  return (
    <section id="services" className="relative overflow-hidden pointer-events-none">
      <div className="relative mx-auto max-w-6xl px-4 py-20 pointer-events-auto">
        <SectionHeading title="Services" />
        
        <div className="mt-16 rounded-3xl bg-white/50 backdrop-blur-xl p-8 md:p-12 shadow-2xl shadow-black/[0.04] border border-black/5">
          {/* Mobile: horizontal scroll with snap */}
          <div className="md:hidden -mx-4 px-4 pb-4 flex gap-5 overflow-x-auto snap-x snap-mandatory">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 * i }}
                className="snap-center shrink-0 w-[85%] max-w-sm group rounded-3xl p-[1px] bg-gradient-to-br from-black/5 to-transparent transition"
              >
                <div className="h-full rounded-3xl bg-white/90 backdrop-blur-xl border border-white p-8 shadow-xl shadow-black/[0.04] group-hover:shadow-2xl group-hover:shadow-black/10 group-hover:-translate-y-1 transition-all text-center">
                  <div className="mx-auto h-14 w-14 rounded-2xl bg-[#19325a]/10 flex items-center justify-center text-[#19325a] font-semibold shadow-inner border border-[#19325a]/20">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div className="mt-6 text-2xl font-bold text-brand-charcoal font-display">{s.title}</div>
                  <p className="mt-4 text-[15px] leading-relaxed text-brand-charcoal/70">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Desktop: clean grid */}
          <div className="hidden md:grid gap-8 md:grid-cols-2 lg:grid-cols-2">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 * i }}
                className="group rounded-3xl p-[1px] bg-gradient-to-br from-black/5 to-transparent transition"
              >
                <div className="h-full rounded-3xl bg-white/90 backdrop-blur-xl border border-white p-10 shadow-xl shadow-black/[0.04] group-hover:shadow-2xl group-hover:shadow-black/10 group-hover:-translate-y-1 transition-all text-center">
                  <div className="mx-auto h-14 w-14 rounded-2xl bg-[#19325a]/10 flex items-center justify-center text-[#19325a] font-semibold shadow-inner border border-[#19325a]/20">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div className="mt-6 text-2xl font-bold text-brand-charcoal font-display">{s.title}</div>
                  <p className="mt-4 text-base leading-relaxed text-brand-charcoal/70">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
