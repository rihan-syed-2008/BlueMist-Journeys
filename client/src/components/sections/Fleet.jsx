import { useEffect, useRef, useState } from 'react'

const fleet = [
  {
    name: 'Swift Dzire',
    image: '/images/dzire.png',
    recommendedFor: '1-2',
    type: 'Sedan',
    seats: '4 Seater',
    ac: 'AC',
    bestFor: 'Couples & solo travellers',
    features: [
      'Comfortable for city & hill roads',
      'Ideal for 1-2 day trips',
      'Fuel efficient',
    ],
  },
  {
    name: 'Toyota Etios',
    image: '/images/etios.png',
    recommendedFor: '3-4',
    type: 'Sedan',
    seats: '4 Seater',
    ac: 'AC',
    bestFor: 'Small families',
    features: [
      'Spacious boot for luggage',
      'Smooth on winding roads',
      'Great for full day tours',
    ],
  },
  {
    name: 'Innova Crysta',
    image: '/images/innova.png',
    recommendedFor: '5-6',
    type: 'Premium SUV',
    seats: '7 Seater',
    ac: 'AC',
    bestFor: 'Families & groups',
    features: [
      'Premium comfort on hill terrain',
      'Extra luggage space',
      'Ideal for multi-day trips',
    ],
  },
  {
    name: 'Tempo Traveller',
    image: '/images/tempo.png',
    recommendedFor: '7+',
    type: 'Van',
    seats: '12 Seater',
    ac: 'AC',
    bestFor: 'Large groups & corporate',
    features: [
      'Best for group travel',
      'Spacious seating',
      'Ideal for college & corporate trips',
    ],
  },
]

