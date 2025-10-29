export default function Footer() {
  return (
    <footer className="mt-16 border-t border-black/10 bg-white/60">
      <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-brand-charcoal/80 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <div>© <span>{new Date().getFullYear()}</span> AltaServ. All rights reserved.</div>
        <div className="flex gap-4">
          <a href="#" className="hover:underline">LinkedIn</a>
          <a href="#" className="hover:underline">X</a>
          <a href="#" className="hover:underline">Privacy</a>
          <a href="#" className="hover:underline">Terms</a>
        </div>
      </div>
    </footer>
  )
}
