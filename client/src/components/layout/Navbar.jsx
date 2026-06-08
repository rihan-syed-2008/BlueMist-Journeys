import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

export default function Navbar() {
  const isDetailPage = window.location.pathname.includes('package')
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [heroDone, setHeroDone] = useState(false)

  const navigate = useNavigate()
  const location = useLocation()

  const handleNavClick = (link) => {
    const section = link === 'Custom' ? 'custom' : link.toLowerCase()
    if (isDetailPage) {
      navigate('/')
      setTimeout(() => {
        const el = document.getElementById(section)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }, 800)
    } else {
      const el = document.getElementById(section)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const onDetailPage = window.location.pathname.includes('package')

      setScrolled(window.scrollY > 50)

      setHeroDone(onDetailPage || window.scrollY > window.innerHeight * 0.3)
    }

    handleScroll()

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])
  const links = ['Packages', 'Custom', 'Fleet', 'About', 'Contact']

  return (
    <nav
      style={{
        opacity: heroDone ? 1 : 0,
        pointerEvents: heroDone ? 'auto' : 'none',
        transition: 'opacity 0.5s ease',
      }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled || isDetailPage
          ? `${isDetailPage ? 'bg-[#1E3A5F]' : 'bg-white/90 backdrop-blur-md'} shadow-sm py-3`
          : 'bg-transparent py-4'
      }`}
    >
      <div className="w-full px-5 md:px-10 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3">
          <img
            src={
              isDetailPage
                ? '/logos/bluemist-dark-nav.png'
                : '/logos/bluemist-light-nav.png'
            }
            alt="BlueMist Journeys"
            className="
    h-10
    md:h-14
    transition-all
    duration-500
    w-auto
  "
          />
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10 ml-auto">
          {links.map((link) => (
            <button
              key={link}
              onClick={() => handleNavClick(link)}
              className="text-xs tracking-[0.2em] uppercase font-light transition-colors duration-300"
              style={{ color: isDetailPage ? 'white' : 'var(--navy)' }}
              onMouseEnter={(e) => (e.target.style.color = 'var(--teal)')}
              onMouseLeave={(e) =>
                (e.target.style.color = isDetailPage ? 'white' : 'var(--navy)')
              }
            >
              {link}
            </button>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`block h-px w-6 transition-all duration-300 ${
              menuOpen ? 'rotate-45 translate-y-[7px]' : ''
            }`}
            style={{
              backgroundColor: isDetailPage ? 'white' : 'var(--navy)',
            }}
          />
          <span
            className={`block h-px w-6 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}
            style={{
              backgroundColor: isDetailPage ? 'white' : 'var(--navy)',
            }}
          />
          <span
            className={`block h-px w-6 transition-all duration-300 ${
              menuOpen ? '-rotate-45 -translate-y-[7px]' : ''
            }`}
            style={{
              backgroundColor: isDetailPage ? 'white' : 'var(--navy)',
            }}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-500 overflow-hidden ${menuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="bg-white/95 backdrop-blur-md px-6 py-6 flex flex-col gap-6">
          {links.map((link) => (
            <button
              key={link}
              onClick={() => {
                handleNavClick(link)
                setMenuOpen(false)
              }}
              className="text-sm tracking-widest uppercase font-light"
              style={{ color: 'var(--navy)' }}
            >
              {link}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}
