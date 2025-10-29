import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { Parallax } from 'react-scroll-parallax'

const services = [
  { title: 'AI Strategy', desc: 'No 6-month strategy work. No 200-slide presentations. We get right to work on holistic & function-specific audits that surface the most compelling AI use cases.' },
  { title: 'Automation Design', desc: 'Custom partnership that combines bespoke change management & AI tooling with baseline metrics to drive measurable ROI.' },
  { title: 'Custom Agentic Systems', desc: 'We deliver state-of-the-art customised agentic and AI powered solutions tailored to you.' },
  { title: 'Application development', desc: 'Our team expertly handles comprehensive full-stack app development, from backend APIs to frontend UI design.' },
]

export default function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-white/60">
      <Parallax speed={-4}>
        <div className="pointer-events-none absolute inset-x-0 top-8 h-40 bg-gradient-to-r from-brand-blue-600/10 via-transparent to-brand-blue-500/10" />
      </Parallax>
      <div className="relative mx-auto max-w-6xl px-4 py-20">
        <SectionHeading title="Services" />
        <div className="mt-10 rounded-2xl bg-white/80 backdrop-blur-sm p-6 shadow-sm border border-black/5">
          {/* Mobile: horizontal scroll with snap */}
          <div className="md:hidden -mx-4 px-4 pb-2 flex gap-5 overflow-x-auto snap-x snap-mandatory">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 * i }}
                className="snap-center shrink-0 w-[85%] max-w-sm group rounded-2xl p-[1px] bg-gradient-to-br from-brand-blue-600/55 via-brand-blue-500/30 to-transparent hover:from-brand-blue-600/65 hover:via-brand-blue-500/40 transition"
              >
                <div className="h-full rounded-2xl bg-white/80 backdrop-blur-sm p-7 shadow-sm group-hover:shadow-lg group-hover:-translate-y-0.5 transition text-center">
                  <div className="mx-auto h-12 w-12 rounded-lg bg-brand-blue-600/15 flex items-center justify-center text-brand-blue-600 font-semibold"></div>
                  <div className="mt-5 text-2xl font-semibold text-brand-charcoal">{s.title}</div>
                  <p className="mt-3 text-[15px] leading-6 text-brand-charcoal/80">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Desktop: clean grid */}
          <div className="hidden md:grid gap-6 md:grid-cols-1 lg:grid-cols-1">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 * i }}
                className="group rounded-2xl p-[1px] bg-gradient-to-br from-brand-blue-600/55 via-brand-blue-500/30 to-transparent hover:from-brand-blue-600/65 hover:via-brand-blue-500/40 transition"
              >
                <div className="h-full rounded-2xl bg-white/80 backdrop-blur-sm p-7 shadow-sm group-hover:shadow-lg group-hover:-translate-y-0.5 transition text-center">
                  <div className="mx-auto h-12 w-12 rounded-lg bg-brand-blue-600/15 flex items-center justify-center text-brand-blue-600 font-semibold"></div>
                  <div className="mt-5 text-2xl font-semibold text-brand-charcoal">{s.title}</div>
                  <p className="mt-3 text-[15px] leading-6 text-brand-charcoal/80">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
