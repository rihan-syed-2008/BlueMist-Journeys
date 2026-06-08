import useReveal from '../../hooks/useReveal'

export default function StopSection({ stop, index, image, place }) {
  const isReverse = index % 2 !== 0

  const { ref, isVisible } = useReveal(0.18)

  return (
    <div
      ref={ref}
      className={`grid grid-cols-1 md:grid-cols-2 gap-14 items-center transition-all duration-[1200ms] ${
        isReverse ? 'md:[&>*:first-child]:order-2' : ''
      }`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0px)' : 'translateY(50px)',
      }}
    >
      {/* Image */}
      <div className="hidden md:block relative rounded-[26px] overflow-hidden shadow-[0_30px_80px_rgba(15,23,42,0.14)]">
        <img src={image} alt={stop} className="w-full h-[420px] object-cover" />

        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to top, rgba(8,15,28,0.52), rgba(8,15,28,0.04))',
          }}
        />
      </div>

      {/* Content */}
      <div>
        <p
          className="uppercase mb-5"
          style={{
            color: 'rgba(91,192,190,0.9)',
            fontSize: '0.72rem',
            letterSpacing: '0.34em',
            fontFamily: 'DM Sans, sans-serif',
          }}
        >
          Stop {index + 1}
        </p>

        <h3
          className="font-serif text-navy mb-5"
          style={{
            fontSize: 'clamp(2rem, 3vw, 3rem)',
            fontWeight: 300,
          }}
        >
          {stop}
        </h3>

        {place && (
          <>
            <p
              className="font-sans text-navy/80 leading-[1.9] mb-8"
              style={{
                fontSize: '1rem',
                fontWeight: 300,
              }}
            >
              {place.description}
            </p>

            <div className="flex flex-wrap gap-8">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-teal mb-2 font-sans">
                  Duration
                </p>

                <p className="font-serif text-[1.15rem] text-navy">
                  {place.duration}
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-teal mb-2 font-sans">
                  Best Time
                </p>

                <p className="font-serif text-[1.15rem] text-navy">
                  {place.bestTime}
                </p>
              </div>
            </div>
          </>
        )}
      </div>
      <div className="block md:hidden mt-10 border-b border-navy/10" />
    </div>
  )
}
