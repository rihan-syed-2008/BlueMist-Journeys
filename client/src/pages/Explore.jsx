import { useEffect, useState } from 'react'
//import { useNavigate } from 'react-router-dom'
//import { destinations } from '../data/explore'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

export default function Explore() {
  const [visible, setVisible] = useState(false)

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
          A Local's Guide
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
          Explore the Nilgiris
        </h1>
        <p
          className="max-w-xl mx-auto"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '0.95rem',
            color: 'rgba(30,58,95,0.5)',
            lineHeight: 1.8,
          }}
        >
          Four destinations. Each with its own personality. All connected by
          roads only locals know.
        </p>
      </div>

      {/*
      
      <div
        className="max-w-6xl mx-auto px-6 pb-24 grid grid-cols-1 md:grid-cols-2 gap-8 transition-all duration-1000"
        style={{ opacity: visible ? 1 : 0, transitionDelay: '0.2s' }}
      >
        {destinations.map((dest) => (
          <div
            key={dest.id}
            className="group cursor-pointer"
            onClick={() => navigate(`/explore/${dest.id}`)}
          >
            
            <div className="overflow-hidden" style={{ height: '300px' }}>
              <img
                src={dest.image}
                alt={dest.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            
            <div
              className="p-8 transition-all duration-300"
              style={{ backgroundColor: 'var(--navy)' }}
            >
              <p
                className="text-xs tracking-[0.3em] uppercase mb-2"
                style={{ color: 'var(--teal)', fontFamily: "'DM Sans', sans-serif" }}
              >
                {dest.places.length} places to explore
              </p>
              <h2
                className="mb-2"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '2rem',
                  fontWeight: 400,
                  color: 'white',
                }}
              >
                {dest.name}
              </h2>
              <p
                className="mb-6"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '1rem',
                  color: 'rgba(255,255,255,0.5)',
                  fontStyle: 'italic',
                }}
              >
                {dest.tagline}
              </p>
              <span
                className="text-xs tracking-widest uppercase transition-all duration-300 group-hover:translate-x-1 inline-block"
                style={{ color: 'var(--teal)', fontFamily: "'DM Sans', sans-serif" }}
              >
                Explore {dest.name} →
              </span>
            </div>
          </div>
        ))}
      </div>*/}

      <div
        className="max-w-4xl mx-auto px-6 pb-24"
        style={{
          opacity: visible ? 1 : 0,
          transitionDelay: '0.2s',
        }}
      >
        <div
          className="
      rounded-[28px]
      p-10 md:p-14
      text-center
    "
          style={{
            background: 'linear-gradient(180deg, #24476f 0%, #1d3656 100%)',
          }}
        >
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
            CURRENTLY IN DEVELOPMENT
          </p>

          <h2
            className="mb-5"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(2rem,4vw,3rem)',
              color: 'white',
              fontWeight: 300,
            }}
          >
            The Nilgiris Journal
          </h2>

          <p
            className="mx-auto"
            style={{
              maxWidth: '38rem',
              fontFamily: "'DM Sans', sans-serif",
              color: 'rgba(255,255,255,0.7)',
              lineHeight: 1.8,
            }}
          >
            We're currently curating destination guides, local insights, hidden
            viewpoints, tea estates and travel stories from across the Nilgiris.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  )
}
