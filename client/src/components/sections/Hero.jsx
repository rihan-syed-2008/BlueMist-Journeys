import { useRef } from 'react'
import { HERO_CONFIG } from '../../utils/heroConfig'
import useHeroReveal from '../../hooks/useHeroReveal'
import Button from '../ui/Button'

export default function Hero() {
  const sectionRef = useRef(null)
  const { scrollProgress, introComplete } = useHeroReveal(sectionRef)

  const mistOpacity = introComplete
  ? 0
  : Math.max(
      0,
      1 - scrollProgress / HERO_CONFIG.revealStart
    )
  const contentOpacity = introComplete
    ? 1
    : Math.max(
        0,
        (scrollProgress - HERO_CONFIG.revealStart) /
          (HERO_CONFIG.revealEnd - HERO_CONFIG.revealStart)
      )
  const logoOpacity = introComplete
  ? 0
  : Math.max(
      0,
      1 - scrollProgress / HERO_CONFIG.logoFadeEnd
    )

  return (
    <>
      <section
        ref={sectionRef}
        style={{ height: `${HERO_CONFIG.heroHeight}vh` }}
        className="relative"
      >
        <div
          className="sticky top-0 w-full overflow-hidden"
          style={{ height: `${HERO_CONFIG.stickyHeight}vh` }}
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
              backgroundPosition: 'center center',
              filter: 'saturate(0.92) contrast(1.05) brightness(0.88)',
              transform: `scale(${1 + scrollProgress * HERO_CONFIG.parallaxScale})`,
            }}
          />

          {/* Dark overlay */}
          <div
            className="absolute inset-0 z-10"
            style={{
              background: `
              linear-gradient(
                to bottom,
                rgba(8,15,28,0.72) 0%,
                rgba(15,33,56,0.38) 28%,
                rgba(15,33,56,0.18) 55%,
                rgba(8,15,28,0.62) 100%
              )
            `,
            }}
          />

          <div
            className="absolute inset-0 z-10 pointer-events-none"
            style={{
              background: `
              radial-gradient(
                ellipse at center,
                transparent 42%,
                rgba(0,0,0,0.18) 100%
              )
            `,
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
              opacity: introComplete ? 0 : mistOpacity,
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
              opacity: introComplete ? 0 : mistOpacity,
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

          {/* Top Floating Logo */}
          <div
            className="absolute top-8 left-1/2 -translate-x-1/2 z-50 pointer-events-none transition-all duration-500"
            style={{
              opacity: scrollProgress < 0.12 && introComplete ? 1 : 0,

              transform: `
      translateX(-50%)
      translateY(${scrollProgress < 0.12 ? '0px' : '-10px'})
    `,
            }}
          >
            <img
              src="/logos/bluemist-dark.png"
              alt="BlueMist Journeys"
              style={{
                width: '245px',
                opacity: 0.99,
              }}
            />
          </div>

          {/* Hero Content */}
          <div
            className="absolute inset-0 z-30 flex items-center justify-center pt-24 md:pt-32"
            style={{
              opacity: contentOpacity,
              transform: `translateY(${(1 - contentOpacity) * 30}px)`,
              pointerEvents: contentOpacity > 0.5 ? 'auto' : 'none',
            }}
          >
            <div className="text-center px-6 max-w-5xl mx-auto">
              <h1
                className="font-serif italic mb-6 leading-[1] text-white font-light"
                style={{
                  fontSize: 'clamp(2.6rem, 5vw, 5rem)',
                  textShadow: '0 2px 40px rgba(0,0,0,0.35)',
                }}
              >
                The Nilgiris
                <br />
                <span
                  className="block mt-1 font-serif italic"
                  style={{
                    color: 'rgba(91,192,190,0.92)',
                    fontSize: '0.72em',
                    fontWeight: 300,
                    letterSpacing: '0.01em',
                  }}
                >
                  The way locals know it
                </span>
              </h1>

              <p
                className="uppercase mb-12 mt-12"
                style={{
                  color: 'rgba(255,255,255,0.99)',
                  fontSize: '0.68rem',
                  letterSpacing: '0.42em',
                  fontWeight: 500,
                }}
              >
                COONOOR · OOTY · KOTAGIRI · MUDUMALAI
              </p>

              <p
                className="font-sans mb-10 max-w-xl mx-auto text-white/85"
                style={{
                  fontSize: 'clamp(0.92rem, 1vw, 1rem)',
                  lineHeight: 1.9,
                  fontWeight: 300,
                  textShadow: '0 2px 30px rgba(0,0,0,0.55)',
                }}
              >
                Private cab tours, curated packages, and local expertise across
                the Nilgiris. Trusted by travellers since day one.
              </p>

              <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
                <Button
                  variant="primary"
                  onClick={() => {
                    const el = document.getElementById('custom')
                    if (el) el.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  Plan Your Journey
                </Button>

                <Button
                  variant="secondary"
                  onClick={() => {
                    const el = document.getElementById('packages')
                    if (el) el.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  View Packages
                </Button>
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
