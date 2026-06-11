export default function Transfers() {
  const transfers = [
    {
      title: 'Airport Transfers',
      description:
        'Comfortable pickups and drop-offs connecting the Nilgiris with airports across South India.',
      image: '/images/airport.jpg',
    },
    {
      title: 'Railway Transfers',
      description:
        'Seamless station transfers with reliable transport to and from destinations across the hills.',
      image: '/images/railway.jpg',
    },
    {
      title: 'Point-to-Point Travel',
      description:
        'Flexible intercity and local transportation between destinations throughout the Nilgiris and beyond.',
      image: '/images/intercity.jpg',
    },
  ]

  return (
    <main className="bg-[#F8F6F2] min-h-screen">
      {/* Header */}
      <section className="pt-28 pb-10 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1
            className="
              text-[#1E3A5F]
              text-3xl
              md:text-6xl
              leading-tight
            "
            style={{ fontFamily: 'Cormorant Garamond' }}
          >
            Private Transfers
          </h1>

          <p
            className="
              mt-5
              text-[#1E3A5F]/70
              text-base
              md:text-lg
              leading-relaxed
              max-w-2xl
              mx-auto
            "
          >
            Airport pickups, railway station transfers and point-to-point travel
            across the Nilgiris and South India.
          </p>
        </div>
      </section>

      {/* Cards */}
      <section className="pb-10 px-6">
        <div className="hidden md:grid md:grid-cols-3 gap-9 max-w-6xl mx-auto">
          {transfers.map((item) => (
            <div
              key={item.title}
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
                  className="
                    text-white
                    text-3xl
                    mb-3
                  "
                  style={{ fontFamily: 'Cormorant Garamond' }}
                >
                  {item.title}
                </h2>

                <p
                  className="
                    text-white/70
                    leading-relaxed
                    mb-6
                  "
                >
                  {item.description}
                </p>

                {/* Your CTA goes here */}
                <button
                  className="
                    text-[#5BC0BE]
                    uppercase
                    tracking-[0.18em]
                    text-xs
                  "
                >
                  Book Transfer →
                </button>
              </div>
            </div>
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
            >
              {/* Floating Image */}
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
          border-[#1E3A5F]/10
        "
              />

              {/* Title */}
              <h3
                className="
          text-[#1E3A5F]
          text-2xl
          leading-tight
          mb-3
          pr-24
        "
                style={{ fontFamily: 'Cormorant Garamond' }}
              >
                {item.title}
              </h3>

              {/* Description */}
              <p
                className="
          text-[#1E3A5F]/70
          text-sm
          leading-relaxed
          mb-5
          pr-24
        "
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
