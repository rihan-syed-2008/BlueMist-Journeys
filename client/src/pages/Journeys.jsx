import { useEffect, useState } from 'react'
import { packages } from '../data/packages'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import PackageCard from '../components/package/PackageCard'
import { useNavigate } from 'react-router-dom'

export default function Journeys() {
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
        className="pt-28 pb-16 px-6 transition-all duration-1000"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(20px)',
        }}
      >
        <div className="max-w-6xl mx-auto flex items-end justify-between gap-8">
          <div>
            <p
              className="text-xs tracking-[0.4em] uppercase mb-4"
              style={{
                color: 'var(--teal)',
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              Curated Experiences
            </p>

            <h1
              className="mb-4"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(1.8rem, 3vw, 3rem)',
                fontWeight: 300,
                color: 'var(--navy)',
              }}
            >
              All Journeys
            </h1>

            <p
              className="max-w-2xl"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '0.9rem',
                color: 'rgba(30,58,95,0.5)',
                lineHeight: 1.8,
              }}
            >
              Every experience we offer across the Nilgiris. Each one crafted
              with local knowledge.
            </p>
          </div>

          <button
            onClick={() => {
              navigate('/')

              setTimeout(() => {
                window.scrollTo({
                  top: 0,
                  behavior: 'instant',
                })
              }, 0)
            }}
            className="
transition-all duration-300
hover:opacity-80
self-start
md:self-auto
"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '0.72rem',
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              color: 'var(--cream)',
              background: 'var(--navy)',
              border: 'none',
              borderRadius: '999px',
              cursor: 'pointer',
              padding: window.innerWidth < 768 ? '10px 16px' : '13px',
              whiteSpace: 'nowrap',
            }}
          >
            ← Back to Home
          </button>
        </div>
      </div>

      {/* Packages Grid */}
      <div
        className="max-w-7xl mx-auto px-6 pb-24 transition-all duration-1000"
        style={{ opacity: visible ? 1 : 0, transitionDelay: '0.2s' }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
          {packages.map((pkg, index) => (
            <PackageCard
              key={pkg.id}
              pkg={pkg}
              index={index}
              visible={visible}
            />
          ))}
          <div
            className="
    rounded-[22px]
    overflow-hidden
    flex
    items-center
    justify-center
    min-h-[420px]
    border
    border-dashed
    border-[#1E3A5F]/15
  "
            style={{
              background:
                'linear-gradient(180deg, rgba(36,71,111,0.04) 0%, rgba(30,58,95,0.08) 100%)',
            }}
          >
            <div className="text-center px-8">
              <p
                className="mb-4"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '0.72rem',
                  letterSpacing: '0.28em',
                  textTransform: 'uppercase',
                  color: 'rgba(91,192,190,0.9)',
                }}
              >
                CURRENTLY EXPANDING
              </p>

              <h3
                className="mb-4"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '2rem',
                  color: 'var(--navy)',
                  fontWeight: 300,
                }}
              >
                More Journeys Are Being Crafted
              </h3>

              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  color: 'rgba(30,58,95,0.55)',
                  lineHeight: 1.8,
                  maxWidth: '28rem',
                }}
              >
                We are continually adding new experiences across Ooty, Coonoor,
                Kotagiri and the hidden corners of the Nilgiris.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
