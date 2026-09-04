import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useForm } from '@formcarry/react'

const STEP_ICONS = [
  // Step 0: Challenge — crosshair/target
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>,
  // Step 1: Journey — compass
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" fill="white" stroke="white"/></svg>,
  // Step 2: Timeline — clock
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
  // Step 3: Contact — mail
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="22 7 12 13 2 7"/></svg>,
]

const STEPS = [
  {
    title: 'What challenge are you looking to solve?',
    subtitle: 'Select the area that best describes your needs',
    key: 'challenge',
    options: [
      { label: 'Automate repetitive workflows' },
      { label: 'Build a custom AI product' },
      { label: 'Improve customer experience' },
      { label: 'Data & analytics strategy' },
      { label: 'Not sure yet — just exploring' },
    ],
  },
  {
    title: 'Where are you on your AI journey?',
    subtitle: 'This helps us tailor our approach',
    key: 'journey',
    options: [
      { label: "We haven't started yet" },
      { label: "We've experimented but need help scaling" },
      { label: 'We have AI in production and want to optimize' },
    ],
  },
  {
    title: "What's your timeline?",
    subtitle: 'When are you looking to kick things off?',
    key: 'timeline',
    options: [
      { label: "Immediately — we're ready to move" },
      { label: 'Within the next 1–3 months' },
      { label: 'Just exploring for now' },
    ],
  },
]

const TOTAL_STEPS = STEPS.length + 1 // +1 for contact step

const slideVariants = {
  enter: (dir) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir) => ({ x: dir > 0 ? -80 : 80, opacity: 0 }),
}

