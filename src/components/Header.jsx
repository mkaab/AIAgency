import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const links = [
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#team', label: 'Team' },
    { href: '#impact', label: 'Impact' },
    { href: '#faq', label: 'FAQ' },
    { href: '#contact', label: 'Contact' },
    { href: '/blog', label: 'Blog', isRoute: true },
]

export default function Header() {
    const [scrolled, setScrolled] = useState(false)
    const [active, setActive] = useState('')
    const [logoOk, setLogoOk] = useState(true)
    const [mobileOpen, setMobileOpen] = useState(false)
    const location = useLocation()
    const isHome = location.pathname === '/'

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    useEffect(() => {
        if (!isHome) {
            setActive('')
            return
        }
        const ids = ['hero', 'about', 'services', 'team', 'impact', 'faq', 'contact']
        const sections = ids
            .map((id) => document.getElementById(id))
            .filter(Boolean)
        if (sections.length === 0) return

        const obs = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActive('#' + entry.target.id)
                    }
                })
            },
            { rootMargin: '-45% 0px -45% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] }
        )
        sections.forEach((sec) => obs.observe(sec))
        return () => obs.disconnect()
    }, [isHome])

    return (
        <header className={`sticky top-0 z-50 transition-colors ${scrolled ? 'bg-white/65' : 'bg-white/35'} backdrop-blur-xl border-b border-black/10 shadow-[0_2px_20px_rgba(0,0,0,0.06)]`}>
            <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
                <Link to="/" className="flex items-center gap-2">
                    {logoOk && (
                        <img
                            src="/img/logo.png"
                            alt="AltaServ"
                            className="h-7 w-auto"
                            onError={() => setLogoOk(false)}
                        />
                    )}
                    {!logoOk && (
                        <div className="text-xl font-semibold text-brand-charcoal">AltaServ</div>
                    )}
                </Link>
                <button
                    aria-label="Toggle menu"
                    className="md:hidden rounded-md border border-black/10 px-3 py-2 text-brand-charcoal/80 bg-white/60 backdrop-blur-sm"
                    onClick={() => setMobileOpen((v) => !v)}
                >
                    ☰
                </button>
                <nav className="hidden md:flex items-center gap-6">
                    {links.map((l) => {
                        const isActive = active === l.href || (l.isRoute && location.pathname === l.href)

                        if (l.isRoute) {
                            return (
                                <Link
                                    key={l.href}
                                    to={l.href}
                                    className={`relative text-sm transition-colors after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-gradient-to-r from-brand-blue-600 to-brand-blue-500 after:transition-all hover:after:w-full ${isActive ? 'text-brand-blue-600' : 'text-brand-charcoal/80 hover:text-brand-blue-600'}`}
                                >
                                    {l.label}
                                </Link>
                            )
                        }

                        return (
                            <a
                                key={l.href}
                                href={isHome ? l.href : `/${l.href}`}
                                className={`relative text-sm transition-colors after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-gradient-to-r from-brand-blue-600 to-brand-blue-500 after:transition-all hover:after:w-full ${isActive ? 'text-brand-blue-600' : 'text-brand-charcoal/80 hover:text-brand-blue-600'}`}
                            >
                                {l.label}
                            </a>
                        )
                    })}

                </nav>
            </div>
            {mobileOpen && (
                <div className="md:hidden border-t border-black/10 bg-white/85 backdrop-blur-xl">
                    <div className="mx-auto max-w-6xl px-4 py-3 flex flex-col gap-3">
                        {links.map((l) => {
                            const isActive = active === l.href || (l.isRoute && location.pathname === l.href)

                            if (l.isRoute) {
                                return (
                                    <Link
                                        key={l.href}
                                        to={l.href}
                                        onClick={() => setMobileOpen(false)}
                                        className={`text-sm ${isActive ? 'text-brand-blue-600' : 'text-brand-charcoal/80'} py-1`}
                                    >
                                        {l.label}
                                    </Link>
                                )
                            }

                            return (
                                <a
                                    key={l.href}
                                    href={isHome ? l.href : `/${l.href}`}
                                    onClick={() => setMobileOpen(false)}
                                    className={`text-sm ${isActive ? 'text-brand-blue-600' : 'text-brand-charcoal/80'} py-1`}
                                >
                                    {l.label}
                                </a>
                            )
                        })}
                    </div>
                </div>
            )}
        </header>
    )
}
