import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Parallax } from 'react-scroll-parallax'
import MagneticButton from './MagneticButton'
import OnboardingForm from './OnboardingForm'

const liveAgentExecutions = [
  { tool: 'NetSuite', action: '214 vendor invoices 3-way matched', time: 'Just now' },
  { tool: 'Salesforce', action: '41 pipeline deals synced from executive calls', time: '2m ago' },
  { tool: 'Outlook', action: '19 supplier quotes parsed & extracted', time: '5m ago' },
  { tool: 'SAP', action: '1,380 bank ledger lines reconciled', time: '9m ago' },
  { tool: 'Compliance', action: 'Contract deviations flagged for human review', time: '14m ago' },
]

export default function Hero() {
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [activeTaskIndex, setActiveTaskIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTaskIndex((prev) => (prev + 1) % liveAgentExecutions.length)
    }, 3500)
    return () => clearInterval(timer)
  }, [])

  const currentTask = liveAgentExecutions[activeTaskIndex]

  return (
    <section id="hero" className="relative min-h-[85vh] flex items-center overflow-hidden pt-16 pb-20">
      <div className="relative mx-auto max-w-7xl px-6 md:px-8 w-full pointer-events-none">
        <div className="max-w-4xl">
          <Parallax speed={-3}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/8 border border-blue-500/20 text-brand-blue-700 text-[11px] font-mono uppercase tracking-[0.14em] mb-6 pointer-events-auto">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
              Enterprise AI Architecture
            </div>

            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[76px] font-normal tracking-[-0.025em] leading-[1.06] text-brand-charcoal">
              <span className="block">Human Intelligence.</span>
              <em className="block font-normal italic text-[#19325a]">Augmented.</em>
            </h1>
          </Parallax>

          <Parallax speed={-1}>
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="mt-6 max-w-[50ch] text-base md:text-xl text-brand-charcoal/70 leading-[1.75] font-normal"
            >
              We map your operational workflows, redesign the bottlenecks around custom AI agents, and run autonomous execution directly on the systems you already use.
            </motion.p>
          </Parallax>

          <div className="mt-9 flex flex-wrap items-center gap-4 pointer-events-auto">
            <MagneticButton
              onClick={() => setIsFormOpen(true)}
              className="!bg-[#19325a] !text-white !shadow-[0_8px_30px_rgba(25,50,90,0.25)] hover:!shadow-[0_12px_40px_rgba(25,50,90,0.35)] border border-transparent font-medium px-8 py-3.5 text-[14px] tracking-[0.02em] rounded-full group"
            >
              Talk to Us
              <svg
                className="w-4 h-4 ml-1 flex-shrink-0 transition-transform duration-200 group-hover:translate-x-1"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M6 3l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </MagneticButton>

            <a
              href="#about"
              className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white/70 px-7 py-3.5 text-[14px] font-medium text-brand-charcoal hover:bg-white hover:border-black/20 hover:shadow-md transition-all backdrop-blur-md will-change-transform hover:-translate-y-0.5"
            >
              See how it works
            </a>
          </div>

          {/* Minimal Live Agent Activity Capsule */}
          <div className="mt-10 pointer-events-auto">
            <div className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-full bg-white/75 border border-black/8 backdrop-blur-md shadow-sm">
              <span className="relative flex h-2 w-2 flex-shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-blue-600" />
              </span>
              <span className="text-[10.5px] font-mono text-brand-charcoal/50 uppercase tracking-wider flex-shrink-0">
                Live Agent
              </span>
              <span className="text-black/15 font-light">|</span>

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTask.action}
                  initial={{ opacity: 0, y: 3 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -3 }}
                  transition={{ duration: 0.25 }}
                  className="flex items-center gap-2 text-[12px] text-brand-charcoal/85 truncate"
                >
                  <span className="text-[10px] font-semibold text-brand-blue-700 bg-blue-50 border border-blue-200/80 px-1.5 py-0.2 rounded flex-shrink-0">
                    {currentTask.tool}
                  </span>
                  <span className="truncate max-w-[260px] sm:max-w-none font-medium">
                    {currentTask.action}
                  </span>
                  <span className="text-[10px] text-brand-charcoal/40 tabular-nums flex-shrink-0">
                    · {currentTask.time}
                  </span>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>

      <OnboardingForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </section>
  )
}


