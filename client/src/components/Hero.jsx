import { useEffect, useState, useRef } from 'react'

export default function Hero() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const sectionRef = useRef(null)
  

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        if (!sectionRef.current) return
        const rect = sectionRef.current.getBoundingClientRect()
        const sectionHeight =
          sectionRef.current.offsetHeight - window.innerHeight
        const scrolled = -rect.top
        const progress = Math.min(Math.max(scrolled / sectionHeight, 0), 1)
        setScrollProgress(progress)
      })
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const mistOpacity = Math.max(0, 1 - scrollProgress / 0.5)
  const contentOpacity = Math.max(0, (scrollProgress - 0.5) / 0.5)
  const logoOpacity = Math.max(0, 1 - scrollProgress / 0.45)

  return (
    <>
      <section
        ref={sectionRef}
        style={{ height: '150vh' }}
        className="relative"
      >
        <div
          className="sticky top-0 w-full overflow-hidden"
          style={{ height: '105vh' }}
        >
          {/* Background photo — covers full viewport including edges */}
          <div
            className="absolute z-0"
            style={{
              top: '-2%',
              left: '-5%',
              right: '-5%',
              bottom: '-5%',
              backgroundImage: 'url(/images/hero-bg.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              transform: `scale(${1 + scrollProgress * 0.08})`,
            }}
          />

          {/* Dark overlay */}
          <div
            className="absolute inset-0 z-10"
            style={{
              background:
                'linear-gradient(to bottom, rgba(15,33,56,0.55) 0%, rgba(15,33,56,0.45) 50%, rgba(15,33,56,0.3) 100%)',
            }}
          />

          {/* Mist Layer 1 — extended beyond edges */}
          <div
            className="absolute z-20 pointer-events-none"
            style={{
              top: '-10%',
              left: '-10%',
              right: '-10%',
              bottom: '-10%',
              opacity: mistOpacity,
              background: `
                radial-gradient(ellipse 130% 70% at 50% 40%, rgba(255,255,255,0.92) 0%, transparent 55%),
                radial-gradient(ellipse 90% 50% at 20% 60%, rgba(200,220,230,0.75) 0%, transparent 55%),
                radial-gradient(ellipse 90% 50% at 80% 60%, rgba(200,220,230,0.75) 0%, transparent 55%),
                radial-gradient(ellipse 60% 40% at 0% 50%, rgba(220,230,240,0.8) 0%, transparent 50%),
                radial-gradient(ellipse 60% 40% at 100% 50%, rgba(220,230,240,0.8) 0%, transparent 50%)
              `,
              animation: 'mistFloat 8s ease-in-out infinite alternate',
            }}
          />

          {/* Mist Layer 3 — ground + edges */}
          <div
            className="absolute z-20 pointer-events-none"
            style={{
              top: '-10%',
              left: '-10%',
              right: '-10%',
              bottom: '-10%',
              opacity: mistOpacity,
              background: `
                linear-gradient(to top, rgba(15,33,56,0.6) 0%, rgba(15,33,56,0.2) 20%, transparent 45%),
                linear-gradient(to bottom, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.4) 35%, transparent 60%),
                linear-gradient(to right, rgba(255,255,255,0.7) 0%, transparent 25%),
                linear-gradient(to left, rgba(255,255,255,0.7) 0%, transparent 25%)
              `,
              animation: 'mistFloat 6s ease-in-out infinite alternate',
            }}
          />

          {/* Centered Logo — fades out in place, no movement */}
          <div
            className="absolute z-40 pointer-events-none"
            style={{
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              opacity: logoOpacity,
              transition: 'opacity 0.05s linear',
            }}
          >
            <img
              src="/logos/bluemist-light.png"
              alt="BlueMist Journeys"
              style={{ width: '280px', maxWidth: '60vw' }}
            />
          </div>

          {/* Hero Content */}
          <div
            className="absolute inset-0 z-30 flex items-center justify-center"
            style={{
              opacity: contentOpacity,
              transform: `translateY(${(1 - contentOpacity) * 30}px)`,
              pointerEvents: contentOpacity > 0.5 ? 'auto' : 'none',
            }}
          >
            <div className="text-center px-6 max-w-5xl mx-auto">
              <p
                className="text-xs tracking-[0.4em] uppercase mt-16 mb-8"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  color: 'var(--teal)',
                }}
              >
                Coonoor · Ooty · Kotagiri · Masinagudi
              </p>

              <h1
                className="mb-10 leading-tight"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 'clamp(2rem, 5vw, 4.5rem)',
                  fontWeight: 300,
                  color: 'white',
                  textShadow: '0 2px 40px rgba(0,0,0,0.3)',
                }}
              >
                The Nilgiris
                <br />
                <span
                  style={{
                    color: 'rgba(255,255,255,0.75)',
                    fontStyle: 'italic',
                    fontWeight: 300,
                  }}
                >
                  The way locals know it
                </span>
              </h1>

              <p
                className="mb-10 font-light max-w-xl mx-auto"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
                  color: 'rgba(255,255,255,0.85)',
                  lineHeight: 1.8,
                  textShadow: '0 1px 20px rgba(0,0,0,1)',
                }}
              >
                Private cab tours, curated packages, and local expertise across
                the Nilgiris. Trusted by travellers since day one.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => {
                    const el = document.getElementById('custom')
                    if (el) el.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="px-8 py-4 text-sm tracking-widest uppercase font-light text-white transition-all duration-300 hover:opacity-80 hover:scale-105"
                  style={{ backgroundColor: 'var(--teal)' }}
                >
                  Plan Your Journey
                </button>
                <button
                  onClick={() => {
                    const el = document.getElementById('packages')
                    if (el) el.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="px-8 py-4 text-sm tracking-widest uppercase font-light transition-all duration-300 hover:opacity-80 hover:scale-105"
                  style={{
                    color: 'white',
                    border: '2px solid rgba(255,255,255,0.6)',
                    backdropFilter: 'blur(4px)',
                    background: 'transparent',
                    cursor: 'pointer',
                  }}
                >
                  View Packages
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes mistFloat {
          0%   { transform: translateX(-15px) translateY(0px) scaleX(1); }
          100% { transform: translateX(15px) translateY(-10px) scaleX(1.05); }
        }
        @keyframes mistFloat2 {
          0%   { transform: translateX(10px) translateY(-5px) scaleX(1); }
          100% { transform: translateX(-20px) translateY(8px) scaleX(1.08); }
        }
        @keyframes scrollPulse {
          0%, 100% { opacity: 0.4; transform: scaleY(1); }
          50%       { opacity: 1; transform: scaleY(1.2); }
        }
      `}</style>
    </>
  )
}
