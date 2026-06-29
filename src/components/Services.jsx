import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'

const services = [
  { 
    title: 'AI Strategy', 
    desc: 'No 6-month strategy work. No 200-slide presentations. We get right to work on holistic & function-specific audits that surface the most compelling AI use cases.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    )
  },
  { 
    title: 'Automation Design', 
    desc: 'Custom partnership that combines bespoke change management & AI tooling with baseline metrics to drive measurable ROI.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  },
  { 
    title: 'Custom Agentic Systems', 
    desc: 'We deliver state-of-the-art customised agentic and AI powered solutions tailored to you.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 9h6v6H9V9z" />
      </svg>
    )
  },
  { 
    title: 'Application development', 
    desc: 'Our team expertly handles comprehensive full-stack app development, from backend APIs to frontend UI design.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    )
  },
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
                    {s.icon}
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
                    {s.icon}
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
