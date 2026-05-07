import { useParams, useNavigate } from 'react-router-dom'
import { packages } from '../data/packages'
import { useEffect, useState } from 'react'
import { places } from '../data/places'
import Navbar from './Navbar'
import { navigateToSection } from '../utils/scrollTo'

export default function PackageDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const pkg = packages.find((p) => p.id === id)
  const [visible, setVisible] = useState(false)
  const [openStops, setOpenStops] = useState({})
  const toggleStop = (i) => setOpenStops((prev) => ({ ...prev, [i]: !prev[i] }))

  useEffect(() => {
    window.scrollTo(0, 0)
    const timer = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  if (!pkg)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p
          style={{ fontFamily: "'DM Sans', sans-serif", color: 'var(--navy)' }}
        >
          Package not found.
        </p>
      </div>
    )

  const whatsappMessage = encodeURIComponent(
    `Hi! I'm interested in the *${pkg.title}* package.\n\nDuration: ${pkg.duration}\nPrice: ${pkg.price}\n\nCould you please share more details?`
  )

  return (
    <div style={{ backgroundColor: 'var(--cream)', minHeight: '100vh' }}>
      <Navbar />
      <div className="pt-24 px-6 max-w-5xl mx-auto">
        {/* Back */}
        <button
          onClick={() => navigateToSection(navigate, 'packages')}
          className="text-xs tracking-widest uppercase mb-10 flex items-center gap-2 px-6 py-3 transition-all duration-300"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            color: 'var(--navy)',
            border: '1px solid rgba(30,58,95,0.3)',
            backgroundColor: 'transparent',
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
          ← Back
        </button>

        {/* ===== ABOVE FOLD — All important details ===== */}
        <div
          className="transition-all duration-1000"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
          }}
        >
          {/* Header */}
          <p
            className="text-xs tracking-[0.4em] uppercase mb-3"
            style={{
              color: 'var(--teal)',
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            {pkg.duration} · From {pkg.price}
          </p>
          <h1
            className="mb-3"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(2.5rem, 5vw, 5rem)',
              fontWeight: 400,
              color: 'var(--navy)',
              lineHeight: 1.1,
            }}
          >
            {pkg.title}
          </h1>
          <p
            className="mb-10"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '1.3rem',
              color: '#888',
              fontStyle: 'italic',
            }}
          >
            {pkg.tagline}
          </p>

          {/* Description */}
          <p
            className="mb-12 max-w-2xl"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '1.15rem',
              color: 'var(--navy)',
              lineHeight: 1.9,
              fontWeight: 400,
            }}
          >
            {pkg.description}
          </p>

          {/* Includes + Dining */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div>
              <p
                className="text-xs tracking-[0.3em] uppercase mb-6"
                style={{
                  color: 'var(--teal)',
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                What's Included
              </p>
              {pkg.includes.map((item, i) => (
                <div key={i} className="flex items-center gap-3 mb-4">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    style={{ flexShrink: 0 }}
                  >
                    <circle
                      cx="8"
                      cy="8"
                      r="7"
                      stroke="var(--teal)"
                      strokeWidth="1"
                    />
                    <path
                      d="M5 8l2 2 4-4"
                      stroke="var(--teal)"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: '0.95rem',
                      color: 'var(--navy)',
                    }}
                  >
                    {item}
                  </p>
                </div>
              ))}
            </div>
            <div>
              <p
                className="text-xs tracking-[0.3em] uppercase mb-6"
                style={{
                  color: 'var(--teal)',
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                Suggested Dining
              </p>
              {pkg.dining.map((d, i) => (
                <div
                  key={i}
                  className="mb-4 p-4"
                  style={{
                    borderLeft: '2px solid var(--teal)',
                    backgroundColor: 'white',
                  }}
                >
                  <p
                    className="text-xs tracking-widest uppercase mb-1"
                    style={{
                      color: 'var(--teal)',
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                  >
                    {d.meal}
                  </p>
                  <p
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: '1.2rem',
                      color: 'var(--navy)',
                      fontWeight: 400,
                    }}
                  >
                    {d.place === 'TBD'
                      ? 'Coming soon'
                      : `${d.meal} at ${d.place}`}
                  </p>
                  {d.note && (
                    <p
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: '0.82rem',
                        color: '#888',
                        fontStyle: 'italic',
                        marginTop: '4px',
                      }}
                    >
                      {d.note}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ===== YOUR JOURNEY — Stops below fold ===== */}
        <div
          className="pb-24 transition-all duration-1000"
          style={{ opacity: visible ? 1 : 0, transitionDelay: '0.3s' }}
        >
          <p
            className="text-xs tracking-[0.4em] uppercase mb-12 text-center"
            style={{
              color: 'var(--teal)',
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            — Your Journey —
          </p>

          {pkg.stops.map((stop, i) => {
            const hasImage = i < pkg.images.length
            const isLeft = i % 2 === 0
            const place = places[stop]

            return (
              <div key={i}>
                <div
                  className={`flex items-center gap-8 ${isLeft ? '' : 'flex-row-reverse'}`}
                >
                  {/* Photo */}
                  <div className="flex-1 flex justify-center">
                    {hasImage ? (
                      <div
                        style={{
                          backgroundColor: 'white',
                          padding: '8px 8px 28px 8px',
                          boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                          transform: `rotate(${isLeft ? '-2deg' : '2deg'})`,
                          width: '260px',
                          transition: 'transform 0.3s ease',
                        }}
                      >
                        <img
                          src={pkg.images[i]}
                          alt={stop}
                          style={{
                            width: '100%',
                            height: '170px',
                            objectFit: 'cover',
                            display: 'block',
                          }}
                        />
                      </div>
                    ) : (
                      <div style={{ width: '260px' }} />
                    )}
                  </div>

                  {/* Stop info */}
                  <div className="flex-1 flex flex-col items-center text-center">
                    <div className="flex items-center gap-3 mb-2">
                      <div
                        className="rounded-full flex-shrink-0"
                        style={{
                          width: '8px',
                          height: '8px',
                          backgroundColor: 'var(--teal)',
                        }}
                      />
                      <p
                        style={{
                          fontFamily: "'Cormorant Garamond', serif",
                          fontSize: '1.4rem',
                          fontWeight: 400,
                          color: 'var(--navy)',
                        }}
                      >
                        {stop}
                      </p>
                    </div>
                    {place && (
                      <button
                        onClick={() => toggleStop(i)}
                        className="text-xs tracking-widest uppercase ml-5 transition-all duration-300 hover:opacity-60"
                        style={{
                          color: 'var(--teal)',
                          fontFamily: "'DM Sans', sans-serif",
                        }}
                      >
                        {openStops[i] ? 'Hide details ↑' : 'View details ↓'}
                      </button>
                    )}
                    {openStops[i] && place && (
                      <div
                        className="ml-5 mt-3"
                        style={{
                          borderLeft: '2px solid var(--teal)',
                          paddingLeft: '12px',
                        }}
                      >
                        <p
                          style={{
                            fontFamily: "'DM Sans', sans-serif",
                            fontSize: '0.9rem',
                            color: '#555',
                            lineHeight: 1.8,
                          }}
                        >
                          {place.description}
                        </p>
                        <div className="flex gap-6 mt-2">
                          <p
                            style={{
                              fontFamily: "'DM Sans', sans-serif",
                              fontSize: '0.8rem',
                              color: '#999',
                            }}
                          >
                            ⏱ {place.duration}
                          </p>
                          <p
                            style={{
                              fontFamily: "'DM Sans', sans-serif",
                              fontSize: '0.8rem',
                              color: '#999',
                            }}
                          >
                            ☀️ {place.bestTime}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
          {/* Emotional bridge */}
          <div className="text-center py-16">
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
                fontWeight: 300,
                color: 'var(--navy)',
                fontStyle: 'italic',
                maxWidth: '500px',
                margin: '0 auto 8px',
                lineHeight: 1.6,
              }}
            >
              Ready to experience the Nilgiris beyond the usual routes?
            </p>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '0.8rem',
                color: '#aaa',
                letterSpacing: '0.1em',
              }}
            >
              Takes less than 2 minutes to book.
            </p>
          </div>
          {/* CTA */}
          <div
            className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-10 pb-8 mb-8"
            style={{ borderBottom: '1px solid rgba(30,58,95,0.1)' }}
          >
            <div>
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '2rem',
                  color: 'var(--navy)',
                  fontWeight: 400,
                }}
              >
                {pkg.price}{' '}
                <span style={{ fontSize: '1rem', color: '#999' }}>onwards</span>
              </p>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '0.85rem',
                  color: '#999',
                }}
              >
                Per vehicle · Private cab
              </p>
            </div>
            <a
              href={`https://wa.me/91XXXXXXXXXX?text=${whatsappMessage}`}
              target="_blank"
              rel="noreferrer"
              className="px-10 py-4 text-sm tracking-widest uppercase font-light text-white transition-all duration-300 hover:opacity-80 hover:scale-105"
              style={{ backgroundColor: 'var(--teal)' }}
            >
              Book This Journey
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
