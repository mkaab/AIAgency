import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'

const cases = [
  { kpi: 'We hire the best', blurb: 'We know that one world-class engineer can do more than 10 mediocre engineers, so we only hire the best and retain them.', img: '/img/case-1.png' },
  { kpi: 'We use AI (a lot)', blurb: 'We use all the off-the-shelf AI tools where needed and we build our own tools to get an edge when the use case arises.', img: '/img/case-2.png' },
  { kpi: 'We charge on outcomes', blurb: 'We charge our clients based on what we produce, measured by story-points that we define.', img: '/img/case-3.png' },
  { kpi: 'We pay on outcomes', blurb: 'We pay our team based on the story-points that they complete. So everyone is aligned on output and speed.', img: '/img/case-4.png' },
]

export default function CaseStudies() {
  return (
    <section id="impact" className="relative overflow-hidden pointer-events-none">
      <div className="relative mx-auto max-w-6xl px-4 py-20 pointer-events-auto">
        <SectionHeading title="What we believe" />
        
        <div className="mt-16 rounded-3xl bg-white/50 backdrop-blur-xl p-8 shadow-2xl shadow-black/[0.04] border border-black/5">
          <div className="grid gap-8 md:grid-cols-4">
            {cases.map((c, i) => (
              <motion.div
                key={c.kpi}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.06 * i }}
                className="rounded-3xl p-[1px] bg-gradient-to-br from-black/5 to-transparent group cursor-pointer"
              >
                <div className="h-full rounded-3xl bg-white/90 backdrop-blur-xl border border-white overflow-hidden shadow-xl shadow-black/[0.04] group-hover:shadow-2xl group-hover:shadow-black/10 group-hover:-translate-y-1 transition-all">
                  <div className="relative h-24 w-full bg-[linear-gradient(135deg,rgba(0,123,255,0.05),rgba(0,150,255,0.02))] overflow-hidden border-b border-black/5">
                    {/* Animated gradient overlay to replace image error if no image exists */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#19325a]/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition duration-500" />
                  </div>
                  <div className="p-6 text-center">
                    <div className="font-display text-xl font-bold text-brand-charcoal">{c.kpi}</div>
                    <p className="mt-3 text-sm leading-relaxed text-brand-charcoal/70">{c.blurb}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
