import { useNavigate } from 'react-router-dom'

export default function PackageCard({ pkg, index = 0, visible = true }) {
  const navigate = useNavigate()

  return (
    <div
      key={pkg.id}
      className="group cursor-pointer rounded-[22px] overflow-hidden transition-all duration-700"
      style={{
        opacity: visible ? 1 : 0,
        transitionDelay: `${index * 0.15}s`,
        boxShadow:
          index === 1
            ? '0 30px 80px rgba(15,23,42,0.18)'
            : '0 16px 50px rgba(15,23,42,0.12)',

        transform: visible ? 'translateY(0px)' : 'translateY(40px)',

        border: '1px solid rgba(30,58,95,0.08)',
      }}
      onClick={() => navigate(`/package/${pkg.id}`)}
    >
      {/* Image */}
      <div className="relative overflow-hidden" style={{ height: '240px' }}>
        <img
          src={pkg.image}
          alt={pkg.title}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-[1.04]"
        />

        {/* Base atmospheric overlay */}
        <div
          className="absolute inset-0 transition-all duration-700"
          style={{
            background:
              'linear-gradient(to top, rgba(10,20,35,0.42), rgba(10,20,35,0.04))',
            opacity: 0.55,
          }}
        />

        {/* Hover reveal overlay */}
        <div
          className="absolute inset-0 flex flex-col justify-end p-6 transition-all duration-700 opacity-100 md:opacity-0 md:group-hover:opacity-100"
          style={{
            background:
              'linear-gradient(to top, rgba(10,20,35,0.58), rgba(10,20,35,0.02))',
          }}
        >
          <div className="space-y-2">
            {pkg.stops.slice(0, 3).map((stop) => (
              <p
                key={stop}
                className="text-sm font-light"
                style={{
                  color: 'rgba(255,255,255,0.92)',
                  fontFamily: "'Cormorant Garamond', serif",
                  letterSpacing: '0.03em',
                }}
              >
                • {stop}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Card Content */}
      <div
        className="p-7"
        style={{
          background: 'linear-gradient(180deg, #24476f 0%, #1d3656 100%)',
        }}
      >
        <p
          className="text-xs tracking-widest uppercase mb-2 group-hover:tracking-[0.34em]"
          style={{
            color: 'rgba(91,192,190,0.78)',
            transition: 'all 0.4s ease',
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          {pkg.duration}
        </p>
        <h3
          className="mb-3"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: '1.45rem',
            fontWeight: 400,
            color: 'white',
          }}
        >
          {pkg.title}
        </h3>
        <p
          className="font-serif mb-5"
          style={{
            fontSize: '1rem',
            color: 'rgba(255,255,255,0.68)',
            fontWeight: 300,
            lineHeight: 1.5,
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
          <p
            className="font-sans text-xs uppercase tracking-[0.28em] pt-4 text-center"
            style={{
              color: 'rgba(91,192,190,0.9)',
            }}
          >
            View Journey →
          </p>
        </div>
      </div>
    </div>
  )
}
