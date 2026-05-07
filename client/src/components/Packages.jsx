import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { packages } from '../data/packages'

export default function Packages() {
  const [visible, setVisible] = useState(false)
  const sectionRef = useRef(null)
  const navigate = useNavigate()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="packages"
      ref={sectionRef}
      className="py-24 px-6"
      style={{ backgroundColor: 'var(--cream)' }}
    >
      {/* Section Header */}
      <div
        className="text-center mb-16 transition-all duration-1000"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(30px)',
        }}
      >
        <p
          className="text-xs tracking-[0.4em] uppercase mb-4"
          style={{ color: 'var(--teal)', fontFamily: "'DM Sans', sans-serif" }}
        >
          Curated Experiences
        </p>
        <h2
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(2rem, 4vw, 3.5rem)',
            fontWeight: 300,
            color: 'var(--navy)',
          }}
        >
          Journeys
        </h2>
      </div>

      {/* Cards Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
        {packages.slice(0, 3).map((pkg, index) => (
          <div
            key={pkg.id}
            className="group cursor-pointer transition-all duration-700"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible
                ? index === 1
                  ? 'translateY(-8px)'
                  : 'translateY(0)'
                : 'translateY(40px)',
              scale: index === 1 ? '1.03' : '1',
              transitionDelay: `${index * 0.15}s`,
              boxShadow:
                index === 1 ? '0 20px 60px rgba(30,58,95,0.2)' : 'none',
            }}
            onClick={() => navigate(`/package/${pkg.id}`)}
          >
            {/* Image */}
            <div
              className="overflow-hidden relative"
              style={{ height: '260px' }}
            >
              {index === 1 && (
                <div
                  className="absolute top-4 right-4 z-10 px-3 py-1"
                  style={{
                    backgroundColor: 'var(--teal)',
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '0.7rem',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: 'white',
                  }}
                >
                  Most Popular
                </div>
              )}
              <img
                src={pkg.image}
                alt={pkg.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Card Content */}
            <div className="p-8" style={{ backgroundColor: 'var(--navy)' }}>
              <p
                className="text-xs tracking-widest uppercase mb-2"
                style={{
                  color: 'rgba(255,255,255,0.4)',
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                {pkg.duration}
              </p>
              <h3
                className="mb-3"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '1.6rem',
                  fontWeight: 400,
                  color: 'white',
                }}
              >
                {pkg.title}
              </h3>
              <p
                className="mb-6 text-sm"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  color: 'rgba(255,255,255,0.5)',
                  fontStyle: 'italic',
                }}
              >
                {pkg.tagline}
              </p>
              <div>
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '0.85rem',
                    color: 'rgba(255,255,255,0.4)',
                    marginBottom: '12px',
                  }}
                >
                  Starting from{' '}
                  <span
                    style={{
                      color: 'white',
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: '1.1rem',
                    }}
                  >
                    {pkg.price}
                  </span>
                </p>
                <div
                  className="text-xs tracking-widest uppercase transition-all duration-300 hover:opacity-80 text-center py-3"
                  style={{
                    color: 'var(--teal)',
                    fontFamily: "'DM Sans', sans-serif",
                    border: '1px solid rgba(91,192,190,0.4)',
                    backgroundColor: 'rgba(91,192,190,0.08)',
                  }}
                >
                  View Journey →
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-16">
        <a
          href="/packages"
          className="inline-block px-10 py-4 text-xs tracking-[0.3em] uppercase transition-all duration-300 hover:bg-navy"
          style={{
            color: 'var(--navy)',
            fontFamily: "'DM Sans', sans-serif",
            border: '1px solid rgba(30,58,95,0.3)',
            backgroundColor: 'transparent',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'var(--navy)'; e.currentTarget.style.color = 'white' }}
onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = 'var(--navy)' }}
        >
          View All Journeys →
        </a>
      </div>
    </section>
  )
}
