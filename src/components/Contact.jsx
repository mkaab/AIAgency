import { useForm } from '@formcarry/react'
import SectionHeading from './SectionHeading'
import { Parallax } from 'react-scroll-parallax'

export default function Contact() {
  const { state, submit } = useForm({ id: 'ATbrs3Zki2t' })

  return (
    <section id="contact" className="relative overflow-hidden mx-auto max-w-6xl px-4 py-20">
      <Parallax speed={-4}>
        <div className="pointer-events-none absolute inset-x-0 top-8 h-40 bg-gradient-to-r from-brand-blue-600/10 via-transparent to-brand-blue-500/10" />
      </Parallax>
      <SectionHeading title="Let’s Augment Your Business" />
      <div className="mt-10 mx-auto rounded-2xl bg-white/80 backdrop-blur-sm p-6 shadow-sm border border-black/5 max-w-3xl">
        <form onSubmit={submit} className="grid gap-5">
          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-brand-charcoal" htmlFor="first_name">First Name *</label>
              <input required id="first_name" name="first_name" className="mt-1 w-full rounded-lg border border-black/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-blue-500/40" />
            </div>
            <div>
              <label className="block text-sm font-medium text-brand-charcoal" htmlFor="last_name">Last Name *</label>
              <input required id="last_name" name="last_name" className="mt-1 w-full rounded-lg border border-black/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-blue-500/40" />
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-brand-charcoal" htmlFor="work_email">Work Email *</label>
              <input required type="email" id="work_email" name="work_email" className="mt-1 w-full rounded-lg border border-black/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-blue-500/40" />
            </div>
            <div>
              <label className="block text-sm font-medium text-brand-charcoal" htmlFor="phone">Phone Number *</label>
              <input required id="phone" name="phone" className="mt-1 w-full rounded-lg border border-black/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-blue-500/40" />
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-brand-charcoal" htmlFor="company_name">Company Name *</label>
              <input required id="company_name" name="company_name" className="mt-1 w-full rounded-lg border border-black/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-blue-500/40" />
            </div>
            <div>
              <label className="block text-sm font-medium text-brand-charcoal" htmlFor="job_title">Job Title *</label>
              <input required id="job_title" name="job_title" className="mt-1 w-full rounded-lg border border-black/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-blue-500/40" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-brand-charcoal" htmlFor="annual_revenue">Annual Revenue *</label>
            <select required id="annual_revenue" name="annual_revenue" className="mt-1 w-full rounded-lg border border-black/10 px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue-500/40">
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
            <span className="block text-sm font-medium text-brand-charcoal">Which services are you interested in?</span>
            <div className="mt-4 grid gap-5 md:grid-cols-3">
              <label className="inline-flex items-center gap-2 text-sm text-brand-charcoal/90">

                <input type="radio" name="services" value="AI Transformation" className="h-4 w-4" />
                <span>AI Transformation</span>
              </label>
              <label className="inline-flex items-center gap-2 text-sm text-brand-charcoal/90">
                <input type="radio" name="services" value="AI Engineering" className="h-4 w-4" />
                <span>AI Engineering</span>
              </label>
              <label className="inline-flex items-center gap-2 text-sm text-brand-charcoal/90">
                <input type="radio" name="services" value="Both" className="h-4 w-4" />
                <span>Both</span>
              </label>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-brand-charcoal" htmlFor="needs">Describe your specific needs you'd like our solutions to support *</label>
            <textarea required id="needs" name="needs" rows="4" className="mt-1 w-full rounded-lg border border-black/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-blue-500/40" />
          </div>
          <div>
            <label className="block text-sm font-medium text-brand-charcoal" htmlFor="referral">How did you hear about us?</label>
            <input id="referral" name="referral" className="mt-1 w-full rounded-lg border border-black/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-blue-500/40" />
          </div>
          <div className="flex items-center justify-center gap-3">
            <button
              type="submit"
              disabled={state.submitting}
              className="rounded-lg bg-gradient-to-r from-brand-blue-600 to-brand-blue-500 px-5 py-2.5 text-sm shadow hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-500/50 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {state.submitting ? 'Submitting…' : state.succeeded ? 'Submitted' : 'Submit'}
            </button>
            {state.succeeded && <span className="text-green-600 text-sm">Thanks! We’ll be in touch.</span>}
            {!!state.errors?.length && <span className="text-red-600 text-sm">Something went wrong. Please try again.</span>}
          </div>
        </form>
      </div>
    </section>
  )
}
