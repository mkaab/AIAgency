import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'

export default function About() {
  return (
    <section id="about" className="relative pointer-events-auto bg-[#0c1a2f] text-white py-24 overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
      <div className="relative mx-auto max-w-5xl px-4">
        <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <SectionHeading
            darkTheme={true}
            title={
              <>
                <span className="text-[#33ADFF]">AltaServ</span> helps you shift from AI-absent to AI-native.
              </>
            }
          />
        </motion.div>
        
        <div className="mt-16 grid gap-12 md:grid-cols-2 items-center">
          {/* Visual placeholder - AI collaboration illustration */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="order-2 md:order-1"
          >
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-8 flex items-center justify-center min-h-[400px] shadow-xl shadow-black/50">
              <DotLottieReact
                src="https://lottie.host/f97d957b-c029-418f-be20-481dbf1d363e/cPkmFPC7Q0.lottie"
                loop
                autoplay
                className="w-full h-full max-w-[500px] max-h-[500px] invert opacity-80"
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
              className="rounded-3xl bg-white/5 backdrop-blur-xl p-8 shadow-xl shadow-black/50 border border-white/10"
            >
              <p className="text-white/80 text-lg leading-relaxed">
                Our mission is to help your business reach its potential & end up on the right side of history, post-AI. We partner with leadership teams to turn AI from
                hype into compounding business advantage.
              </p>
            </motion.div>

            <ul className="space-y-4">
              {[
                { title: 'Trustworthy AI', desc: 'Have complete control over your data', icon: '🔒' },
                { title: 'Scalable augmentation', desc: 'Augment your team efficiently and safely', icon: '📈' },
                { title: 'Outcome-focused delivery', desc: 'Deliver measurable business results quickly', icon: '🎯' },
              ].map((item, i) => (
                <motion.li key={item.title} initial={{ opacity: 0, x: 10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.15 * i }}
                  className="rounded-2xl p-[1px] bg-gradient-to-r from-white/10 to-transparent">
                  <div className="rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-5 flex items-start gap-4 shadow-xl shadow-black/50 hover:shadow-2xl hover:bg-white/10 transition-all">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <span className="font-display font-semibold text-white block text-lg">{item.title}</span>
                      <p className="text-sm text-white/70 mt-1">{item.desc}</p>
                    </div>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
