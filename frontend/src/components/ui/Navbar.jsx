import { useState, useEffect } from 'react'

const NAV_LINKS = [
  { href: '#hero',     label: 'HERO' },
  { href: '#skills',   label: 'SKILLS' },
  { href: '#projects', label: 'PROJECTS' },
  { href: '#contact',  label: 'CONTACT' },
]

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)
  const [active,   setActive]     = useState('hero')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)

      // Active section tracking
      const sections = ['hero', 'skills', 'projects', 'contact']
      const offset = window.scrollY + 180
      for (const id of sections) {
        const el = document.getElementById(id)
        if (el && offset >= el.offsetTop && offset < el.offsetTop + el.offsetHeight) {
          setActive(id)
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-panel border-b border-white/5 py-4 shadow-xl' : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-1 group">
          <span className="font-semibold text-xl tracking-tight text-[#13e6c4]">
            Sazib Hossain
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ href, label }) => {
            const id = href.replace('#', '')
            return (
              <a
                key={href}
                href={href}
                className={`text-xs font-semibold tracking-wider transition-all duration-200 relative py-1 ${
                  active === id
                    ? 'text-white'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {label}
                {active === id && (
                  <span className="absolute -bottom-1.5 left-0 w-full h-0.5 bg-[#13e6c4] rounded-full" />
                )}
              </a>
            )
          })}

          <a
            href="/sazib_hossain_resume.pdf"
            download="Sazib_Hossain_Resume.pdf"
            className="text-xs font-extrabold tracking-wider bg-[#13e6c4] text-black px-6 py-2.5 rounded-full hover:bg-[#0fd8b8] transition-all shadow-md hover:shadow-lg hover:shadow-[#13e6c4]/15"
          >
            RESUME
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          id="mobile-menu-toggle"
          className="md:hidden text-slate-400 hover:text-white transition-colors"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle navigation"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="glass-panel border-t border-white/5 px-6 py-5 flex flex-col gap-4">
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="text-slate-300 hover:text-[#13e6c4] transition-colors text-sm font-semibold tracking-wider"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
          <a
            href="/sazib_hossain_resume.pdf"
            download="Sazib_Hossain_Resume.pdf"
            className="text-sm font-extrabold tracking-wider bg-[#13e6c4] text-black rounded-full py-2.5 text-center"
            onClick={() => setMenuOpen(false)}
          >
            RESUME
          </a>
        </nav>
      </div>
    </header>
  )
}
