import { useNavigate } from 'react-router-dom'

export default function Transfers() {
  const transfers = [
    {
      title: 'Airport Transfers',
      description:
        'Comfortable pickups and drop-offs connecting the Nilgiris with airports across South India.',
      image: '/images/airport.jpg',
      route: '/transfers/airport',
    },
    {
      title: 'Railway Transfers',
      description:
        'Seamless station transfers with reliable transport to and from destinations across the hills.',
      image: '/images/railway.jpg',
      route: '/transfers/railway',
    },
    {
      title: 'Point-to-Point Travel',
      description:
        'Flexible intercity and local transportation between destinations throughout the Nilgiris and beyond.',
      image: '/images/intercity.jpg',
      route: '/transfers/point-to-point',
    },
  ]

  const navigate = useNavigate()

  return (
    <main className="bg-[#F8F6F2] min-h-screen">
      {/* Header */}
      <section className="pt-28 pb-14 px-6">
        <div className="max-w-6xl mx-auto flex items-end justify-between gap-8">
          <div>
            <p
              className="text-xs tracking-[0.4em] uppercase mb-4"
              style={{
                color: 'var(--teal)',
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              Private Transport
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
              Transfers
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
              Airport pickups, railway station transfers and point-to-point
              travel across the Nilgiris and South India.
            </p>
          </div>

          <button
            onClick={() => navigate('/')}
            className="
            hidden md:block
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
      </section>

      {/* Cards */}
      <section className="pb-10 px-6">
        <div className="hidden md:grid md:grid-cols-3 gap-9 max-w-6xl mx-auto">
          {transfers.map((item) => (
            <button
              key={item.title}
              onClick={() => navigate(item.route)}
              className="
                bg-white/70 backdrop-blur
                rounded-[28px]
                overflow-hidden
                shadow-sm
                group
              "
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="
                    w-full
                    h-[220px]
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-105
                  "
                />
              </div>

              {/* Content */}
              <div className="bg-[#1E3A5F] p-7">
                <h2
                  className="mb-3"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: '1.55rem',
                    fontWeight: 400,
                    color: 'white',
                  }}
                >
                  {item.title}
                </h2>

                <p
                  className="mb-6"
                  style={{
                    fontSize: '0.95rem',
                    color: 'rgba(255,255,255,0.68)',
                    fontWeight: 300,
                    lineHeight: 1.6,
                    fontFamily: "'Cormorant Garamond', serif",
                  }}
                >
                  {item.description}
                </p>

                {/* Your CTA goes here */}
                <button
                  className="
font-sans
text-xs
uppercase
tracking-[0.28em]
text-center
"
                  style={{
                    color: 'rgba(91,192,190,0.9)',
                  }}
                >
                  Book Transfer →
                </button>
              </div>
            </button>
          ))}
        </div>
        <div className="md:hidden">
          {transfers.map((item) => (
            <button
              key={item.title}
              className="
        relative
        w-full
        text-left
        py-8
        border-b
        border-[#1E3A5F]/10
        last:border-b-0
      "
              onClick={() => navigate(item.route)}
            >
              {/* Floating Image */}
              <img
                src={item.image}
                alt={item.title}
                className="
          absolute
          top-4
          right-0

          w-16
          h-16

          rounded-full
          object-cover

          border
          border-[#1E3A5F]/10
        "
              />

              {/* Title */}
              <h3
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '1.6rem',
                  fontWeight: 400,
                  color: 'var(--navy)',
                }}
              >
                {item.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontSize: '0.95rem',
                  color: 'rgba(30,58,95,0.6)',
                  lineHeight: 1.6,
                  fontFamily: "'Cormorant Garamond', serif",
                  marginBottom: '10px',
                  marginTop: '10px',
                }}
              >
                {item.description}
              </p>

              {/* CTA */}
              <span
                className="
          text-[#5BC0BE]
          uppercase
          tracking-[0.18em]
          text-xs
        "
              >
                Book Transfer →
              </span>
            </button>
          ))}
        </div>
      </section>
    </main>
  )
}
