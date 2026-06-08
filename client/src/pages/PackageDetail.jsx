import { useParams, useNavigate } from 'react-router-dom'
import { packages } from '../data/packages'
import { places } from '../data/places'
import { useEffect, useState } from 'react'
import Navbar from '../components/layout/Navbar'
import Container from '../components/ui/Container'
import Section from '../components/ui/Section'
//import Button from '../components/ui/Button'
import StopSection from '../components/package/StopSection'

export default function PackageDetail() {
  const { id } = useParams()
  const navigate = useNavigate()

  const pkg = packages.find((p) => p.id === id)

  const [visible, setVisible] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)

    const timer = setTimeout(() => {
      setVisible(true)
    }, 120)

    return () => clearTimeout(timer)
  }, [])

  if (!pkg) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream">
        <p className="font-sans text-navy text-lg">Journey not found.</p>
      </div>
    )
  }

  const whatsappMessage = encodeURIComponent(
    `Hi! I'm interested in the *${pkg.title}* journey.\n\nDuration: ${pkg.duration}\nPrice: ${pkg.price}\n\nCould you please share more details?`
  )

  return (
    <div className="bg-cream min-h-screen overflow-x-hidden">
      <Navbar />

      {/* ================= HERO ================= */}

      <section className="relative min-h-screen w-full overflow-hidden">
        {/* Background Image */}
        <img
          src={pkg.image}
          alt={pkg.title}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(
                to bottom,
                rgba(8,15,28,0.78) 0%,
                rgba(15,33,56,0.35) 40%,
                rgba(8,15,28,0.82) 100%
              )
            `,
          }}
        />

        {/* Content */}
        <div className="relative z-20 h-full flex items-center pt-32">
          <Container>
            <div
              className="max-w-3xl transition-all duration-1000"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0px)' : 'translateY(30px)',
              }}
            >
              {/* Back */}
              <button
                onClick={() => navigate('/packages')}
                className="mb-10 inline-flex items-center
backdrop-blur-md
bg-white/10
border border-white/10
rounded-full
px-5 py-2 text-white/70 uppercase text-[11px] tracking-[0.35em] transition-all duration-300 hover:text-white"
              >
                ← Back to Journeys
              </button>

              {/* Metadata */}
              <p
                className="uppercase mb-5 
backdrop-blur-md
bg-white/10
border border-white/10
rounded-full
px-5 py-2"
                style={{
                  color: 'rgba(91,192,190,0.92)',
                  fontSize: '0.72rem',
                  letterSpacing: '0.38em',
                  fontFamily: 'DM Sans, sans-serif',
                }}
              >
                {pkg.duration} — From {pkg.price}
              </p>

              {/* Title */}
              <h1
                className="font-serif text-white leading-[0.95] mb-5"
                style={{
                  fontSize: 'clamp(3.5rem, 8vw, 7rem)',
                  fontWeight: 300,
                  textShadow: '0 4px 40px rgba(0,0,0,0.28)',
                }}
              >
                {pkg.title}
              </h1>

              {/* Tagline */}
              <p
                className="font-serif italic mb-8"
                style={{
                  color: 'rgba(255,255,255,0.82)',
                  fontSize: 'clamp(1.2rem, 2vw, 1.6rem)',
                  fontWeight: 300,
                }}
              >
                {pkg.tagline}
              </p>

              {/* Description */}
              <p
                className="font-sans max-w-2xl text-white/80 leading-[1.9]"
                style={{
                  fontSize: '1rem',
                  fontWeight: 300,
                }}
              >
                {pkg.description}
              </p>
            </div>
          </Container>
        </div>
      </section>

      {/* ================= JOURNEY FLOW ================= */}

      <Section className="pt-24 md:pt-28 pb-8">
        <Container>
          <div className="text-center mb-20">
            <p
              className="uppercase mb-4 font-style: italic"
              style={{
                color: 'var(--teal)',
                letterSpacing: '0.45em',
                fontSize: '0.72rem',
                fontFamily: 'DM Sans, sans-serif',
                opacity: 0.7,
              }}
            >
              The Journey
            </p>

            <h2
              className="font-serif text-navy"
              style={{
                fontSize: 'clamp(2.0rem, 3vw, 3rem)',
                fontWeight: 300,
              }}
            >
              What You’ll Experience
            </h2>
          </div>

          <div className="space-y-28">
            {pkg.stops.map((stop, index) => (
              <StopSection
                key={stop}
                stop={stop}
                index={index}
                image={pkg.images[index]}
                place={places[stop]}
              />
            ))}
          </div>
        </Container>
      </Section>

      {/* ================= INCLUDED + DINING ================= */}

      <Section className="pt-10 md:pt-16 pb-12">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Includes */}
            <div>
              <p
                className="uppercase mb-8"
                style={{
                  color: 'var(--teal)',
                  letterSpacing: '0.34em',
                  fontSize: '0.72rem',
                  fontFamily: 'DM Sans, sans-serif',
                }}
              >
                Included
              </p>

              <div className="space-y-5">
                {pkg.includes.map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div
                      className="rounded-full"
                      style={{
                        width: '7px',
                        height: '7px',
                        backgroundColor: 'var(--teal)',
                      }}
                    />

                    <p className="font-sans text-navy/80 text-[1rem] font-light">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Dining */}
            <div>
              <p
                className="uppercase mb-8"
                style={{
                  color: 'var(--teal)',
                  letterSpacing: '0.34em',
                  fontSize: '0.72rem',
                  fontFamily: 'DM Sans, sans-serif',
                }}
              >
                Suggested Dining
              </p>

              <div className="space-y-8">
                {pkg.dining.map((d, i) => (
                  <div key={i}>
                    <p className="text-xs uppercase tracking-[0.28em] text-teal mb-2 font-sans">
                      {d.meal}
                    </p>

                    <h3
                      className="font-serif text-navy"
                      style={{
                        fontSize: '1.5rem',
                        fontWeight: 300,
                      }}
                    >
                      {d.place === 'TBD' ? 'Coming soon' : d.place}
                    </h3>

                    {d.note && (
                      <p className="font-sans text-navy/60 text-sm mt-2 italic">
                        {d.note}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ================= CTA ================= */}

      <Section className="pt-8 md:pt-12 pb-28">
        <Container>
          <div
            className="rounded-[32px] overflow-hidden px-8 py-16 md:px-16 md:py-20 text-center"
            style={{
              background: 'linear-gradient(180deg, #24476f 0%, #1d3656 100%)',
              boxShadow: '0 30px 80px rgba(15,23,42,0.12)',
            }}
          >
            <p
              className="font-serif italic text-white/90 mx-auto mb-10"
              style={{
                fontSize: 'clamp(1.8rem, 3vw, 2.8rem)',
                fontWeight: 300,
                maxWidth: '700px',
                lineHeight: 1.3,
              }}
            >
              Ready to experience the Nilgiris beyond the usual routes?
            </p>

            <div className="flex flex-col items-center gap-5">
              <p className="font-serif text-white text-[2rem] font-light">
                {pkg.price}
                <span className="text-white/60 text-[1rem] ml-2">onwards</span>
              </p>

              <p className="font-sans text-white/60 text-sm tracking-[0.08em]">
                Private vehicle · Flexible itinerary · Local expertise
              </p>

              <a
                href={`https://wa.me/917200969889?text=${whatsappMessage}`}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center justify-center px-10 py-4 rounded-full uppercase tracking-[0.28em] text-[11px] transition-all duration-500 hover:scale-[1.03]"
                style={{
                  backgroundColor: 'var(--teal)',
                  color: 'white',
                }}
              >
                Book This Journey
              </a>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  )
}