export default function OnboardingForm({ isOpen, onClose }) {
  const [step, setStep] = useState(0)
  const [direction, setDirection] = useState(1)
  const [formData, setFormData] = useState({
    challenge: '',
    journey: '',
    timeline: '',
    name: '',
    email: '',
    company: '',
    phone: '',
  })
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const { submit: formcarrySubmit } = useForm({ id: 'ATbrs3Zki2t' })

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  // Reset on close
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setStep(0)
        setDirection(1)
        setSubmitted(false)
        setFormData({ challenge: '', journey: '', timeline: '', name: '', email: '', company: '', phone: '' })
      }, 300)
    }
  }, [isOpen])

  const handleSelect = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }))
  }

  const handleNext = () => {
    setDirection(1)
    setStep((s) => Math.min(s + 1, TOTAL_STEPS - 1))
  }

  const handleBack = () => {
    setDirection(-1)
    setStep((s) => Math.max(s - 1, 0))
  }

  const handleSubmit = async (e) => {
    if (e) e.preventDefault()
    setSubmitting(true)
    try {
      await formcarrySubmit({
        name: formData.name,
        work_email: formData.email,
        company_name: formData.company,
        challenge: formData.challenge,
        ai_journey: formData.journey,
        timeline: formData.timeline,
        source: 'Talk to Us Modal',
      })
      setSubmitted(true)
    } catch (err) {
      console.error('Form submission error:', err)
    } finally {
      setSubmitting(false)
    }
  }

  const canProceed = () => {
    if (step < STEPS.length) {
      return formData[STEPS[step].key] !== ''
    }
    // Contact step
    return formData.name.trim() && formData.email.trim()
  }

  const progress = ((step + 1) / TOTAL_STEPS) * 100

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden border border-black/10"
          >
            {/* Progress Bar */}
            <div className="h-1 bg-gray-100">
              <motion.div
                className="h-full bg-[#19325a]"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
              />
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full text-[#333]/40 hover:text-[#333] hover:bg-black/5 transition-colors z-10"
              aria-label="Close"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M4 4l8 8M12 4l-8 8" />
              </svg>
            </button>

            {/* Step Indicator */}
            <div className="flex items-center justify-center gap-2 pt-6 pb-2">
              {Array.from({ length: TOTAL_STEPS }).map((_, i) => (
                <div
                  key={i}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i <= step ? 'bg-[#19325a] w-6' : 'bg-[#333]/15 w-3'
                  }`}
                />
              ))}
            </div>

            {/* Content Area */}
            <div className="px-8 pb-8 pt-2 min-h-[380px] flex flex-col">
              <AnimatePresence mode="wait" custom={direction}>
                {submitted ? (
                  /* Success State */
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex-1 flex flex-col items-center justify-center text-center py-8"
                  >
                    <div className="w-16 h-16 bg-[#19325a]/10 rounded-full flex items-center justify-center mb-6">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#19325a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <h3 className="font-display text-2xl font-bold text-[#333] mb-3">
                      We'll be in touch!
                    </h3>
                    <p className="text-[#333]/60 max-w-xs leading-relaxed">
                      Thanks for reaching out. Our team will review your responses and get back to you within 24 hours.
                    </p>
                    <button
                      onClick={onClose}
                      className="mt-8 px-8 py-3 bg-[#19325a] text-white rounded-full font-semibold hover:bg-[#0c1a2f] transition-colors shadow-[0_8px_30px_rgba(25,50,90,0.3)]"
                    >
                      Done
                    </button>
                  </motion.div>
                ) : step < STEPS.length ? (
                  /* Option Steps (1-3) */
                  <motion.div
                    key={`step-${step}`}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="flex-1 flex flex-col"
                  >
                    <div className="mb-8 text-center flex flex-col items-center">
                      <div className="w-12 h-12 bg-[#19325a] rounded-2xl flex items-center justify-center mb-4 shadow-[0_4px_16px_rgba(25,50,90,0.25)]">
                        {STEP_ICONS[step]}
                      </div>
                      <h3 className="font-display text-2xl font-bold text-[#333] leading-tight">
                        {STEPS[step].title}
                      </h3>
                      <p className="text-base text-[#333]/60 mt-2">
                        {STEPS[step].subtitle}
                      </p>
                    </div>

                    <div className="flex-1 flex flex-col gap-2.5">
                      {STEPS[step].options.map((opt) => {
                        const selected = formData[STEPS[step].key] === opt.label
                        return (
                          <button
                            key={opt.label}
                            onClick={() => handleSelect(STEPS[step].key, opt.label)}
                            className={`w-full text-center px-5 py-4 rounded-xl border-2 transition-all duration-200 group ${
                              selected
                                ? 'border-[#19325a] bg-[#19325a]/[0.04] shadow-sm'
                                : 'border-[#19325a]/15 hover:border-[#19325a]/40 hover:bg-gray-50/80'
                            }`}
                          >
                            <span className={`text-base font-semibold transition-colors ${selected ? 'text-[#19325a]' : 'text-[#333]'}`}>
                              {opt.label}
                            </span>
                          </button>
                        )
                      })}
                    </div>
                  </motion.div>
                ) : (
                  /* Contact Step (4) */
                  <motion.div
                    key="contact"
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="flex-1 flex flex-col"
                  >
                    <div className="mb-8 text-center flex flex-col items-center">
                      <div className="w-12 h-12 bg-[#19325a] rounded-2xl flex items-center justify-center mb-4 shadow-[0_4px_16px_rgba(25,50,90,0.25)]">
                        {STEP_ICONS[3]}
                      </div>
                      <h3 className="font-display text-2xl font-bold text-[#333] leading-tight">
                        How should we reach you?
                      </h3>
                      <p className="text-base text-[#333]/60 mt-2">
                        We'll get back to you within 24 hours
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="flex-1 flex flex-col gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#333]/70 mb-1.5 uppercase tracking-wide">
                          Full Name <span className="text-red-400">*</span>
                        </label>
                        <input
                          required
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
                          placeholder="John Doe"
                          className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-[#19325a]/15 text-[#333] placeholder:text-[#333]/30 focus:ring-2 focus:ring-[#19325a]/20 focus:border-[#19325a]/40 outline-none transition-all text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-[#333]/70 mb-1.5 uppercase tracking-wide">
                          Work Email <span className="text-red-400">*</span>
                        </label>
                        <input
                          required
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
                          placeholder="john@company.com"
                          className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-[#19325a]/15 text-[#333] placeholder:text-[#333]/30 focus:ring-2 focus:ring-[#19325a]/20 focus:border-[#19325a]/40 outline-none transition-all text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-[#333]/70 mb-1.5 uppercase tracking-wide">
                          Company
                        </label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData((p) => ({ ...p, company: e.target.value }))}
                          placeholder="Acme Inc."
                          className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-[#19325a]/15 text-[#333] placeholder:text-[#333]/30 focus:ring-2 focus:ring-[#19325a]/20 focus:border-[#19325a]/40 outline-none transition-all text-sm"
                        />
                      </div>

                      {/* Hidden submit button for form validation */}
                      <button type="submit" className="hidden" />
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Navigation Buttons */}
              {!submitted && (
                <div className="flex items-center justify-between mt-6 pt-4 border-t border-black/5">
                  <button
                    onClick={step === 0 ? onClose : handleBack}
                    className="px-5 py-2.5 text-sm font-medium text-[#333]/60 hover:text-[#333] transition-colors rounded-lg hover:bg-black/[0.03]"
                  >
                    {step === 0 ? 'Cancel' : '← Back'}
                  </button>

                  {step < STEPS.length ? (
                    <button
                      onClick={handleNext}
                      disabled={!canProceed()}
                      className="px-7 py-2.5 bg-[#19325a] text-white text-sm font-semibold rounded-full hover:bg-[#0c1a2f] transition-all shadow-[0_4px_16px_rgba(25,50,90,0.25)] disabled:opacity-30 disabled:cursor-not-allowed disabled:shadow-none"
                    >
                      Continue →
                    </button>
                  ) : (
                    <button
                      onClick={handleSubmit}
                      disabled={!canProceed() || submitting}
                      className="px-7 py-2.5 bg-[#19325a] text-white text-sm font-semibold rounded-full hover:bg-[#0c1a2f] transition-all shadow-[0_4px_16px_rgba(25,50,90,0.25)] disabled:opacity-30 disabled:cursor-not-allowed disabled:shadow-none"
                    >
                      {submitting ? 'Sending...' : 'Submit'}
                    </button>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
