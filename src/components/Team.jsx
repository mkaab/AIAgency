import SectionHeading from './SectionHeading'
import { motion } from 'framer-motion'
import { Parallax } from 'react-scroll-parallax'

export default function Team() {
  return (
    <section id="team" className="relative overflow-hidden mx-auto max-w-6xl px-4 py-20">
      <Parallax speed={-4}>
        <div className="pointer-events-none absolute inset-x-0 top-8 h-40 bg-gradient-to-r from-brand-blue-600/10 via-transparent to-brand-blue-500/10" />
      </Parallax>
      <SectionHeading title="Who we are" />
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-10 rounded-2xl bg-white/80 backdrop-blur-sm p-6 shadow-sm border border-black/5"
      >
        <p className="text-brand-charcoal/80">
          As the cost of intelligence approaches zero, businesses will need to transition from AI-absent to AI-native if they want to stay relevant and succeed.
              You could drive that transformation from within. Our bet is, you won’t. Not because you don’t want to. Not because you don’t believe it’s necessary. But because you’re focused on business.
        </p>
        <ul className="mt-6 space-y-3 text-sm text-brand-charcoal/80 list-disc pl-5">
          <li>Track record delivering production AI augmentation with measurable impact.</li>
          <li>Design-first approach to human-in-the-loop systems and automation.</li>
          <li>Outcome-driven engagements with clear success metrics.</li>
        </ul>
      </motion.div>
    </section>
  )
}
