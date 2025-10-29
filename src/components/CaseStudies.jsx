import { motion } from 'framer-motion'
import { Parallax } from 'react-scroll-parallax'
import SectionHeading from './SectionHeading'

const cases = [
  { kpi: 'We hire the best', blurb: 'We know that one world-class engineer can do more than 10 mediocre engineers, so we only hire the best.', img: '/img/case-1.png' },
  { kpi: 'We use AI (a lot)', blurb: 'We use all the off-the-shelf AI tools and we build our own tools to get an edge.', img: '/img/case-2.png' },
  { kpi: 'We charge on outcomes', blurb: 'We charge our clients based on what we produce, measured by story-points that we define.', img: '/img/case-3.png' },
  { kpi: 'We pay on outcomes', blurb: 'We pay our team based on the story-points that they complete. So everyone is aligned on output and speed.', img: '/img/case-4.png' },
]

export default function CaseStudies() {
  return (
    <section id="impact" className="relative overflow-hidden">
      <Parallax speed={-6}>
        <div className="absolute inset-x-0 top-10 h-48 bg-gradient-to-r from-brand-blue-600/10 via-transparent to-brand-blue-500/10" />
      </Parallax>
      <div className="relative mx-auto max-w-6xl px-4 py-20">
        <SectionHeading title="What we believe" />
        <div className="mt-10 rounded-2xl bg-white/80 backdrop-blur-sm p-6 shadow-sm border border-black/5">
          <div className="grid gap-6 md:grid-cols-4">
          {cases.map((c, i) => (
            <motion.div
              key={c.kpi}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.06 * i }}
              className="rounded-2xl p-[1px] bg-gradient-to-br from-brand-blue-600/40 via-brand-blue-500/20 to-transparent"
            >
              <div className="rounded-2xl bg-white/85 backdrop-blur-sm shadow-sm overflow-hidden">
                <div className="relative h-20 w-full bg-[linear-gradient(135deg,rgba(0,123,255,0.15),rgba(0,150,255,0.15))]">
                  {/* Placeholder image slot */}
                  <img src={c.img} alt="Case study" className="h-full w-full object-cover" onError={(e)=>{ e.currentTarget.style.display='none' }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-white/40 to-transparent" />
                </div>
                <div className="p-6 text-center">
                  <div className="text-xl font-semibold text-brand-charcoal">{c.kpi}</div>
                  <p className="mt-2 text-sm text-brand-charcoal/80">{c.blurb}</p>
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
