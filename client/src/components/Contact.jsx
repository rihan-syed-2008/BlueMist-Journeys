import { useState, useEffect, useRef } from 'react'

export default function Contact() {
  const [visible, setVisible] = useState(false)
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.15 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const handleSend = () => {
    if (!name || !message) {
      alert('Please enter your name and message.')
      return
    }
    const text = encodeURIComponent(
      `Hi BlueMist! My name is ${name}.\n\n${message}`
    )
    window.open(`https://wa.me/917200969889?text=${text}`, '_blank')
    setName('')
    setMessage('')
  }

  const inputStyle = {
    width: '100%',
    padding: '14px 16px',
    backgroundColor: 'rgba(255,255,255,0.05)',
    border: '1px solid rgba(255,255,255,0.1)',
    fontFamily: "'DM Sans', sans-serif",
    fontSize: '0.95rem',
    color: 'white',
    outline: 'none',
  }

  const labelStyle = {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: '0.75rem',
    letterSpacing: '0.2em',
    textTransform: 'uppercase',
    color: 'var(--teal)',
    marginBottom: '8px',
    display: 'block',
  }

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 px-6"
      style={{ backgroundColor: 'var(--cream)' }}
    >
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div
          className="text-center mb-16 transition-all duration-1000"
          style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(20px)' }}
        >
          <p
            className="text-xs tracking-[0.4em] uppercase mb-4"
            style={{ color: 'var(--teal)', fontFamily: "'DM Sans', sans-serif" }}
          >
            Get In Touch
          </p>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              fontWeight: 300,
              color: 'var(--navy)',
            }}
          >
            Plan Your Journey
          </h2>
          <p
            className="mt-4 max-w-md mx-auto"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '0.9rem',
              color: 'rgba(30,58,95,0.5)',
              lineHeight: 1.8,
            }}
          >
            We respond within 2 hours. Usually much faster.
          </p>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-16 transition-all duration-1000"
          style={{ opacity: visible ? 1 : 0, transitionDelay: '0.2s' }}
        >

          {/* Left — Contact info */}
          <div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/917200969889"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 p-6 mb-4 transition-all duration-300 hover:opacity-80"
              style={{ backgroundColor: 'var(--navy)', textDecoration: 'none' }}
            >
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  backgroundColor: '#25D366',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <svg viewBox="0 0 24 24" width="24" height="24" fill="white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <div>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '4px' }}>
                  WhatsApp
                </p>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.3rem', color: 'white' }}>
                  +91 72009 69889
                </p>
              </div>
              <div style={{ marginLeft: 'auto' }}>
                <p style={{ color: 'var(--teal)', fontSize: '1.2rem' }}>→</p>
              </div>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/rihan_syed_06"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 p-6 mb-4 transition-all duration-300 hover:opacity-80"
              style={{ backgroundColor: 'var(--navy)', textDecoration: 'none' }}
            >
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  background: 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <svg viewBox="0 0 24 24" width="22" height="22" fill="white">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
              <div>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '4px' }}>
                  Instagram
                </p>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.3rem', color: 'white' }}>
                  @rihan_syed_06
                </p>
              </div>
              <div style={{ marginLeft: 'auto' }}>
                <p style={{ color: 'var(--teal)', fontSize: '1.2rem' }}>→</p>
              </div>
            </a>

            {/* Email */}
            <a
              href="mailto:rihan.syed2025@gmail.com"
              className="flex items-center gap-4 p-6 transition-all duration-300 hover:opacity-80"
              style={{ backgroundColor: 'var(--navy)', textDecoration: 'none' }}
            >
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  backgroundColor: 'var(--teal)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <svg viewBox="0 0 24 24" width="22" height="22" fill="white">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </div>
              <div>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '4px' }}>
                  Email
                </p>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.1rem', color: 'white' }}>
                  rihan.syed2025@gmail.com
                </p>
              </div>
              <div style={{ marginLeft: 'auto' }}>
                <p style={{ color: 'var(--teal)', fontSize: '1.2rem' }}>→</p>
              </div>
            </a>

            {/* Areas covered */}
            <div className="mt-8">
              <p
                className="text-xs tracking-[0.3em] uppercase mb-4"
                style={{ color: 'var(--teal)', fontFamily: "'DM Sans', sans-serif" }}
              >
                Areas We Cover
              </p>
              <div className="flex flex-wrap gap-2">
                {['Coonoor', 'Ooty', 'Kotagiri', 'Masinagudi', 'Mettupalayam', 'Coimbatore Airport'].map(area => (
                  <span
                    key={area}
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: '0.8rem',
                      color: 'var(--navy)',
                      padding: '6px 14px',
                      border: '1px solid rgba(30,58,95,0.15)',
                      backgroundColor: 'white',
                    }}
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Message form */}
          <div
            className="p-8"
            style={{ backgroundColor: 'var(--navy)' }}
          >
            <p
              className="mb-8"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: '1.5rem',
                fontWeight: 300,
                color: 'white',
              }}
            >
              Send us a message
            </p>

            <div className="mb-6">
              <label style={labelStyle}>Your Name</label>
              <input
                type="text"
                placeholder="What should we call you?"
                value={name}
                onChange={e => setName(e.target.value)}
                style={inputStyle}
              />
            </div>

            <div className="mb-8">
              <label style={labelStyle}>Message</label>
              <textarea
                placeholder="Tell us about your trip — dates, group size, places you'd like to visit..."
                value={message}
                onChange={e => setMessage(e.target.value)}
                rows={6}
                style={{ ...inputStyle, resize: 'none' }}
              />
            </div>

            <button
              onClick={handleSend}
              className="w-full py-4 text-sm tracking-widest uppercase font-light text-white transition-all duration-300 hover:opacity-80"
              style={{ backgroundColor: 'var(--teal)' }}
            >
              Send via WhatsApp
            </button>

            <p
              className="mt-4 text-center"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '0.78rem',
                color: 'rgba(255,255,255,0.3)',
              }}
            >
              Your message will open in WhatsApp. We'll reply within 2 hours.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}