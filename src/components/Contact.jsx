import { useForm } from '@formcarry/react'
import SectionHeading from './SectionHeading'

export default function Contact() {
  const { state, submit } = useForm({ id: 'ATbrs3Zki2t' })

  return (
    <section id="contact" className="relative pointer-events-auto bg-[#0c1a2f] text-white py-32 overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
      <div className="relative mx-auto max-w-6xl px-4">
        <SectionHeading title="Let’s Augment Your Business" darkTheme={true} />
        
        <div className="mt-16 mx-auto rounded-3xl bg-white/5 backdrop-blur-xl p-8 md:p-12 shadow-2xl shadow-black/50 border border-white/10 max-w-3xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-[#33ADFF]" />
          
          <form onSubmit={submit} className="grid gap-8">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="block text-sm font-bold text-white/90 mb-2 uppercase tracking-wide" htmlFor="first_name">First Name *</label>
                <input required id="first_name" name="first_name" className="w-full rounded-xl bg-white/5 border border-white/20 text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-white/50 transition-all shadow-sm placeholder-white/30" />
              </div>
              <div>
                <label className="block text-sm font-bold text-white/90 mb-2 uppercase tracking-wide" htmlFor="last_name">Last Name *</label>
                <input required id="last_name" name="last_name" className="w-full rounded-xl bg-white/5 border border-white/20 text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-white/50 transition-all shadow-sm placeholder-white/30" />
              </div>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="block text-sm font-bold text-white/90 mb-2 uppercase tracking-wide" htmlFor="work_email">Work Email *</label>
                <input required type="email" id="work_email" name="work_email" className="w-full rounded-xl bg-white/5 border border-white/20 text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-white/50 transition-all shadow-sm placeholder-white/30" />
              </div>
              <div>
                <label className="block text-sm font-bold text-white/90 mb-2 uppercase tracking-wide" htmlFor="phone">Phone Number *</label>
                <input required id="phone" name="phone" className="w-full rounded-xl bg-white/5 border border-white/20 text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-white/50 transition-all shadow-sm placeholder-white/30" />
              </div>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="block text-sm font-bold text-white/90 mb-2 uppercase tracking-wide" htmlFor="company_name">Company Name *</label>
                <input required id="company_name" name="company_name" className="w-full rounded-xl bg-white/5 border border-white/20 text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-white/50 transition-all shadow-sm placeholder-white/30" />
              </div>
              <div>
                <label className="block text-sm font-bold text-white/90 mb-2 uppercase tracking-wide" htmlFor="job_title">Job Title *</label>
                <input required id="job_title" name="job_title" className="w-full rounded-xl bg-white/5 border border-white/20 text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-white/50 transition-all shadow-sm placeholder-white/30" />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-bold text-white/90 mb-2 uppercase tracking-wide" htmlFor="annual_revenue">Annual Revenue *</label>
              <select required id="annual_revenue" name="annual_revenue" className="w-full rounded-xl bg-white/5 border border-white/20 text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-white/50 transition-all shadow-sm">
                <option value="" className="text-black">Select one...</option>
                <option value="< $1M" className="text-black">&lt;$1M</option>
                <option value="$1M-$5M" className="text-black">$1M-$5M</option>
                <option value="$6M-$20M" className="text-black">$6M-$20M</option>
                <option value="$21M-$50M" className="text-black">$21M-$50M</option>
                <option value="$51M-$100M" className="text-black">$51M-$100M</option>
                <option value="> $100M" className="text-black">&gt;$100M</option>
              </select>
            </div>
            
            <div>
              <span className="block text-sm font-bold text-white/90 mb-4 uppercase tracking-wide">Which services are you interested in?</span>
              <div className="grid gap-4 sm:grid-cols-3">
                {['AI Transformation', 'AI Engineering', 'Both'].map((service) => (
                  <label key={service} className="relative flex items-center justify-center p-4 rounded-xl border border-white/10 bg-white/5 cursor-pointer hover:bg-white/10 transition-colors group shadow-sm">
                    <input type="radio" name="services" value={service} className="sr-only peer" />
                    <div className="absolute inset-0 rounded-xl border-2 border-transparent peer-checked:border-white transition-colors" />
                    <span className="text-sm font-bold text-white/60 peer-checked:text-white transition-colors">{service}</span>
                  </label>
                ))}
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-bold text-white/90 mb-2 uppercase tracking-wide" htmlFor="needs">Describe your specific needs *</label>
              <textarea required id="needs" name="needs" rows="4" className="w-full rounded-xl bg-white/5 border border-white/20 text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-white/50 transition-all resize-none shadow-sm placeholder-white/30" placeholder="Tell us about the bottlenecks you want to solve..." />
            </div>
            
            <div className="pt-4">
              <button
                type="submit"
                disabled={state.submitting}
                className="w-full py-4 bg-[#33ADFF] text-white rounded-xl font-bold text-lg hover:bg-[#33ADFF]/80 transition-colors shadow-md disabled:opacity-70"
              >
                {state.submitting ? 'Submitting…' : state.succeeded ? 'Submitted Successfully' : 'Submit Application'}
              </button>
              
              {state.succeeded && (
                <div className="mt-4 p-4 bg-green-500/20 text-green-300 rounded-lg text-center font-bold border border-green-500/30">
                  Thanks! We’ll be in touch shortly.
                </div>
              )}
              {!!state.errors?.length && (
                <div className="mt-4 p-4 bg-red-500/20 text-red-300 rounded-lg text-center font-bold border border-red-500/30">
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
