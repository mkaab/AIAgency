import { useForm } from '@formcarry/react'
import SectionHeading from './SectionHeading'

export default function Contact() {
  const { state, submit } = useForm({ id: 'ATbrs3Zki2t' })

  return (
    <section id="contact" className="relative overflow-hidden mx-auto max-w-6xl px-4 py-32 pointer-events-none">
      <div className="pointer-events-auto">
        <SectionHeading title="Let’s Augment Your Business" />
        
        <div className="mt-16 mx-auto rounded-3xl bg-white/80 backdrop-blur-xl p-8 md:p-12 shadow-2xl shadow-black/[0.04] border border-black/5 max-w-3xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-brand-charcoal" />
          
          <form onSubmit={submit} className="grid gap-8">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="block text-sm font-bold text-brand-charcoal/90 mb-2 uppercase tracking-wide" htmlFor="first_name">First Name *</label>
                <input required id="first_name" name="first_name" className="w-full rounded-xl bg-white border border-[#19325a]/20 text-brand-charcoal px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#19325a]/20 focus:border-[#19325a]/50 transition-all shadow-sm" />
              </div>
              <div>
                <label className="block text-sm font-bold text-brand-charcoal/90 mb-2 uppercase tracking-wide" htmlFor="last_name">Last Name *</label>
                <input required id="last_name" name="last_name" className="w-full rounded-xl bg-white border border-[#19325a]/20 text-brand-charcoal px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#19325a]/20 focus:border-[#19325a]/50 transition-all shadow-sm" />
              </div>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="block text-sm font-bold text-brand-charcoal/90 mb-2 uppercase tracking-wide" htmlFor="work_email">Work Email *</label>
                <input required type="email" id="work_email" name="work_email" className="w-full rounded-xl bg-white border border-[#19325a]/20 text-brand-charcoal px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#19325a]/20 focus:border-[#19325a]/50 transition-all shadow-sm" />
              </div>
              <div>
                <label className="block text-sm font-bold text-brand-charcoal/90 mb-2 uppercase tracking-wide" htmlFor="phone">Phone Number *</label>
                <input required id="phone" name="phone" className="w-full rounded-xl bg-white border border-[#19325a]/20 text-brand-charcoal px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#19325a]/20 focus:border-[#19325a]/50 transition-all shadow-sm" />
              </div>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="block text-sm font-bold text-brand-charcoal/90 mb-2 uppercase tracking-wide" htmlFor="company_name">Company Name *</label>
                <input required id="company_name" name="company_name" className="w-full rounded-xl bg-white border border-[#19325a]/20 text-brand-charcoal px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#19325a]/20 focus:border-[#19325a]/50 transition-all shadow-sm" />
              </div>
              <div>
                <label className="block text-sm font-bold text-brand-charcoal/90 mb-2 uppercase tracking-wide" htmlFor="job_title">Job Title *</label>
                <input required id="job_title" name="job_title" className="w-full rounded-xl bg-white border border-[#19325a]/20 text-brand-charcoal px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#19325a]/20 focus:border-[#19325a]/50 transition-all shadow-sm" />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-bold text-brand-charcoal/90 mb-2 uppercase tracking-wide" htmlFor="annual_revenue">Annual Revenue *</label>
              <select required id="annual_revenue" name="annual_revenue" className="w-full rounded-xl bg-white border border-[#19325a]/20 text-brand-charcoal px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#19325a]/20 focus:border-[#19325a]/50 transition-all shadow-sm">
                <option value="">Select one...</option>
                <option value="< $1M">&lt;$1M</option>
                <option value="$1M-$5M">$1M-$5M</option>
                <option value="$6M-$20M">$6M-$20M</option>
                <option value="$21M-$50M">$21M-$50M</option>
                <option value="$51M-$100M">$51M-$100M</option>
                <option value="> $100M">&gt;$100M</option>
              </select>
            </div>
            
            <div>
              <span className="block text-sm font-bold text-brand-charcoal/90 mb-4 uppercase tracking-wide">Which services are you interested in?</span>
              <div className="grid gap-4 sm:grid-cols-3">
                {['AI Transformation', 'AI Engineering', 'Both'].map((service) => (
                  <label key={service} className="relative flex items-center justify-center p-4 rounded-xl border border-black/10 bg-white cursor-pointer hover:bg-gray-50 transition-colors group shadow-sm">
                    <input type="radio" name="services" value={service} className="sr-only peer" />
                    <div className="absolute inset-0 rounded-xl border-2 border-transparent peer-checked:border-brand-charcoal transition-colors" />
                    <span className="text-sm font-bold text-brand-charcoal/60 peer-checked:text-brand-charcoal transition-colors">{service}</span>
                  </label>
                ))}
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-bold text-brand-charcoal/90 mb-2 uppercase tracking-wide" htmlFor="needs">Describe your specific needs *</label>
              <textarea required id="needs" name="needs" rows="4" className="w-full rounded-xl bg-white border border-[#19325a]/20 text-brand-charcoal px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#19325a]/20 focus:border-[#19325a]/50 transition-all resize-none shadow-sm" placeholder="Tell us about the bottlenecks you want to solve..." />
            </div>
            
            <div className="pt-4">
              <button
                type="submit"
                disabled={state.submitting}
                className="w-full py-4 bg-[#19325a] text-white rounded-xl font-bold text-lg hover:bg-black transition-colors shadow-md disabled:opacity-70"
              >
                {state.submitting ? 'Submitting…' : state.succeeded ? 'Submitted Successfully' : 'Submit Application'}
              </button>
              
              {state.succeeded && (
                <div className="mt-4 p-4 bg-green-50 text-green-700 rounded-lg text-center font-bold border border-green-200">
                  Thanks! We’ll be in touch shortly.
                </div>
              )}
              {!!state.errors?.length && (
                <div className="mt-4 p-4 bg-red-50 text-red-700 rounded-lg text-center font-bold border border-red-200">
                  Something went wrong. Please try again.
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
