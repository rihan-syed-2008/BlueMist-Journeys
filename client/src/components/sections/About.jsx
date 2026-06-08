import { useEffect, useRef, useState } from 'react'

const stats = [
  { number: '10+', label: 'Years of local experience' },
  { number: '3', label: 'Towns covered' },
  { number: '100%', label: 'Private & personal' },
  { number: '24/7', label: 'Available for your trip' },
]

export default function About() {
  const [visible, setVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.15 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 px-6"
      style={{ backgroundColor: 'var(--navy)' }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Top — Two columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20 items-center">
          {/* Left — Story */}
          <div
            className="transition-all duration-1000"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(30px)',
            }}
          >
            <p
              className="text-xs tracking-[0.4em] uppercase mb-4"
              style={{
                color: 'var(--teal)',
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              Who We Are
            </p>
            <h2
              className="mb-8"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                fontWeight: 300,
                color: 'white',
                lineHeight: 1.2,
              }}
            >
              Not an agency.
              <br />
              <span style={{ fontStyle: 'italic', color: 'var(--teal)' }}>
                A family from these hills.
              </span>
            </h2>

            <p
              className="mb-7"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: '1.18rem',
                color: 'rgba(255,255,255,0.82)',
                lineHeight: 1.95,
              }}
            >
              BlueMist Journeys began with a simple belief, the Nilgiris are
              best experienced slowly, through the eyes of someone who calls
              these hills home.
            </p>

            <p
              className="mb-7"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: '1.18rem',
                color: 'rgba(255,255,255,0.82)',
                lineHeight: 1.95,
              }}
            >
              We grew up on these winding roads. We know which tea estates
              disappear into the mist after rain, where the quietest sunrise
              waits above the clouds, and which roadside chai stop locals
              secretly prefer over cafés.
            </p>

            <p
              className="mb-10"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: '1.18rem',
                color: 'rgba(255,255,255,0.82)',
                lineHeight: 1.95,
              }}
            >
              No middlemen. Just locals who know these hills by heart.
            </p>

            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: 'italic',
                fontSize: '1.28rem',
                color: 'var(--teal)',
                lineHeight: 1.8,
              }}
            >
              The Nilgiris aren’t a destination to us.
              <br />
              They’re home.
            </p>
          </div>

          {/* Right — Photo placeholder */}
          <div
            className="transition-all duration-1000"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(30px)',
              transitionDelay: '0.2s',
            }}
          >
            {/* Main photo */}
            <div
              style={{
                height: window.innerWidth < 768 ? '280px' : '420px',
                borderRadius: '28px',
                overflow: 'hidden',
                border: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              <img
                src="/images/about-2.jpg"
                alt="BlueMist Journeys"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Two smaller photos */}
            <div className="hidden md:grid grid-cols-2 gap-4 mt-4">
              <div
                style={{
                  height: '170px',
                  borderRadius: '22px',
                  overflow: 'hidden',
                  border: '1px solid rgba(255,255,255,0.06)',
                }}
              >
                <img
                  src="/images/about-1.jpg"
                  alt="Nilgiris"
                  className="w-full h-full object-cover"
                />
              </div>

              <div
                style={{
                  height: '170px',
                  borderRadius: '22px',
                  overflow: 'hidden',
                  border: '1px solid rgba(255,255,255,0.06)',
                }}
              >
                <img
                  src="/images/about-3.jpg"
                  alt="Tea estate"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 transition-all duration-1000"
          style={{
            opacity: visible ? 1 : 0,
            transitionDelay: '0.3s',
            borderTop: '1px solid rgba(255,255,255,0.1)',
          }}
        >
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 'clamp(2rem, 4vw, 3rem)',
                  fontWeight: 300,
                  color: 'rgba(255,255,255,0.92)',
                  lineHeight: 1,
                  marginBottom: '8px',
                }}
              >
                {stat.number}
              </p>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '0.8rem',
                  color: 'rgba(255,255,255,0.4)',
                  letterSpacing: '0.05em',
                }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Values */}
        <div
          className="mt-24 pt-16 transition-all duration-1000"
          style={{
            opacity: visible ? 1 : 0,
            transitionDelay: '0.4s',
            borderTop: '1px solid rgba(255,255,255,0.08)',
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: 'Local Knowledge',
                desc: 'The quiet roads. The hidden viewpoints. The places guidebooks never mention.',
              },
              {
                title: 'Personal Journeys',
                desc: 'Every trip is private, flexible, and shaped around your pace — never rushed.',
              },
              {
                title: 'Honest Recommendations',
                desc: 'We’ll always tell you what’s worth your time, and what isn’t.',
              },
            ].map((item, i) => (
              <div key={i}>
                <p
                  className="mb-4"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: '1.45rem',
                    color: 'white',
                    fontWeight: 400,
                  }}
                >
                  {item.title}
                </p>

                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '0.92rem',
                    lineHeight: 1.9,
                    color: 'rgba(255,255,255,0.58)',
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
