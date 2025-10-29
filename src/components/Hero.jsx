import { motion } from 'framer-motion'
import { Parallax } from 'react-scroll-parallax'
import ParticlesBG from './ParticlesBG'
import MagneticButton from './MagneticButton'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[84vh] flex items-center overflow-hidden">
      {/* Stronger ambient gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-blue-600/15 via-white to-brand-blue-500/10" />

      {/* Particles */}
      <ParticlesBG className="absolute inset-0" density={0.00018} color="rgba(0,90,200,0.28)" />

      {/* Soft animated blobs */}
      <motion.div
        aria-hidden
        className="absolute -top-20 -left-16 h-72 w-72 rounded-full bg-brand-blue-600/30 blur-3xl"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden
        className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-brand-blue-500/25 blur-3xl"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative mx-auto max-w-7xl px-8 py-24">
        <Parallax speed={-5}>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold tracking-tight text-brand-charcoal drop-shadow-[0_1px_0_rgba(255,255,255,0.6)]"
          >
            Human Intelligence. Augmented.
          </motion.h1>
        </Parallax>

        <Parallax speed={-2}>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mt-4 max-w-3xl text-brand-charcoal/80"
          >
           As your AI transformation partner, we set & execute your enterprise AI strategy at startup speed.
          </motion.p>
        </Parallax>

        <div className="mt-8 flex gap-4">
          <MagneticButton
            href="#contact"
            className="rounded-xl bg-gradient-to-r from-brand-blue-600 to-brand-blue-500 px-5 py-3 text-sm shadow-lg shadow-brand-blue-600/20 hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-500/50"
          >
            Talk to Us
          </MagneticButton>
          <a
            href="#impact"
            className="inline-flex items-center rounded-xl border border-black/10 bg-white/60 px-5 py-3 text-sm text-brand-charcoal hover:bg-white transition will-change-transform hover:-translate-y-0.5"
          >
            See our work
          </a>
        </div>
      </div>
    </section>
  )
}
