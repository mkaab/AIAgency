import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-black/10 bg-white/80 backdrop-blur-md relative z-10">
      <div className="mx-auto max-w-6xl px-4 py-10 text-sm font-medium text-brand-charcoal/60 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>© <span>{new Date().getFullYear()}</span> AltaServ. All rights reserved.</div>
        <div className="flex gap-6">
          <a href="https://uk.linkedin.com/company/altaserv" target="_blank" rel="noopener noreferrer" className="hover:text-brand-charcoal transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-brand-charcoal transition-colors">X</a>
          <Link to="/privacy" className="hover:text-brand-charcoal transition-colors">Privacy</Link>
          <a href="#" className="hover:text-brand-charcoal transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  )
}
