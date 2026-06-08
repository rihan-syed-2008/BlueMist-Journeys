import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { destinations } from '../data/explore'
import { places } from '../data/places'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

export default function ExploreDestination() {
  const { id } = useParams()
  const navigate = useNavigate()
  const dest = destinations.find(d => d.id === id)
  const [visible, setVisible] = useState(false)
  const [openPlaces, setOpenPlaces] = useState({})

  const togglePlace = (i) => setOpenPlaces(prev => ({ ...prev, [i]: !prev[i] }))

  useEffect(() => {
    window.scrollTo(0, 0)
    const timer = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  if (!dest) return (
    <div className="min-h-screen flex items-center justify-center">
      <p style={{ fontFamily: "'DM Sans', sans-serif", color: 'var(--navy)' }}>Destination not found.</p>
    </div>
  )

  return (
    <div style={{ backgroundColor: 'var(--cream)', minHeight: '100vh' }}>
      <Navbar />

      {/* Hero image */}
      <div style={{ height: '50vh', position: 'relative', overflow: 'hidden' }}>
        <img
          src={dest.image}
          alt={dest.name}
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to bottom, rgba(15,33,56,0.3) 0%, rgba(15,33,56,0.6) 100%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            left: '50%',
            transform: 'translateX(-50%)',
            textAlign: 'center',
          }}
        >
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '0.75rem',
              color: 'var(--teal)',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              marginBottom: '8px',
            }}
          >
            {dest.places.length} places to explore
          </p>
          <h1
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(2.5rem, 6vw, 5rem)',
              fontWeight: 300,
              color: 'white',
              lineHeight: 1,
            }}
          >
            {dest.name}
          </h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16">

        {/* Back */}
        <button
          onClick={() => navigate('/explore')}
          className="text-xs tracking-widest uppercase transition-all duration-300 hover:opacity-60 mb-10 flex items-center gap-2"
          style={{ fontFamily: "'DM Sans', sans-serif", color: 'var(--navy)' }}
        >
          ← All Destinations
        </button>

        {/* Description */}
        <div
          className="mb-16 transition-all duration-1000"
          style={{ opacity: visible ? 1 : 0 }}
        >
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '1.2rem',
              color: 'var(--navy)',
              lineHeight: 1.9,
              fontStyle: 'italic',
              maxWidth: '680px',
            }}
          >
            {dest.description}
          </p>
        </div>

        {/* Places */}
        <div
          className="mb-16 transition-all duration-1000"
          style={{ opacity: visible ? 1 : 0, transitionDelay: '0.2s' }}
        >
          <p
            className="text-xs tracking-[0.3em] uppercase mb-10"
            style={{ color: 'var(--teal)', fontFamily: "'DM Sans', sans-serif" }}
          >
            — Places to Visit —
          </p>

          {dest.places.map((placeName, i) => {
            const place = places[placeName]
            return (
              <div
                key={i}
                className="mb-0"
                style={{ borderBottom: '1px solid rgba(30,58,95,0.08)' }}
              >
                <div className="py-6 flex items-center justify-between">
                  <div>
                    <h3
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: '1.4rem',
                        fontWeight: 400,
                        color: 'var(--navy)',
                        marginBottom: '4px',
                      }}
                    >
                      {placeName}
                    </h3>
                    {place && (
                      <div className="flex gap-4">
                        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.8rem', color: '#aaa' }}>
                          ⏱ {place.duration}
                        </p>
                        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.8rem', color: '#aaa' }}>
                          ☀️ {place.bestTime}
                        </p>
                      </div>
                    )}
                  </div>
                  {place && (
                    <button
                      onClick={() => togglePlace(i)}
                      className="text-xs tracking-widest uppercase transition-all duration-300 hover:opacity-60 flex-shrink-0 ml-4"
                      style={{ color: 'var(--teal)', fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {openPlaces[i] ? 'Less ↑' : 'Read more ↓'}
                    </button>
                  )}
                </div>

                {openPlaces[i] && place && (
                  <div
                    className="pb-6"
                    style={{ borderLeft: '2px solid var(--teal)', paddingLeft: '16px', marginLeft: '4px' }}
                  >
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.9rem', color: '#555', lineHeight: 1.8 }}>
                      {place.description}
                    </p>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div
          className="p-10 text-center transition-all duration-1000"
          style={{
            backgroundColor: 'var(--navy)',
            opacity: visible ? 1 : 0,
            transitionDelay: '0.4s',
          }}
        >
          <p
            className="mb-2"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '1.8rem',
              fontWeight: 300,
              color: 'white',
            }}
          >
            Ready to visit {dest.name}?
          </p>
          <p
            className="mb-8"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '0.85rem',
              color: 'rgba(255,255,255,0.4)',
            }}
          >
            Build a custom trip or browse our curated packages.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/#custom"
              className="px-8 py-4 text-sm tracking-widest uppercase font-light text-white transition-all duration-300 hover:opacity-80"
              style={{ backgroundColor: 'var(--teal)' }}
            >
              Build Your Trip
            </a>
            <a
              href="/#packages"
              className="px-8 py-4 text-sm tracking-widest uppercase font-light transition-all duration-300 hover:opacity-80"
              style={{ color: 'white', border: '1px solid rgba(255,255,255,0.3)' }}
            >
              View Packages
            </a>
          </div>
        </div>

      </div>

      <Footer />
    </div>
  )
}