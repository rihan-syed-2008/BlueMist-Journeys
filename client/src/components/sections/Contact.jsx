import { useState, useEffect, useRef } from 'react'

export default function Contact() {
  const [visible, setVisible] = useState(false)
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
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
    padding: '15px 18px',
    backgroundColor: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: '18px',
    fontFamily: "'DM Sans', sans-serif",
    fontSize: '0.95rem',
    color: 'white',
    outline: 'none',
  }

  const labelStyle = {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: '0.72rem',
    letterSpacing: '0.24em',
    textTransform: 'uppercase',
    color: 'var(--teal)',
    marginBottom: '10px',
    display: 'block',
  }

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-32 px-6 overflow-hidden"
      style={{
        background:
          'linear-gradient(to bottom, var(--cream), rgba(248,246,242,0.96))',
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div
          className="mb-14 transition-all duration-1000"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(24px)',
          }}
        >
          <p
            className="uppercase mb-5"
            style={{
              color: 'var(--teal)',
              fontSize: '0.72rem',
              letterSpacing: '0.4em',
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            Final Invitation
          </p>

          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(2.2rem, 4vw, 4rem)',
              lineHeight: 1,
              fontWeight: 300,
              color: 'var(--navy)',
            }}
          >
            Let’s Plan
            <br />
            <span style={{ fontStyle: 'italic' }}>Something Beautiful</span>
          </h2>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.05fr] gap-12 items-start">
          {/* Left */}
          <div
            className="transition-all duration-1000"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(30px)',
            }}
          >
            <p
              className="mb-10"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: '1.12rem',
                lineHeight: 1.9,
                color: 'rgba(30,58,95,0.76)',
              }}
            >
              Tell us what kind of journey you're dreaming of, misty sunrise
              drives, quiet tea estates, winding roads through the hills, or
              simply a slow weekend away from the noise.
            </p>

            {/* Contact Cards */}
            <div className="space-y-5">
              {[
                {
                  title: 'WhatsApp',
                  value: '+91 82483 19282',
                  href: 'https://wa.me/918248319282',
                  bg: '#25D366',
                },

                {
                  title: 'Instagram',
                  value: '@bluemistjourneys',
                  href: 'https://instagram.com/bluemistjourneys',
                  bg: 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)',
                },

                {
                  title: 'Email',
                  value: 'rihan.syed2025@gmail.com',
                  href: 'mailto:rihan.syed2025@gmail.com',
                  bg: 'var(--teal)',
                },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    flex items-center justify-between
                    px-6 py-5
                    rounded-[30px]
                    transition-all duration-500
                    hover:-translate-y-[2px]
                  "
                  style={{
                    backgroundColor: 'white',
                    border: '1px solid rgba(30,58,95,0.08)',
                    boxShadow: '0 24px 70px rgba(15,23,42,0.06)',
                    textDecoration: 'none',
                  }}
                >
                  <div className="flex items-center gap-5">
                    <div
                      style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '16px',
                        background: item.bg,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      {item.title === 'WhatsApp' && (
                        <svg
                          viewBox="0 0 32 32"
                          width="25"
                          height="25"
                          fill="white"
                        >
                          <path transform="translate(1.8 0)" d="M19.11 17.2c-.29-.14-1.7-.84-1.96-.94-.26-.1-.45-.14-.64.14-.18.29-.73.94-.89 1.13-.16.19-.32.21-.6.07-.29-.14-1.2-.44-2.28-1.41-.84-.75-1.41-1.67-1.57-1.95-.16-.28-.02-.43.12-.57.13-.13.28-.32.42-.48.14-.16.19-.28.28-.47.09-.19.05-.36-.02-.5-.07-.14-.64-1.54-.88-2.11-.23-.55-.47-.48-.64-.49h-.55c-.19 0-.5.07-.76.35-.26.29-1 1-1 2.43s1.03 2.8 1.18 3c.14.19 2.02 3.08 4.89 4.31.68.29 1.21.46 1.62.59.68.22 1.3.19 1.79.12.55-.08 1.7-.7 1.94-1.38.24-.68.24-1.26.17-1.38-.07-.12-.25-.19-.54-.33z" />

                          <path d="M16 3.2C9.48 3.2 4.2 8.48 4.2 15c0 2.1.55 4.15 1.6 5.96L4 28l7.23-1.89A11.75 11.75 0 0 0 16 26.8c6.52 0 11.8-5.28 11.8-11.8S22.52 3.2 16 3.2zm0 21.45c-1.7 0-3.36-.45-4.82-1.3l-.34-.2-4.28 1.12 1.14-4.18-.22-.35A9.61 9.61 0 0 1 6 15c0-5.51 4.49-10 10-10s10 4.49 10 10-4.49 9.65-10 9.65z" />
                        </svg>
                      )}

                      {item.title === 'Instagram' && (
                        <svg
                          viewBox="0 0 24 24"
                          width="26"
                          height="26"
                          fill="none"
                          stroke="white"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <rect
                            x="2.5"
                            y="2.5"
                            width="19"
                            height="19"
                            rx="5.5"
                          />
                          <circle cx="12" cy="12" r="4.5" />
                          <circle
                            cx="18"
                            cy="6"
                            r="1"
                            fill="white"
                            stroke="none"
                          />
                        </svg>
                      )}

                      {item.title === 'Email' && (
                        <svg
                          viewBox="0 0 24 24"
                          width="22"
                          height="22"
                          fill="white"
                        >
                          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                        </svg>
                      )}
                    </div>

                    <div>
                      <p
                        style={{
                          fontFamily: "'DM Sans', sans-serif",
                          fontSize: '0.72rem',
                          letterSpacing: '0.2em',
                          textTransform: 'uppercase',
                          color: 'rgba(30,58,95,0.42)',
                          marginBottom: '6px',
                        }}
                      >
                        {item.title}
                      </p>

                      <p
                        style={{
                          fontFamily: "'Cormorant Garamond', serif",
                          fontSize: '1.45rem',
                          color: 'var(--navy)',
                        }}
                      >
                        {item.value}
                      </p>
                    </div>
                  </div>

                  <p
                    style={{
                      color: 'var(--teal)',
                      fontSize: '1.2rem',
                    }}
                  >
                    →
                  </p>
                </a>
              ))}
            </div>

            {/* Areas */}
            <div className="mt-14">
              <p
                className="uppercase mb-5"
                style={{
                  color: 'var(--teal)',
                  fontSize: '0.68rem',
                  letterSpacing: '0.34em',
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                Areas We Cover
              </p>

              <div className="flex flex-wrap gap-3">
                {['Coonoor', 'Ooty', 'Kotagiri', 'Masinagudi'].map((area) => (
                  <span
                    key={area}
                    style={{
                      padding: '8px 15px',
                      borderRadius: '999px',
                      backgroundColor: 'white',
                      border: '1px solid rgba(30,58,95,0.08)',
                      color: 'var(--navy)',
                      fontSize: '0.82rem',
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div
            className="p-8 md:p-10 rounded-[40px] transition-all duration-1000"
            style={{
              backgroundColor: 'var(--navy)',
              border: '1px solid rgba(255,255,255,0.06)',
              boxShadow: '0 40px 120px rgba(15,23,42,0.18)',
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(30px)',
              transitionDelay: '0.15s',
            }}
          >
            <p
              className="mb-10"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: '1.6rem',
                fontWeight: 300,
                color: 'white',
              }}
            >
              Tell us about your journey
            </p>

            <div className="mb-7">
              <label style={labelStyle}>Your Name</label>

              <input
                type="text"
                placeholder="What should we call you?"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={inputStyle}
              />
            </div>

            <div className="mb-10">
              <label style={labelStyle}>Your Journey</label>

              <textarea
                placeholder="Dates, places, group size, ideas, moods — tell us everything."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={5}
                style={{
                  ...inputStyle,
                  resize: 'none',
                }}
              />
            </div>

            <button
              onClick={handleSend}
              className="
                w-full py-4 rounded-full
                uppercase tracking-[0.28em]
                text-sm
                transition-all duration-500
                hover:-translate-y-[2px]
              "
              style={{
                backgroundColor: 'var(--teal)',
                color: 'white',
                fontFamily: "'DM Sans', sans-serif",
                boxShadow: '0 24px 60px rgba(91,192,190,0.22)',
              }}
            >
              Begin The Journey
            </button>

            <p
              className="mt-8 text-center"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: 'italic',
                fontSize: '1.08rem',
                color: 'rgba(255,255,255,0.5)',
                lineHeight: 1.8,
              }}
            >
              The hills are waiting.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
