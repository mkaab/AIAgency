import { motion } from 'framer-motion'
import { Parallax } from 'react-scroll-parallax'
import MagneticButton from './MagneticButton'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[84vh] flex items-center overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-8 py-24 pointer-events-none">
        <Parallax speed={-5}>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] text-brand-charcoal"
          >
            Human Intelligence. <br className="hidden md:block" /> Augmented.
          </motion.h1>
        </Parallax>

        <Parallax speed={-2}>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mt-8 max-w-3xl text-xl text-brand-charcoal/70 leading-relaxed"
          >
            As your AI transformation partner, we set & execute your enterprise AI strategy at startup speed.
          </motion.p>
        </Parallax>

        <div className="mt-10 flex flex-wrap gap-4 pointer-events-auto">
          <MagneticButton href="#contact" className="!bg-[#19325a] !text-white !shadow-[0_8px_30px_rgba(25,50,90,0.3)] hover:!shadow-[0_12px_40px_rgba(25,50,90,0.4)] border border-transparent">
            Talk to Us
          </MagneticButton>
          <a
            href="#impact"
            className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white/50 px-8 py-4 text-base font-medium text-brand-charcoal hover:bg-white hover:border-black/20 hover:shadow-lg transition-all backdrop-blur-md will-change-transform hover:-translate-y-0.5"
          >
            See our work
          </a>
        </div>
      </div>
    </section>
  )
}
