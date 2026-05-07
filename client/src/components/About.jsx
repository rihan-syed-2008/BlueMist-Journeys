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
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
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
              style={{ color: 'var(--teal)', fontFamily: "'DM Sans', sans-serif" }}
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
              className="mb-6"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: '1.15rem',
                color: 'rgba(255,255,255,0.8)',
                lineHeight: 1.9,
              }}
            >
              BlueMist Journeys was born from a simple idea — that the best way
              to experience the Nilgiris is through the eyes of someone who has
              lived here their whole life.
            </p>

            <p
              className="mb-6"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: '1.15rem',
                color: 'rgba(255,255,255,0.8)',
                lineHeight: 1.9,
              }}
            >
              Our family has been navigating these winding roads for over a decade.
              We know which viewpoint catches the mist at sunrise, which tea estate
              lets you walk in, and which roadside stall serves the best chai in
              Coonoor. That knowledge isn't in any guidebook.
            </p>

            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: '1.15rem',
                color: 'rgba(255,255,255,0.8)',
                lineHeight: 1.9,
              }}
            >
              When you travel with us, you're not booking a cab. You're getting
              a local companion who genuinely wants your Nilgiris experience to
              be unforgettable.
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
                backgroundColor: 'rgba(255,255,255,0.05)',
                height: '400px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '12px',
              }}
            >
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '0.8rem',
                  color: 'rgba(255,255,255,0.2)',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                }}
              >
                Photo coming soon
              </p>
            </div>

            {/* Two smaller photos */}
            <div className="grid grid-cols-2 gap-3">
              {[1, 2].map(i => (
                <div
                  key={i}
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.05)',
                    height: '160px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <p
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: '0.7rem',
                      color: 'rgba(255,255,255,0.2)',
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                    }}
                  >
                    Photo
                  </p>
                </div>
              ))}
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
                  color: 'white',
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
          className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-20 transition-all duration-1000"
          style={{ opacity: visible ? 1 : 0, transitionDelay: '0.4s' }}
        >
          {[
            {
              title: 'Local Knowledge',
              desc: 'Every road, every viewpoint, every hidden gem — we know the Nilgiris like the back of our hand.',
            },
            {
              title: 'Personal Service',
              desc: 'No call centres. No middlemen. You talk directly to the driver taking you on your journey.',
            },
            {
              title: 'Flexible & Honest',
              desc: 'We tell you what\'s worth visiting and what isn\'t. Your time matters more than ticking boxes.',
            },
          ].map((val, i) => (
            <div
              key={i}
              className="p-8"
              style={{ backgroundColor: 'rgba(255,255,255,0.05)',
border: '1px solid rgba(255,255,255,0.08)', }}
            >
              <p
                className="mb-3"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '1.3rem',
                  fontWeight: 400,
                  color: 'var(--teal)',
                }}
              >
                {val.title}
              </p>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '0.9rem',
                  color: 'rgba(255,255,255,0.6)',
                  lineHeight: 1.8,
                }}
              >
                {val.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}