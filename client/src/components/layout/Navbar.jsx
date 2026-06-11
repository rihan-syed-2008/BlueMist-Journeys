import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

export default function Navbar() {
  const navigate = useNavigate()
  const location = useLocation()

  const isDetailPage = location.pathname.includes('/package/')
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [heroDone, setHeroDone] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isHome = location.pathname === '/'

      setScrolled(window.scrollY > 50)

      setHeroDone(!isHome || window.scrollY > window.innerHeight * 0.3)
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
  const links = [
    { label: 'Transfers', path: '/transfers' },
    { label: 'Journeys', path: '/journeys' },
    { label: 'Explore', path: '/explore' },
    { label: 'Plan My Trip', path: '/custom-trip' },
  ]

  return (
    <>
    <nav
      style={{
        opacity: heroDone ? 1 : 0,
        pointerEvents: heroDone ? 'auto' : 'none',
        transition: 'opacity 0.5s ease',
      }}
      className={`fixed top-0 w-full z-[110] transition-all duration-500 ${
        scrolled || isDetailPage
          ? `${isDetailPage ? 'bg-[#1E3A5F]' : 'bg-white/90 backdrop-blur-md'} shadow-sm py-4`
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
        <div className="hidden md:flex items-center gap-3 px-1 ml-auto">
          {links.map((link) => {
            const isActive =
              link.path === '/explore'
                ? location.pathname.startsWith('/explore')
                : location.pathname === link.path

            return (
              <button
                key={link.label}
                onClick={() => navigate(link.path)}
                className={`
        px-4 py-2 rounded-full
        text-xs tracking-[0.18em] uppercase font-light
        transition-all duration-300

        ${
          isActive
            ? 'bg-[#5BC0BE] text-white shadow-sm'
            : 'text-[var(--navy)] hover:bg-[#1E3A5F]/10'
        }
      `}
              >
                {link.label}
              </button>
            )
          })}
        </div>
        <a
          href="https://wa.me/917200969889"
          target="_blank"
          rel="noopener noreferrer"
          className="
hidden md:flex
items-center
px-6 py-2.5
rounded-full
border border-[#5BC0BE]
text-[#5BC0BE]
hover:bg-[#5BC0BE]
hover:text-white
transition-all duration-300
text-xs tracking-[0.18em] uppercase
"
        >
          WhatsApp
        </a>

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
    </nav>
    {/* Mobile Navigation Overlay */}
      <div
        className={`
    md:hidden
    fixed inset-0 z-[100]
    bg-[#F8F6F2]
    transition-all duration-500
    ${
      menuOpen
        ? 'opacity-100 pointer-events-auto'
        : 'opacity-0 pointer-events-none'
    }
  `}
      >

        {/* Navigation */}
        <div className="flex flex-col items-center justify-center h-[75vh]">
          <div className="flex flex-col items-center gap-8">
            {links.map((link) => {
              const isActive =
                link.path === '/explore'
                  ? location.pathname.startsWith('/explore')
                  : location.pathname === link.path

              return (
                <button
                  key={link.label}
                  onClick={() => {
                    navigate(link.path)
                    setMenuOpen(false)
                  }}
                  className={`
              text-lg
              tracking-[0.25em]
              uppercase
              transition-all
              duration-300
              relative

              ${isActive ? 'text-[#5BC0BE]' : 'text-[var(--navy)]'}
            `}
                >
                  {link.label}
                </button>
              )
            })}
          </div>

          {/* Divider */}
          <div className="w-12 h-px bg-[#1E3A5F]/20 my-10" />

          {/* WhatsApp */}
          <a
            href="https://wa.me/917200969889"
            target="_blank"
            rel="noopener noreferrer"
            className="
        px-8 py-3
        rounded-full
        border
        border-[#5BC0BE]
        text-[#5BC0BE]
        text-sm
        tracking-[0.18em]
        uppercase
        transition-all
        duration-300
        hover:bg-[#5BC0BE]
        hover:text-white
      "
          >
            WhatsApp
          </a>
        </div>
      </div>
    </>
  )
}
