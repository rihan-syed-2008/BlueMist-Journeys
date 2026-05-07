import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { packages } from '../data/packages'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { navigateToSection } from '../utils/scrollTo'

export default function AllPackages() {
  const [visible, setVisible] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
    const timer = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div style={{ backgroundColor: 'var(--cream)', minHeight: '100vh' }}>
      <Navbar />

      {/* Header */}
      <div
        className="pt-32 pb-16 px-6 text-center transition-all duration-1000"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(20px)',
        }}
      >
        <p
          className="text-xs tracking-[0.4em] uppercase mb-4"
          style={{ color: 'var(--teal)', fontFamily: "'DM Sans', sans-serif" }}
        >
          Curated Experiences
        </p>
        <h1
          className="mb-4"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(2.5rem, 5vw, 5rem)',
            fontWeight: 300,
            color: 'var(--navy)',
          }}
        >
          All Journeys
        </h1>
        <p
          className="max-w-md mx-auto"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '0.9rem',
            color: 'rgba(30,58,95,0.5)',
            lineHeight: 1.8,
          }}
        >
          Every experience we offer across the Nilgiris. Each one crafted with
          local knowledge.
        </p>
      </div>

      {/* Packages Grid */}
      <div
        className="max-w-7xl mx-auto px-6 pb-24 transition-all duration-1000"
        style={{ opacity: visible ? 1 : 0, transitionDelay: '0.2s' }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {packages.map((pkg, index) => (
            <div
              key={pkg.id}
              className="group cursor-pointer transition-all duration-700"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(40px)',
                transitionDelay: `${index * 0.1}s`,
              }}
              onClick={() => navigate(`/package/${pkg.id}`)}
            >
              {/* Image */}
              <div
                className="overflow-hidden relative"
                style={{ height: '260px' }}
              >
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Card Content */}
              <div className="p-8" style={{ backgroundColor: 'var(--navy)' }}>
                <p
                  className="text-xs tracking-widest uppercase mb-3"
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
                    className="text-xs tracking-widest uppercase text-center py-3 cursor-pointer transition-all duration-300 hover:opacity-80"
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

        {/* Back to home */}
        <div className="text-center mt-16">
          <button
            onClick={() => navigateToSection(navigate, 'packages')}
            className="inline-block px-10 py-4 text-xs tracking-[0.3em] uppercase transition-all duration-300"
            style={{
              color: 'var(--navy)',
              fontFamily: "'DM Sans', sans-serif",
              border: '1px solid rgba(30,58,95,0.3)',
              backgroundColor: 'transparent',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--navy)'
              e.currentTarget.style.color = 'white'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent'
              e.currentTarget.style.color = 'var(--navy)'
            }}
          >
            ← Back to Home
          </button>
        </div>
      </div>

      <Footer />
    </div>
  )
}
