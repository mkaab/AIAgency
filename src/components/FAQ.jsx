import SectionHeading from './SectionHeading'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const faqs = [
  { q: 'What is AI augmentation?', a: 'The process by which we identify your company’s biggest bottlenecks, create scalable & effective AI-driven solutions to increase profits, train & upskill your people to use these solutions reliably, and repeat the virtuous cycle.' },
  { q: 'How does pricing work?', a: 'Depends. For Engineering, we charge a monthly subscription based on output. For Transformation, we build a custom partnership that ranges in time & price, based on scope. Let’s hop on a call to get you a concrete answer.' },
  { q: 'Do you build custom solutions?', a: 'Yes. We combine off-the-shelf components with bespoke systems where needed.' },
  { q: 'How do you ensure responsible AI?', a: 'We incorporate governance, human-in-the-loop design, and measured rollouts.' },
  { q: 'What kind of companies do you work with?', a: 'At-scale companies (>$25 million revenue) that are motivated to become AI-first, but lack the resources internally to make that happen.' },
]

export default function FAQ() {
  const [open, setOpen] = useState(null)

  return (
    <section id="faq" className="mx-auto max-w-4xl px-4 py-20">
      <SectionHeading title="FAQ" />
      <div className="mt-16 rounded-3xl bg-white/50 backdrop-blur-xl p-6 md:p-8 shadow-2xl shadow-black/[0.04] border border-black/5">
        <dl className="divide-y divide-black/5">
          {faqs.map((f, i) => {
            const isOpen = open === i
            return (
              <div key={f.q} className="py-4" role="group" aria-labelledby={`faq-label-${i}`}>
                <motion.button
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 * i }}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between text-left gap-4 rounded-xl px-4 py-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 hover:bg-black/5 transition-colors"
                >
                  <span id={`faq-label-${i}`} className="font-display text-lg font-bold text-brand-charcoal">{f.q}</span>
                  <div className={`flex items-center justify-center w-8 h-8 rounded-full border transition-colors ${isOpen ? 'border-[#19325a] text-[#19325a] bg-[#19325a]/10' : 'border-black/10 text-brand-charcoal/50 bg-white/50'}`}>
                    <svg
                      className={`h-4 w-4 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                      viewBox="0 0 20 20"
                      fill="none"
                      stroke="currentColor"
                      aria-hidden
                    >
                      <path d="M6 8l4 4 4-4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </motion.button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.dd
                      id={`faq-panel-${i}`}
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                      className="overflow-hidden px-4"
                    >
                      <div className="pt-2 pb-6 text-base leading-relaxed text-brand-charcoal/70">
                        {f.a}
                      </div>
                    </motion.dd>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </dl>
      </div>
    </section>
  )
}
