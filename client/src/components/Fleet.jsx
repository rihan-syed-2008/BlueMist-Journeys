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
    features: ['Comfortable for city & hill roads', 'Ideal for 1-2 day trips', 'Fuel efficient'],
  },
  {
    name: 'Toyota Etios',
    image: '/images/etios.png',
    recommendedFor: '3-4',
    type: 'Sedan',
    seats: '4 Seater',
    ac: 'AC',
    bestFor: 'Small families',
    features: ['Spacious boot for luggage', 'Smooth on winding roads', 'Great for full day tours'],
  },
  {
    name: 'Innova Crysta',
    image: '/images/innova.png',
    recommendedFor: '5-6',
    type: 'Premium SUV',
    seats: '7 Seater',
    ac: 'AC',
    bestFor: 'Families & groups',
    features: ['Premium comfort on hill terrain', 'Extra luggage space', 'Ideal for multi-day trips'],
  },
  {
    name: 'Tempo Traveller',
    image: '/images/tempo.png',
    recommendedFor: '7+',
    type: 'Van',
    seats: '12 Seater',
    ac: 'AC',
    bestFor: 'Large groups & corporate',
    features: ['Best for group travel', 'Spacious seating', 'Ideal for college & corporate trips'],
  },
]

export default function Fleet() {
  const [visible, setVisible] = useState(false)
  const [groupSize, setGroupSize] = useState('')
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
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
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div
          className="mb-7 transition-all duration-1000"
          style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(20px)' }}
        >
          <p
            className="text-xs tracking-[0.4em] uppercase mb-4"
            style={{ color: 'var(--teal)', fontFamily: "'DM Sans', sans-serif" }}
          >
            Travel in Comfort
          </p>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              fontWeight: 300,
              color: 'var(--navy)',
            }}
          >
            Our Fleet
          </h2>
        </div>

        <div className="mb-10 flex flex-wrap gap-3">
          {['1-2', '3-4', '5-6', '7+'].map(size => (
            <button
              key={size}
              onClick={() => setGroupSize(groupSize === size ? '' : size)}
              style={{
                padding: '10px 20px',
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '0.85rem',
                border: '1px solid rgba(30,58,95,0.2)',
                backgroundColor: groupSize === size ? 'var(--teal)' : 'white',
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
          className="transition-all duration-1000"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(30px)',
            transitionDelay: '0.2s',
            border: '1px solid rgba(255,255,255,0.08)',
            backgroundColor: 'var(--navy)',
          }}
        >
          {fleet.map((car, i) => (
            <div
              key={i}
              className="flex items-center gap-8 p-6 transition-all duration-300 hover:bg-white/5 group"
              style={{
                borderBottom: i < fleet.length - 1 ? '1px solid rgba(255,255,255,0.08)' : 'none',
                outline: groupSize === car.recommendedFor ? '2px solid var(--teal)' : 'none',
                backgroundColor: groupSize === car.recommendedFor ? 'rgba(91,192,190,0.08)' : 'transparent',
                transition: 'all 0.3s ease',
              }}
            >
              {/* Car illustration placeholder */}
              <div
                className="flex-shrink-0 flex items-center justify-center"
                style={{ width: '100px', height: '64px' }}
              >
                <img
                  src={car.image}
                  alt={car.name}
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                />
              </div>

              {/* Details */}
              <div className="flex-1">
                <div className="flex items-baseline gap-3 mb-1">
                  <h3
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: '1.4rem',
                      fontWeight: 400,
                      color: 'white',
                    }}
                  >
                    {car.name}
                  </h3>
                  <span
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: '0.75rem',
                      color: 'var(--teal)',
                      letterSpacing: '0.1em',
                    }}
                  >
                    {car.type}
                  </span>
                </div>
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '0.85rem',
                    color: 'rgba(255,255,255,0.75)',
                    marginBottom: '8px',
                  }}
                >
                  <span style={{ color: 'var(--teal)' }}>{car.seats}</span>
<span style={{ color: 'rgba(255,255,255,0.4)' }}> · </span>
<span style={{ color: 'var(--teal)' }}>{car.ac}</span>
<span style={{ color: 'rgba(255,255,255,0.4)' }}> · </span>
<span style={{ color: 'rgba(255,255,255,0.7)' }}>Best for {car.bestFor}</span>
                </p>
                <div className="flex flex-wrap gap-2">
                  {car.features.map((f, j) => (
                    <span
                      key={j}
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: '0.75rem',
                        color: 'rgba(255,255,255,0.7)',
                        padding: '3px 10px',
                        border: '1px solid rgba(255,255,255,0.15)',
                      }}
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right — seats badge */}
              <div
                className="flex-shrink-0 text-right"
                style={{ minWidth: '60px' }}
              >
                <p
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: '1.8rem',
                    fontWeight: 300,
                    color: 'white',
                    opacity: 0.8,
                    lineHeight: 1,
                  }}
                >
                  {car.seats.split(' ')[0]}
                </p>
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '0.7rem',
                    color: 'rgba(255,255,255,0.6)',
                    letterSpacing: '0.1em',
                  }}
                >
                  seats
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <p
          className="mt-8 transition-all duration-1000"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '0.85rem',
            color: 'rgba(255,255,255,0.3)',
            opacity: visible ? 1 : 0,
            transitionDelay: '0.4s',
          }}
        >
          All vehicles are well maintained and driven by experienced local drivers.
          Vehicle allocation is based on group size and route.
        </p>

      </div>
    </section>
  )
}