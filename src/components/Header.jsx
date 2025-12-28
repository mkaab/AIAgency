import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const links = [
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    {
        label: 'Products',
        children: [
            { href: '/products/nexus', label: 'Nexus', isRoute: true }
        ]
    },
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
    const [dropdownOpen, setDropdownOpen] = useState(null)
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
                    {links.map((l, i) => {
                        // Dropdown handling
                        if (l.children) {
                            return (
                                <div
                                    key={i}
                                    className="relative group"
                                    onMouseEnter={() => setDropdownOpen(i)}
                                    onMouseLeave={() => setDropdownOpen(null)}
                                >
                                    <button className="flex items-center gap-1 text-sm text-brand-charcoal/80 hover:text-brand-blue-600 transition-colors py-2">
                                        {l.label}
                                        <svg className="w-3 h-3 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                    </button>

                                    <div className={`absolute top-full left-0 pt-2 w-48 transition-all duration-200 ${dropdownOpen === i ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-2 invisible'}`}>
                                        <div className="bg-white rounded-xl shadow-xl border border-black/5 overflow-hidden p-1">
                                            {l.children.map((child) => (
                                                <Link
                                                    key={child.href}
                                                    to={child.href}
                                                    className="block px-4 py-2 text-sm text-brand-charcoal/80 hover:bg-brand-blue-50 hover:text-brand-blue-600 rounded-lg transition-colors"
                                                >
                                                    {child.label}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )
                        }

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
                        {links.map((l, i) => {
                            if (l.children) {
                                return (
                                    <div key={i} className="flex flex-col gap-2">
                                        <div className="text-sm font-medium text-brand-charcoal/50 px-1 pt-2 uppercase tracking-wider text-[10px]">{l.label}</div>
                                        {l.children.map(child => (
                                            <Link
                                                key={child.href}
                                                to={child.href}
                                                onClick={() => setMobileOpen(false)}
                                                className="block px-3 py-2 text-sm text-brand-charcoal/80 hover:bg-black/5 rounded-lg"
                                            >
                                                {child.label}
                                            </Link>
                                        ))}
                                    </div>
                                )
                            }

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
