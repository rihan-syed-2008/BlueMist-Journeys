import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function RailwayTransfer() {
  const [journeyType, setJourneyType] = useState('oneway')
  const [returnEdited, setReturnEdited] = useState(false)
  const navigate = useNavigate()

  const locations = [
    'Ooty',
    'Coonoor',
    'Kotagiri',
    'Masinagudi',
    'Gudalur',
    'Avalanche',
    'Pykara',
    'Emerald',
    'Ketti Valley',
    'Mettupalayam',
    'Coimbatore',
    'Mysore',
    'Bangalore',
    'Chennai',
    'Cochin',
  ]

  const emptyForm = {
    fromLocation: '',
    toLocation: '',
    returnFrom: '',
    returnTo: '',
    vehicle: 'No Preference',
    transferTime: '',
    name: '',
    phone: '',
    date: '',
    passengers: '',
  }
  const [form, setForm] = useState(emptyForm)

  const handleChange = (e) => {
    const { name, value } = e.target

    setForm((prev) => {
      const updated = {
        ...prev,
        [name]: value,
      }

      if (journeyType === 'twoway' && !returnEdited) {
        if (name === 'fromLocation') {
          updated.returnTo = value
        }

        if (name === 'toLocation') {
          updated.returnFrom = value
        }
      }

      return updated
    })
  }

  const swapLocations = () => {
    setForm((prev) => ({
      ...prev,
      fromLocation: prev.toLocation,
      toLocation: prev.fromLocation,

      returnFrom: prev.fromLocation,
      returnTo: prev.toLocation,
    }))
  }

  const handleWhatsapp = () => {
    if (
      !form.fromLocation ||
      !form.toLocation ||
      !form.name ||
      !form.phone ||
      !form.date
    ) {
      alert('Please complete all required fields before booking.')
      return
    }
    if (
      form.fromLocation.trim().toLowerCase() ===
      form.toLocation.trim().toLowerCase()
    ) {
      alert('From and To locations cannot be the same.')
      return
    }
    if (
      journeyType === 'twoway' &&
      form.returnFrom.trim().toLowerCase() ===
        form.returnTo.trim().toLowerCase()
    ) {
      alert('Return From and Return To locations cannot be the same.')
      return
    }
    if (journeyType === 'twoway' && (!form.returnFrom || !form.returnTo))
      if (!/^\d{10}$/.test(form.phone)) {
        alert('Please enter a valid 10-digit phone number.')
        return
      }
    if (!form.transferTime) {
      alert('Please enter travel time.')
      return
    }
    const message = `
Point-to-Point Transfer Request

Journey: ${journeyType === 'oneway' ? 'One Way' : 'Round Trip'}

From: ${form.fromLocation}
To: ${form.toLocation}

${
  journeyType === 'twoway'
    ? `
Return From: ${form.returnFrom}
Return To: ${form.returnTo}
`
    : ''
}

Vehicle Preference: ${form.vehicle}
Travel Time: ${form.transferTime}

Date: ${form.date}
Passengers: ${form.passengers}

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
              Point-to-Point Travel
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
              Flexible travel between destinations across the
              Nilgiris and South India.
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

                setForm((prev) => ({
                  ...prev,
                  returnFrom: prev.toLocation,
                  returnTo: prev.fromLocation,
                }))
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
            Journey Route
          </p>

          <div className="grid md:grid-cols-[1fr_auto_1fr] gap-4 items-center mb-8">
            <input
              list="locations"
              name="fromLocation"
              value={form.fromLocation}
              onChange={handleChange}
              placeholder="From Location"
              className="w-full p-4 rounded-2xl"
            />

            <button
              type="button"
              onClick={swapLocations}
              className="
      text-2xl
      text-[#5BC0BE]
      hover:scale-110
      transition-all
    "
            >
              ⇄
            </button>

            <input
              list="locations"
              name="toLocation"
              value={form.toLocation}
              onChange={handleChange}
              placeholder="To Location"
              className="w-full p-4 rounded-2xl"
            />
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
                <input
                  list="locations"
                  name="returnFrom"
                  value={form.returnFrom}
                  onChange={(e) => {
                    setReturnEdited(true)
                    handleChange(e)
                  }}
                  placeholder="Return From"
                  className="w-full p-4 rounded-2xl bg-white"
                />
                <button
                  type="button"
                  onClick={swapLocations}
                  className="
      text-2xl
      text-[#5BC0BE]
      hover:scale-110
      transition-all
    "
                >
                  ⇄
                </button>
                <input
                  list="locations"
                  name="returnTo"
                  value={form.returnTo}
                  onChange={(e) => {
                    setReturnEdited(true)
                    handleChange(e)
                  }}
                  placeholder="Return To"
                  className="w-full p-4 rounded-2xl bg-white"
                />
              </div>
            </>
          )}

          <datalist id="locations">
            {locations.map((location) => (
              <option key={location} value={location} />
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
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <select
              name="vehicle"
              value={form.vehicle}
              onChange={(e) => {
                setReturnEdited(true)
                handleChange(e)
              }}
              className="p-4 rounded-2xl bg-white"
            >
              <option>Sedan</option>
              <option>SUV</option>
              <option>Tempo Traveller</option>
              <option>No Preference</option>
            </select>

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
                Travel Time
              </span>

              <input
                type="time"
                name="transferTime"
                value={form.transferTime}
                onChange={(e) => {
                  setReturnEdited(true)
                  handleChange(e)
                }}
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
              onChange={(e) => {
                setReturnEdited(true)
                handleChange(e)
              }}
              className="p-4 rounded-2xl"
            />

            <input
              name="phone"
              value={form.phone}
              placeholder="Phone Number"
              onChange={(e) => {
                setReturnEdited(true)
                handleChange(e)
              }}
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
                onChange={(e) => {
                  setReturnEdited(true)
                  handleChange(e)
                }}
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
              onChange={(e) => {
                setReturnEdited(true)
                handleChange(e)
              }}
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
