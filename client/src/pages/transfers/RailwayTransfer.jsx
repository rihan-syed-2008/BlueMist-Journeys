import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function RailwayTransfer() {
  const [transferType, setTransferType] = useState('pickup')
  const [journeyType, setJourneyType] = useState('oneway')
  const navigate = useNavigate()

  const stations = [
    'Udhagamandalam (Ooty)',
    'Lovedale',
    'Ketti',
    'Coonoor',
    'Wellington',
    'Aravankadu',
    'Hillgrove',
    'Mettupalayam',
    'Coimbatore Junction',
    'Erode Junction',
    'Salem Junction',
    'Bengaluru City Junction',
    'Chennai Central',
  ]

  const destinations = [
    'Ooty',
    'Coonoor',
    'Kotagiri',
    'Masinagudi',
    'Gudalur',
    'Avalanche',
    'Pykara',
    'Emerald',
    'Ketti Valley',
  ]

  const emptyForm = {
    pickupRailway: '',
    dropLocation: '',
    returnRailway: '',
    returnLocation: '',
    vehicle: 'No Preference',
    trainNumber: '',
    transferTime: '',
    name: '',
    phone: '',
    date: '',
    passengers: '',
  }

  const [form, setForm] = useState({
    pickupRailway: '',
    dropLocation: '',
    returnRailway: '',
    returnLocation: '',
    vehicle: 'No Preference',
    trainNumber: '',
    transferTime: '',
    name: '',
    phone: '',
    date: '',
    passengers: '',
  })

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const swapTransferDirection = () => {
    setTransferType((prev) => (prev === 'pickup' ? 'drop' : 'pickup'))

    setForm((prev) => ({
      ...prev,

      // Outbound
      pickupRailway: prev.dropLocation,
      dropLocation: prev.pickupRailway,

      // Return
      returnRailway: prev.returnLocation,
      returnLocation: prev.returnRailway,
    }))
  }

  const handleWhatsapp = () => {
    if (
      !form.pickupRailway ||
      !form.dropLocation ||
      !form.name ||
      !form.phone ||
      !form.date
    ) {
      alert('Please complete all required fields before booking.')
      return
    }
    if (
      journeyType === 'twoway' &&
      (!form.returnRailway || !form.returnLocation)
    ) {
      alert('Please complete the return journey details.')
      return
    }
    if (!/^\d{10}$/.test(form.phone)) {
      alert('Please enter a valid 10-digit phone number.')
      return
    }
    if (!form.transferTime) {
      alert(
        transferType === 'pickup'
          ? 'Please enter arrival time.'
          : 'Please enter departure time.'
      )
      return
    }
    if (
      form.pickupRailway.trim().toLowerCase() ===
      form.dropLocation.trim().toLowerCase()
    ) {
      alert('Pickup and destination cannot be the same.')
      return
    }
    const formattedTransferType =
      transferType === 'pickup' ? 'Railway Pickup' : 'Railway Drop'

    const formattedJourneyType =
      journeyType === 'oneway' ? 'One Way' : 'Two Way'

    const message = `
Railway Transfer Request

Type: ${formattedTransferType}
Journey: ${formattedJourneyType}

${
  transferType === 'pickup'
    ? `Railway: ${form.pickupRailway}
Destination: ${form.dropLocation}`
    : `Pickup Location: ${form.dropLocation}
Railway: ${form.pickupRailway}`
}

${
  journeyType === 'twoway'
    ? `
Return Railway: ${form.returnRailway}
Return Location: ${form.returnLocation}
`
    : ''
}

Date: ${form.date}
Passengers: ${form.passengers}

Vehicle Preference: ${form.vehicle}
Train Number: ${form.trainNumber || 'Not Provided'}
${
  transferType === 'pickup'
    ? `Arrival Time: ${form.transferTime || 'Not Provided'}`
    : `Departure Time: ${form.transferTime || 'Not Provided'}`
}

Name: ${form.name}
Phone: ${form.phone}
`

    window.open(
      `https://wa.me/917200969889?text=${encodeURIComponent(message)}`
    )
  }

  return (
    <main className="bg-[#F8F6F2] min-h-screen pt-20 pb-12 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-end justify-between gap-8 mb-8">
          <div className="mb-8">
            <div className="md:hidden mb-6">
              <button
                onClick={() => navigate('/transfers')}
                className="
      inline-flex
      items-center
      gap-2
      text-[#1E3A5F]/60
      hover:text-[#1E3A5F]
      text-sm
      uppercase
      tracking-[0.18em]
      transition-all
    "
              >
                ← Transfers
              </button>
            </div>
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
              Airport Transfers
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
              Private airport transfers between South India and the Nilgiris.
            </p>
          </div>
          <div className="hidden md:block">
            <button
              onClick={() => navigate('/transfers')}
              className="
        inline-flex
        items-center
        gap-2
        text-[#1E3A5F]/60
        hover:text-[#1E3A5F]
        text-sm
        uppercase
        tracking-[0.18em]
        transition-all
      "
            >
              ← Transfers
            </button>
          </div>
        </div>
        <div
          className="
    mt-7

    rounded-[32px]

    border
    border-[#1E3A5F]/15

    p-8
    md:p-10
    bg-gradient-to-b
from-[#EEF2F5]
to-[#E5EBF0]
  "
        >
          {/* Pickup / Drop */}
          <div
            className="
    flex
    justify-center
    md:justify-start
    gap-3
    mb-10
  "
          >
            <button
              onClick={() => {
                setTransferType('pickup')
                setForm(emptyForm)
              }}
              className={`px-5 py-3 rounded-full ${
                transferType === 'pickup'
                  ? 'bg-[#5BC0BE] text-white'
                  : 'bg-white'
              }`}
            >
              Railway Station Pickup
            </button>

            <button
              onClick={() => {
                setTransferType('drop')
                setForm(emptyForm)
              }}
              className={`px-5 py-3 rounded-full ${
                transferType === 'drop' ? 'bg-[#5BC0BE] text-white' : 'bg-white'
              }`}
            >
              Railway Station Drop
            </button>
          </div>

          {/* One Way / Two Way */}
          <div
            className="
    flex
    justify-center
    md:justify-start
    gap-3
    mb-10
  "
          >
            <button
              onClick={() => {
                setJourneyType('oneway')
                setForm(emptyForm)
              }}
              className={`px-5 py-3 rounded-full ${
                journeyType === 'oneway'
                  ? 'bg-[#5BC0BE] text-white'
                  : 'bg-white'
              }`}
            >
              One Way
            </button>

            <button
              onClick={() => {
                setJourneyType('twoway')
                setForm(emptyForm)
              }}
              className={`px-5 py-3 rounded-full ${
                journeyType === 'twoway'
                  ? 'bg-[#5BC0BE] text-white'
                  : 'bg-white'
              }`}
            >
              Two Way
            </button>
          </div>

          <p
            className="
    text-[#1E3A5F]/70
    text-xs
    uppercase
    tracking-[0.25em]
    mb-3
  "
          >
            Pickup Journey
          </p>

          {/* Primary Route */}
          <div className="grid md:grid-cols-[1fr_auto_1fr] gap-4 items-center mb-8">
            <div>
              <input
                list={transferType === 'pickup' ? 'stations' : 'destinations'}
                name="pickupRailway"
                value={form.pickupRailway}
                onChange={handleChange}
                placeholder={
                  transferType === 'pickup'
                    ? 'Pickup Railway Station'
                    : 'Pickup Location'
                }
                className="w-full p-4 rounded-2xl"
              />
            </div>

            <button
              type="button"
              onClick={swapTransferDirection}
              className="
      text-2xl
      text-[#5BC0BE]
      hover:scale-110
      transition-all
    "
            >
              ⇄
            </button>

            <div>
              <input
                list={transferType === 'pickup' ? 'destinations' : 'stations'}
                name="dropLocation"
                value={form.dropLocation}
                onChange={handleChange}
                placeholder={
                  transferType === 'pickup'
                    ? 'Dropoff Location'
                    : 'Dropoff Railway Station'
                }
                className="w-full p-4 rounded-2xl"
              />
            </div>
          </div>

          {journeyType === 'twoway' && (
            <>
              <p
                className="
        text-[#1E3A5F]/70
        text-xs
        uppercase
        tracking-[0.25em]
        mb-3
      "
              >
                Return Journey
              </p>
              <div className="grid md:grid-cols-[1fr_auto_1fr] gap-4 items-center mb-10">
                <div>
                  <input
                    list={
                      transferType === 'pickup' ? 'destinations' : 'stations'
                    }
                    name="returnLocation"
                    value={form.returnLocation}
                    onChange={handleChange}
                    placeholder={
                      transferType === 'pickup'
                        ? 'Return Pickup Location'
                        : 'Return Pickup Railway Station'
                    }
                    className="w-full p-4 rounded-2xl"
                  />
                </div>

                <button
                  type="button"
                  onClick={swapTransferDirection}
                  className="
    text-2xl
    text-[#5BC0BE]
    hover:scale-110
    transition-all
  "
                >
                  ⇄
                </button>

                <div>
                  <input
                    list={
                      transferType === 'pickup' ? 'stations' : 'destinations'
                    }
                    name="returnRailway"
                    value={form.returnRailway}
                    onChange={handleChange}
                    placeholder={
                      transferType === 'pickup'
                        ? 'Return Drop Railway'
                        : 'Return Drop Location'
                    }
                    className="w-full p-4 rounded-2xl"
                  />
                </div>
              </div>
            </>
          )}

          <datalist id="stations">
            {stations.map((station) => (
              <option key={station} value={station} />
            ))}
          </datalist>

          <datalist id="destinations">
            {destinations.map((dest) => (
              <option key={dest} value={dest} />
            ))}
          </datalist>

          <p
            className="
    text-[#1E3A5F]/70
    text-xs
    uppercase
    tracking-[0.25em]
    mb-3
  "
          >
            Details
          </p>

          {/* Travel Preferences */}
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <select
              name="vehicle"
              value={form.vehicle}
              onChange={handleChange}
              className="p-4 rounded-2xl bg-white"
            >
              <option>Sedan</option>
              <option>SUV</option>
              <option>Tempo Traveller</option>
              <option>No Preference</option>
            </select>

            <input
              name="trainNumber"
              value={form.trainNumber}
              placeholder="Train Number (Optional)"
              onChange={handleChange}
              className="p-4 rounded-2xl bg-white"
            />

            <div className="relative">
              <span
                className="
      absolute
      left-4
      top-2
      text-[10px]
      uppercase
      tracking-[0.15em]
      text-[#1E3A5F]/50
      pointer-events-none
    "
              >
                {transferType === 'pickup' ? 'Arrival Time' : 'Departure Time'}
              </span>

              <input
                type="time"
                name="transferTime"
                value={form.transferTime}
                onChange={handleChange}
                className="
      w-full
      pt-7
      pb-2
      px-4
      rounded-2xl
      bg-white
    "
              />
            </div>
          </div>

          {/* Customer Details */}
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <input
              name="name"
              value={form.name}
              placeholder="Name"
              onChange={handleChange}
              className="p-4 rounded-2xl"
            />

            <input
              name="phone"
              value={form.phone}
              placeholder="Phone Number"
              onChange={handleChange}
              className="p-4 rounded-2xl"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-10">
            <div className="relative w-full min-w-0">
              <span
                className="
        absolute
        left-4
        top-2
        text-[10px]
        uppercase
        tracking-[0.15em]
        text-[#1E3A5F]/50
      "
              >
                Travel Date
              </span>

              <input
                type="date"
                value={form.date}
                name="date"
                onChange={handleChange}
                className="
        p-4
        pt-7
        rounded-2xl
        bg-white
        w-full
      "
              />
            </div>

            <input
              name="passengers"
              value={form.passengers}
              placeholder="Passengers"
              onChange={handleChange}
              className="p-4 rounded-2xl"
            />
          </div>

          <button
            onClick={handleWhatsapp}
            className="
            w-full
            py-4
            rounded-2xl
            bg-[#5BC0BE]
            text-white
            uppercase
            tracking-[0.2em]
          "
          >
            Get Quote on Whatsapp
          </button>
        </div>
      </div>
    </main>
  )
}