export default function Fleet() {
  const [visible, setVisible] = useState(false)
  const [groupSize, setGroupSize] = useState('')
  const sectionRef = useRef(null)

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
      id="fleet"
      ref={sectionRef}
      className="py-24 px-6"
      style={{ backgroundColor: 'var(--cream)' }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div
          className="mb-7 transition-all duration-1000"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
          }}
        >
          <p
            className="text-xs tracking-[0.4em] uppercase mb-4"
            style={{
              color: 'var(--teal)',
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            Travel, Your Way
          </p>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(2rem, 3.5vw, 3.5rem)',
              fontWeight: 300,
              color: 'var(--navy)',
            }}
          >
            Built For Every Kind Of Journey
          </h2>
        </div>
        <p
          className="mb-4"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '0.9rem',
            color: 'rgba(30,58,95,0.65)',
            letterSpacing: '0.04em',
          }}
        >
          Choose your group size and we’ll recommend the perfect vehicle.
        </p>

        <div className="mb-10 flex flex-wrap gap-3">
          {['1-2', '3-4', '5-6', '7+'].map((size) => (
            <button
              key={size}
              onClick={() => setGroupSize(groupSize === size ? '' : size)}
              style={{
                padding: '10px 20px',
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '0.85rem',
                border: '1px solid rgba(30,58,95,0.2)',
                borderRadius: '999px',
                backgroundColor:
                  groupSize === size ? 'var(--teal)' : 'rgba(255,255,255,0.7)',
                color: groupSize === size ? 'white' : 'var(--navy)',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              {size} people
            </button>
          ))}
        </div>

        {/* Fleet List */}
        <div
          className="
    grid grid-cols-1 md:grid-cols-2
    gap-8
    transition-all duration-1000
  "
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(30px)',
            transitionDelay: '0.2s',
          }}
        >
          {fleet.map((car, i) => {
            const isRecommended = groupSize === car.recommendedFor

            return (
              <div
                key={i}
                ref={(el) => {
                  if (isRecommended && el) {
                    setTimeout(() => {
                      el.scrollIntoView({
                        behavior: 'smooth',
                        block: 'center',
                      })
                    }, 120)
                  }
                }}
                className="
        group overflow-hidden
        rounded-[32px]
        transition-all duration-500
        hover:-translate-y-[4px]
      "
                style={{
                  backgroundColor: isRecommended
                    ? 'rgba(20,45,74,1)'
                    : 'var(--navy)',

                  boxShadow: isRecommended
                    ? '0 45px 120px rgba(91,192,190,0.32)'
                    : '0 30px 80px rgba(15,23,42,0.12)',

                  border: isRecommended
                    ? '2px solid rgba(91,192,190,0.95)'
                    : '1px solid rgba(255,255,255,0.06)',

                  transform: isRecommended
                    ? 'translateY(-10px)'
                    : 'translateY(0px)',

                  transition: 'all 0.6s cubic-bezier(0.22, 1, 0.36, 1)',
                }}
              >
                {/* Image */}
                <div
                  className="
          relative overflow-hidden
          flex items-center justify-center
          px-10 pt-12 pb-8
        "
                >
                  <img
                    src={car.image}
                    alt={car.name}
                    className="
            w-full max-w-[260px]
            h-[140px]
            object-contain
            transition-all duration-700
            group-hover:scale-[1.04]
          "
                  />

                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        'linear-gradient(to bottom, rgba(255,255,255,0.02), rgba(255,255,255,0))',
                    }}
                  />
                </div>

                {/* Content */}
                <div className="px-8 pb-8">
                  {isRecommended && (
                    <div
                      className="inline-flex items-center mb-5 px-4 py-2 rounded-full"
                      style={{
                        backgroundColor: 'rgba(91,192,190,0.14)',
                        border: '1px solid rgba(91,192,190,0.28)',
                        backdropFilter: 'blur(10px)',
                      }}
                    >
                      <p
                        style={{
                          color: 'var(--teal)',
                          fontSize: '0.65rem',
                          letterSpacing: '0.24em',
                          fontFamily: "'DM Sans', sans-serif",
                          textTransform: 'uppercase',
                        }}
                      >
                        Recommended For Your Group
                      </p>
                    </div>
                  )}
                  {/* Category */}
                  <p
                    className="uppercase mb-4"
                    style={{
                      color: 'var(--teal)',
                      fontSize: '0.68rem',
                      letterSpacing: '0.32em',
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                  >
                    {car.type}
                  </p>

                  {/* Title */}
                  <h3
                    className="mb-4"
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: '2.2rem',
                      fontWeight: 300,
                      color: 'white',
                      lineHeight: 1,
                    }}
                  >
                    {car.name}
                  </h3>

                  {/* Emotional line */}
                  <p
                    className="mb-6"
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontStyle: 'italic',
                      fontSize: '1.05rem',
                      color: 'rgba(255,255,255,0.72)',
                      lineHeight: 1.7,
                    }}
                  >
                    Perfect for {car.bestFor.toLowerCase()}.
                  </p>

                  {/* Specs */}
                  <p
                    className="mb-6"
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: '0.82rem',
                      color: 'rgba(255,255,255,0.5)',
                      letterSpacing: '0.08em',
                    }}
                  >
                    {car.seats} · {car.ac} · Recommended for{' '}
                    {car.recommendedFor} travellers
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {car.features.slice(0, 3).map((f, j) => (
                      <span
                        key={j}
                        style={{
                          padding: '8px 14px',
                          borderRadius: '999px',
                          backgroundColor: 'rgba(255,255,255,0.06)',
                          color: 'rgba(255,255,255,0.7)',
                          fontSize: '0.74rem',
                          fontFamily: "'DM Sans', sans-serif",
                        }}
                      >
                        {f}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <button
                    onClick={() => {
                      window.dispatchEvent(
                        new CustomEvent('vehicleSelected', {
                          detail: car.name,
                        })
                      )

                      const section = document.getElementById('custom')

                      if (section) {
                        section.scrollIntoView({
                          behavior: 'smooth',
                          block: 'start',
                        })
                      }
                    }}
                    className="
            w-full rounded-full
            py-4
            uppercase
            tracking-[0.26em]
            text-[11px]
            transition-all duration-500
            hover:opacity-90
          "
                    style={{
                      backgroundColor: 'var(--teal)',
                      color: 'white',
                      fontFamily: "'DM Sans', sans-serif",
                      boxShadow: '0 20px 50px rgba(91,192,190,0.18)',
                    }}
                  >
                    Choose This Vehicle
                  </button>
                </div>
              </div>
            )
          })}
        </div>

        {/* Note */}
        <p
          className="mt-8 transition-all duration-1000"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '0.85rem',
            color: 'rgba(30,58,95,0.45)',
            opacity: visible ? 1 : 0,
            transitionDelay: '0.4s',
          }}
        >
          All vehicles are well maintained and driven by experienced local
          drivers. Vehicle allocation is based on group size and route.
        </p>
      </div>
    </section>
  )
}
