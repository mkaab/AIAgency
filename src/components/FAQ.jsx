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
    <section id="faq" className="mx-auto max-w-6xl px-4 py-20">
      <SectionHeading title="FAQ" />
      <div className="mt-10 rounded-2xl p-[1px] bg-gradient-to-br from-brand-blue-600/40 via-brand-blue-500/20 to-transparent">
        <div className="rounded-2xl bg-white/80 backdrop-blur-sm p-6 shadow-sm border border-black/5">
          <dl className="divide-y divide-black/10">
          {faqs.map((f, i) => {
            const isOpen = open === i
            return (
              <div key={f.q} className="py-1" role="group" aria-labelledby={`faq-label-${i}`}>
                <motion.button
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 * i }}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between text-left gap-4 rounded-lg px-2 py-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-500/40 hover:bg-black/2"
                >
                  <span id={`faq-label-${i}`} className="font-medium text-brand-charcoal">{f.q}</span>
                  <svg
                    className={`h-5 w-5 shrink-0 text-brand-charcoal/70 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="currentColor"
                    aria-hidden
                  >
                    <path d="M6 8l4 4 4-4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </motion.button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.dd
                      id={`faq-panel-${i}`}
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.22 }}
                      className="overflow-hidden pl-2"
                    >
                      <div className="pt-2 pb-3 text-sm leading-6 text-brand-charcoal/80">
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
      </div>
    </section>
  )
}
