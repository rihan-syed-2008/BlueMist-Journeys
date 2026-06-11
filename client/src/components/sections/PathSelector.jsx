import { useNavigate } from 'react-router-dom'

export default function PathSelector() {
  const navigate = useNavigate()

  const paths = [
    {
      head: 'Pickup/Drop',
      title: 'Arriving In The Hills',
      description:
        'Airport transfers, railway pickups and seamless intercity travels.',
      image: '/images/nilgiris-3.jpg',
      route: '/transfers',
    },
    {
      head: 'Packages',
      title: 'Curated Escapes',
      description:
        'Handcrafted journeys designed around the landscapes, culture and rhythm of the hills.',
      image: '/images/masinagudi.jpg',
      route: '/journeys',
    },
    {
      head: 'AI Planner',
      title: 'A Journey Of Your Own',
      description:
        "Tell us how you'd like to travel and our AI will craft an itinerary around it.",
      image: '/images/coonoor.jpg',
      route: '/custom-trip',
    },
    {
      head: 'Explore',
      title: 'Discover The Nilgiris',
      description:
        'Destinations, stories and hidden corners of the Blue Mountains.',
      image: '/images/nilgiris-2.jpg',
      route: '/explore',
    },
  ]

  return (
    <section
      className="
        py-16 md:py-20
        bg-gradient-to-b
        from-[#152C47]
        via-[#1E3A5F]
        to-[#243F62]
      "
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Heading */}
        <div className="text-center mb-10 md:mb-12">
          <h2
            className="
              text-white
              text-3xl md:text-4xl
              leading-tight
            "
            style={{ fontFamily: 'Cormorant Garamond' }}
          >
            How Will You Experience The Nilgiris?
          </h2>

          <p
            className="
              mt-4
              max-w-3xl
              mx-auto
              text-teal
              text-base
              md:text-lg
              leading-relaxed
            "
            style={{ fontFamily: 'Cormorant Garamond' }}
          >
            Transfers, curated journeys, bespoke itineraries and online journals
          </p>
        </div>

        {/* Grid */}
        <div className="hidden md:grid md:grid-cols-2 gap-5">
          {paths.map((item) => (
            <button
              key={item.title}
              onClick={() => navigate(item.route)}
              className="
                relative
                overflow-hidden
                rounded-2xl md:rounded-[28px]
                h-[220px]
                md:h-[320px]
                text-left
                group
              "
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="
                  absolute
                  inset-0
                  w-full
                  h-full
                  object-cover
                  opacity-20
                  md:opacity-100
                  transition-transform
                  duration-700
                  group-hover:scale-105
                "
              />

              <div
                className="
    absolute
    inset-0
    bg-[#1E3A5F]

    md:hidden
  "
              />

              {/* Bottom text fade only */}
              <div
                className="
                hidden md:block
                  absolute
                  inset-x-0
                  bottom-0
                  h-56

                  bg-gradient-to-t
                  from-[#0A1522]/95
via-[#0A1522]/50
via-75%
to-transparent
                "
              />

              {/* Optional subtle border */}
              <div
                className="
                hidden md:block
                  absolute
                  inset-0
                  rounded-[28px]
                  ring-1
                  ring-white/10
                "
              />

              {/* Content */}
              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  right-0
                  p-5
                  md:p-8
                "
              >
                <h2
                  className="text-[#5BC0BE]
uppercase
tracking-[0.2em]
text-xs
font-medium"
                >
                  {item.head}
                </h2>
                <h3
                  className="
                    text-white
                    text-2xl md:text-[2rem]
                    mb-2
                    leading-tight
                  "
                  style={{ fontFamily: 'Cormorant Garamond' }}
                >
                  {item.title}
                </h3>

                <p
                  className="
                    text-white/85
                    text-xs
                    md:text-base
                    leading-relaxed
                    max-w-sm
                    mb-5
                  "
                >
                  {item.description}
                </p>

                <div
                  className="
                    flex
                    items-center
                    gap-2
                    text-[#5BC0BE]
                    uppercase
                    tracking-[0.18em]
                    text-xs
                  "
                >
                  Explore
                  <span
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  >
                    →
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>
        <div className="md:hidden">
          {paths.map((item) => (
            <button
              key={item.title}
              onClick={() => navigate(item.route)}
              className="
    relative
    w-full
    text-left
    py-8
    border-b
    border-white/10
    last:border-b-0
  "
            >
              {/* Top Row */}
              <div className="flex justify-between items-start gap-4 mb-4">
                <p
                  className="
        text-[#5BC0BE]
        uppercase
        tracking-[0.2em]
        text-xs
        mt-2
      "
                >
                  {item.head}
                </p>

                <img
                  src={item.image}
                  alt={item.title}
                  className="
    absolute
    top-8
    right-0

    w-20
    h-20

    rounded-full
    object-cover

    border
    border-white/10
  "
                />
              </div>

              {/* Title */}
              <h3
                className="
      text-white
      text-2xl
      leading-tight
      mb-3
    "
                style={{ fontFamily: 'Cormorant Garamond' }}
              >
                {item.title}
              </h3>

              {/* Description */}
              <p
                className="
      text-white/70
      text-sm
      leading-relaxed
      mb-4
      max-w-sm
    "
              >
                {item.description}
              </p>

              {/* CTA */}
              <span
                className="
      text-[#5BC0BE]
      uppercase
      tracking-[0.2em]
      text-xs
    "
              >
                Explore →
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
