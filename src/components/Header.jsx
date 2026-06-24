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
        <header className={`fixed inset-x-0 z-50 transition-all duration-500 ease-out px-4 ${scrolled ? 'top-4' : 'top-0'}`}>
            <div className={`mx-auto max-w-[1400px] flex items-center justify-between transition-all duration-500 ease-out ${scrolled ? 'bg-white/80 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-black/10 rounded-2xl px-6 py-4' : 'bg-transparent border border-transparent px-6 py-6'}`}>
                <Link to="/" className="flex items-center gap-2">
                    {logoOk && (
                        <img
                            src="/img/logo.png"
                            alt="AltaServ"
                            className="h-8 w-auto"
                            onError={() => setLogoOk(false)}
                        />
                    )}
                    {!logoOk && (
                        <div className="text-2xl font-bold tracking-tight text-brand-charcoal font-display">AltaServ</div>
                    )}
                </Link>
                <button
                    aria-label="Toggle menu"
                    className="md:hidden rounded-lg border border-black/10 px-3 py-2 text-brand-charcoal bg-white/60 backdrop-blur-md"
                    onClick={() => setMobileOpen((v) => !v)}
                >
                    ☰
                </button>
                <nav className="hidden md:flex items-center gap-8">
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
                                    <button className={`flex items-center gap-1.5 text-base font-medium transition-colors py-2 ${scrolled ? 'text-brand-charcoal/80 hover:text-brand-charcoal' : 'text-brand-charcoal hover:text-[#19325a]'}`}>
                                        {l.label}
                                        <svg className="w-3.5 h-3.5 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                    </button>

                                    <div className={`absolute top-full left-0 pt-4 w-48 transition-all duration-300 ${dropdownOpen === i ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-4 invisible'}`}>
                                        <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-[0_20px_40px_rgb(0,0,0,0.1)] border border-black/10 overflow-hidden p-1.5">
                                            {l.children.map((child) => (
                                                <Link
                                                    key={child.href}
                                                    to={child.href}
                                                    className="block px-4 py-2.5 text-sm font-medium text-brand-charcoal/80 hover:bg-black/5 hover:text-brand-charcoal rounded-xl transition-colors"
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
                                    className={`relative text-base font-medium transition-colors after:absolute after:left-0 after:-bottom-1.5 after:h-[2px] after:w-0 after:bg-[#19325a] after:transition-all hover:after:w-full ${isActive ? 'text-[#19325a] after:w-full' : scrolled ? 'text-brand-charcoal/80 hover:text-brand-charcoal' : 'text-brand-charcoal hover:text-[#19325a]'}`}
                                >
                                    {l.label}
                                </Link>
                            )
                        }

                        return (
                            <a
                                key={l.href}
                                href={isHome ? l.href : `/${l.href}`}
                                className={`relative text-base font-medium transition-colors after:absolute after:left-0 after:-bottom-1.5 after:h-[2px] after:w-0 after:bg-[#19325a] after:transition-all hover:after:w-full ${isActive ? 'text-[#19325a] after:w-full' : scrolled ? 'text-brand-charcoal/80 hover:text-brand-charcoal' : 'text-brand-charcoal hover:text-[#19325a]'}`}
                            >
                                {l.label}
                            </a>
                        )
                    })}
                </nav>
            </div>
            
            {/* Mobile Menu */}
            {mobileOpen && (
                <div className="md:hidden mt-2 mx-4 border border-black/10 bg-white/95 backdrop-blur-xl shadow-2xl rounded-2xl overflow-hidden">
                    <div className="px-4 py-4 flex flex-col gap-4">
                        {links.map((l, i) => {
                            if (l.children) {
                                return (
                                    <div key={i} className="flex flex-col gap-2">
                                        <div className="text-xs font-bold text-brand-charcoal/40 px-1 pt-2 uppercase tracking-widest">{l.label}</div>
                                        {l.children.map(child => (
                                            <Link
                                                key={child.href}
                                                to={child.href}
                                                onClick={() => setMobileOpen(false)}
                                                className="block px-3 py-2 text-base font-medium text-brand-charcoal/80 hover:bg-black/5 rounded-lg"
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
                                        className={`text-base font-medium ${isActive ? 'text-[#19325a]' : 'text-brand-charcoal/80'} py-2 px-1`}
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
                                    className={`text-base font-medium ${isActive ? 'text-[#19325a]' : 'text-brand-charcoal/80'} py-2 px-1`}
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
