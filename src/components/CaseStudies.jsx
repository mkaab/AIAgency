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
    <section id="impact" className="relative pointer-events-auto bg-[#0c1a2f] text-white py-24 overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
      <div className="relative mx-auto max-w-6xl px-4">
        <SectionHeading title="What we believe" darkTheme={true} />
        
        <div className="mt-16 rounded-3xl bg-white/5 backdrop-blur-xl p-8 shadow-2xl shadow-black/50 border border-white/10">
          <div className="grid gap-8 md:grid-cols-4">
            {cases.map((c, i) => (
              <motion.div
                key={c.kpi}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.06 * i }}
                className="rounded-3xl p-[1px] bg-gradient-to-br from-white/10 to-transparent group cursor-pointer"
              >
                <div className="h-full rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 overflow-hidden shadow-xl shadow-black/50 group-hover:shadow-2xl group-hover:bg-white/10 group-hover:-translate-y-1 transition-all">
                  <div className="relative h-24 w-full bg-[linear-gradient(135deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] overflow-hidden border-b border-white/5">
                    {/* Animated gradient overlay to replace image error if no image exists */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
                  </div>
                  <div className="p-6 text-center">
                    <div className="font-display text-xl font-bold text-white">{c.kpi}</div>
                    <p className="mt-3 text-sm leading-relaxed text-white/70">{c.blurb}</p>
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
