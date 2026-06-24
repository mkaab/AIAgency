import SectionHeading from './SectionHeading'
import { motion } from 'framer-motion'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'

export default function Team() {
  return (
    <section id="team" className="relative overflow-hidden mx-auto max-w-6xl px-4 py-20 pointer-events-none">
      <div className="pointer-events-auto">
        <SectionHeading title="Who we are" />
        <div className="mt-16 grid gap-12 md:grid-cols-2 items-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-white/50 backdrop-blur-xl p-8 md:p-12 shadow-2xl shadow-black/[0.04] border border-black/5"
          >
            <p className="text-lg text-brand-charcoal/80 leading-relaxed">
              As the cost of intelligence approaches zero, businesses will need to transition from AI-absent to AI-native if they want to succeed.
              You could drive that transformation from within. Our bet is, you won't. Not because you don't want to. Not because you don't believe it's necessary. But because you're focused on business.
            </p>
            <ul className="mt-8 space-y-4 text-[15px] text-brand-charcoal/70">
              <li className="flex items-start gap-3">
                <span className="text-[#19325a] shrink-0">✦</span>
                Track record delivering production AI augmentation with measurable impact.
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#19325a] shrink-0">✦</span>
                Design-first approach to human-in-the-loop systems and automation.
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#19325a] shrink-0">✦</span>
                Outcome-driven engagements with clear success metrics.
              </li>
            </ul>
          </motion.div>

          {/* Team visual placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="rounded-3xl bg-white/80 backdrop-blur-md border border-black/5 p-8 flex items-center justify-center min-h-[400px] shadow-2xl shadow-black/[0.04] relative overflow-hidden">
              <div className="absolute inset-0 bg-[#19325a]/5" />
              <div className="relative z-10 w-full h-full max-w-[500px] max-h-[500px] mix-blend-multiply opacity-90">
                <DotLottieReact
                  src="https://lottie.host/9a94466f-58f4-4119-8cde-ccecc5399883/TIkiXphHJb.lottie"
                  loop
                  autoplay
                  className="w-full h-full"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
