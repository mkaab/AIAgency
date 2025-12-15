import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { Parallax } from 'react-scroll-parallax'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden mx-auto max-w-5xl px-4 py-20">
      <Parallax speed={-4}>
        <div className="pointer-events-none absolute inset-x-0 top-8 h-40 bg-gradient-to-r from-brand-blue-600/10 via-transparent to-brand-blue-500/10" />
      </Parallax>
      <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <SectionHeading
          title={
            <>
              <span className="bg-gradient-to-r from-blue-400 to-slate-400 bg-clip-text text-transparent">AltaServ</span> helps you shift from AI-absent to AI-native.
            </>
          }
        />
      </motion.div>
      <div className="mt-10 grid gap-8 md:grid-cols-2 items-center">
        {/* Visual placeholder - AI collaboration illustration */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="order-2 md:order-1"
        >
          <div className="bg-gradient-to-br from-brand-blue-600/20 to-brand-blue-500/10 backdrop-blur-sm p-8 flex items-center justify-center min-h-[400px]">
            <DotLottieReact
              src="https://lottie.host/f97d957b-c029-418f-be20-481dbf1d363e/cPkmFPC7Q0.lottie"
              loop
              autoplay
              className="w-full h-full max-w-[500px] max-h-[500px]"
            />
          </div>
        </motion.div>

        {/* Text content */}
        <div className="order-1 md:order-2 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="rounded-2xl bg-white/80 backdrop-blur-sm p-6 shadow-sm border border-black/5"
          >
            <p className="text-brand-charcoal/80">
              Our mission is to help your business reach its potential & end up on the right side of history, post-AI. We partner with leadership teams to turn AI from
              hype into compounding business advantage.
            </p>
          </motion.div>

          <ul className="space-y-3">
            {[
              { title: 'Trustworthy AI', desc: 'Have complete control over your data', icon: '🔒' },
              { title: 'Scalable augmentation', desc: 'Augment your team efficiently and safely', icon: '📈' },
              { title: 'Outcome-focused delivery', desc: 'Deliver measurable business results quickly', icon: '🎯' },
            ].map((item, i) => (
              <motion.li key={item.title} initial={{ opacity: 0, x: 10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.15 * i }}
                className="rounded-xl p-[1px] bg-gradient-to-r from-brand-blue-600/55 via-brand-blue-500/30 to-transparent">
                <div className="rounded-xl bg-white/80 backdrop-blur-sm p-4 shadow-sm flex items-start gap-3">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <span className="font-display font-medium text-brand-charcoal block">{item.title}</span>
                    <p className="text-sm text-brand-charcoal/80 mt-1">{item.desc}</p>
                  </div>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
