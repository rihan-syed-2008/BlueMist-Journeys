import { useState } from 'react'

const pickupSuggestions = [
  'Coimbatore Airport',
  'Coimbatore Railway Station',
  'Coimbatore Bus Stand',
  'Salem Railway Station',
  'Salem Bus Stand',
  'Chennai Airport',
  'Chennai Central Railway Station',
  'Bangalore Airport',
  'Bangalore City Railway Station',
  'Mettupalayam Railway Station',
  'Mettupalayam Bus Stand',
  'Pollachi Bus Stand',
  'Erode Railway Station',
  'Tiruppur Bus Stand',
  'Mysore Railway Station',
  'Ooty Bus Stand',
  'Coonoor Bus Stand',
  'Kotagiri Bus Stand',
]

export default function CustomBuilder() {
  const [pickup, setPickup] = useState('')
  const [suggestions, setSuggestions] = useState([])
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [destinations, setDestinations] = useState([])
  const [duration, setDuration] = useState('')
  const [groupSize, setGroupSize] = useState('')
  const [vehicle, setVehicle] = useState('')
  const [stayRequired, setStayRequired] = useState('')
  const [budget, setBudget] = useState('')
  const [date, setDate] = useState('')
  const [notes, setNotes] = useState('')
  const [selectedPlaces, setSelectedPlaces] = useState([])
  const [dropoff, setDropoff] = useState('')
  const [dropSuggestions, setDropSuggestions] = useState([])
  const [showDropSuggestions, setShowDropSuggestions] = useState(false)
  const togglePlace = (place) =>
    setSelectedPlaces((prev) =>
      prev.includes(place) ? prev.filter((p) => p !== place) : [...prev, place]
    )

  const destinationPlaces = {
    Coonoor: [
      "Sim's Park",
      "Lamb's Rock",
      "Dolphin's Nose",
      "Law's Falls",
      'Highfield Tea Factory',
    ],
    Ooty: [
      'Botanical Garden',
      'Ooty Lake',
      'Doddabetta Peak',
      'Rose Garden',
      'Thread Garden',
    ],
    Kotagiri: [
      'Kotagiri Viewpoint',
      'Catherine Falls',
      'Kodanad Viewpoint',
      'Rangaswamy Peak',
    ],
    Masinagudi: [
      'Mudumalai Tiger Reserve',
      'Elephant Sighting Zones',
      'Bokkapuram',
      'Theppakadu',
    ],
  }

  const handleDropoffChange = (val) => {
    setDropoff(val)
    if (val.length > 1) {
      const filtered = pickupSuggestions.filter((s) =>
        s.toLowerCase().includes(val.toLowerCase())
      )
      setDropSuggestions(filtered)
      setShowDropSuggestions(true)
    } else {
      setShowDropSuggestions(false)
    }
  }

  const handlePickupChange = (val) => {
    setPickup(val)
    if (val.length > 1) {
      const filtered = pickupSuggestions.filter((s) =>
        s.toLowerCase().includes(val.toLowerCase())
      )
      setSuggestions(filtered)
      setShowSuggestions(true)
    } else {
      setShowSuggestions(false)
    }
  }

  const toggleDestination = (dest) => {
    setDestinations((prev) =>
      prev.includes(dest) ? prev.filter((d) => d !== dest) : [...prev, dest]
    )
  }

  const handleWhatsApp = () => {
    if (!pickup || destinations.length === 0 || !duration || !groupSize) {
      alert(
        'Please fill in at least: Pickup, Destinations, Duration and Group Size.'
      )
      return
    }
    const message = encodeURIComponent(
      `Hi BlueMist! I'd like to plan a custom trip.

Pickup: ${pickup}
Drop: ${dropoff || 'Same as pickup'}
Destinations: ${destinations.join(', ')}
Places: ${
        destinations.length > 0
          ? destinations
              .map((dest) => {
                const destPlaces = selectedPlaces.filter((p) =>
                  destinationPlaces[dest]?.includes(p)
                )
                return destPlaces.length > 0
                  ? `${dest}: ${destPlaces.join(', ')}`
                  : dest
              })
              .join(' | ')
          : 'Not specified'
      }
Duration: ${duration}
Group Size: ${groupSize}
Vehicle: ${vehicle || 'Not specified'}
Stay Required: ${stayRequired || 'Not specified'}
Budget: ${budget || 'Not specified'}
Travel Date: ${date || 'Not specified'}
Special Requests: ${notes || 'None'}

Please share availability and pricing. Thank you!`
    )
    window.open(`https://wa.me/917200969889?text=${message}`, '_blank')

    setPickup('')
    setDestinations([])
    setSelectedPlaces([])
    setDuration('')
    setGroupSize('')
    setVehicle('')
    setStayRequired('')
    setBudget('')
    setDate('')
    setNotes('')
    setDropoff('')
    setShowSuggestions(false)
  }

  const labelStyle = {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: '0.75rem',
    letterSpacing: '0.2em',
    textTransform: 'uppercase',
    color: 'var(--teal)',
    marginBottom: '10px',
    display: 'block',
  }

  const inputStyle = {
    width: '100%',
    padding: '12px 16px',
    backgroundColor: 'white',
    border: '1px solid rgba(30,58,95,0.12)',
    fontFamily: "'DM Sans', sans-serif",
    fontSize: '0.95rem',
    color: 'var(--navy)',
    outline: 'none',
  }

  const optionBtn = (val, current, onClick) => (
    <button
      key={val}
      onClick={() => onClick(current === val ? '' : val)}
      style={{
        padding: '10px 20px',
        fontFamily: "'DM Sans', sans-serif",
        fontSize: '0.85rem',
        backgroundColor:
          current === val || (Array.isArray(current) && current.includes(val))
            ? 'var(--teal)'
            : 'transparent',
        color:
          current === val || (Array.isArray(current) && current.includes(val))
            ? 'white'
            : 'rgba(255,255,255,0.6)',
        border: '1px solid rgba(255,255,255,0.15)',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
      }}
    >
      {val}
    </button>
  )

  return (
    <section
      id="custom"
      className="py-24 px-6"
      style={{ backgroundColor: 'var(--navy)' }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="text-xs tracking-[0.4em] uppercase mb-4"
            style={{
              color: 'var(--teal)',
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            Tailor Made For You
          </p>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              fontWeight: 300,
              color: 'white',
            }}
          >
            Build Your Journey
          </h2>
          <p
            className="mt-4 max-w-lg mx-auto"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '0.95rem',
              color: 'rgba(255,255,255,0.5)',
              lineHeight: 1.8,
            }}
          >
            Tell us what you have in mind. We'll take care of the rest.
          </p>
        </div>

        {/* Form Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Pickup */}
          <div className="md:col-span-2 relative">
            <label style={labelStyle}>Pickup Location</label>
            <input
              type="text"
              placeholder="Start typing your pickup point..."
              value={pickup}
              onChange={(e) => handlePickupChange(e.target.value)}
              onBlur={() => setTimeout(() => setShowSuggestions(false), 300)}
              style={inputStyle}
            />
            {showSuggestions && suggestions.length > 0 && (
              <div
                className="absolute z-50 w-full"
                style={{
                  backgroundColor: 'white',
                  border: '1px solid rgba(30,58,95,0.12)',
                  borderTop: 'none',
                  maxHeight: '200px',
                  overflowY: 'auto',
                }}
              >
                {suggestions.map((s) => (
                  <div
                    key={s}
                    className="px-4 py-3 cursor-pointer hover:bg-gray-50"
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: '0.9rem',
                      color: 'var(--navy)',
                    }}
                    onClick={() => {
                      setPickup(s)
                      setShowSuggestions(false)
                    }}
                  >
                    {s}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="md:col-span-2 relative">
            <label style={labelStyle}>Drop Point</label>
            <input
              type="text"
              placeholder="Where should we drop you?"
              value={dropoff}
              onChange={(e) => handleDropoffChange(e.target.value)}
              onBlur={() =>
                setTimeout(() => setShowDropSuggestions(false), 300)
              }
              style={inputStyle}
            />
            {showDropSuggestions && dropSuggestions.length > 0 && (
              <div
                className="absolute z-50 w-full"
                style={{
                  backgroundColor: 'white',
                  border: '1px solid rgba(30,58,95,0.12)',
                  borderTop: 'none',
                  maxHeight: '200px',
                  overflowY: 'auto',
                }}
              >
                {dropSuggestions.map((s) => (
                  <div
                    key={s}
                    className="px-4 py-3 cursor-pointer hover:bg-gray-50"
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: '0.9rem',
                      color: 'var(--navy)',
                    }}
                    onClick={() => {
                      setDropoff(s)
                      setShowDropSuggestions(false)
                    }}
                  >
                    {s}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Destinations */}
          <div className="md:col-span-2">
            <label style={labelStyle}>Destinations</label>
            <div className="flex flex-wrap gap-3 mb-6">
              {['Coonoor', 'Ooty', 'Kotagiri', 'Masinagudi'].map((d) =>
                optionBtn(d, destinations, toggleDestination)
              )}
            </div>

            {/* Places per selected destination */}
            {destinations.map((dest) => (
              <div key={dest} className="mb-6">
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '0.75rem',
                    color: 'rgba(255,255,255,0.4)',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    marginBottom: '10px',
                  }}
                >
                  {dest} — Select places
                </p>
                <div className="flex flex-wrap gap-3">
                  {destinationPlaces[dest].map((place) => (
                    <button
                      key={place}
                      onClick={() => togglePlace(place)}
                      style={{
                        padding: '8px 16px',
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: '0.82rem',
                        border: '1px solid rgba(255,255,255,0.15)',
                        backgroundColor: selectedPlaces.includes(place)
                          ? 'var(--teal)'
                          : 'transparent',
                        color: selectedPlaces.includes(place)
                          ? 'white'
                          : 'rgba(255,255,255,0.6)',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                      }}
                    >
                      {place}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
          {/* Duration */}
          <div>
            <label style={labelStyle}>Trip Duration</label>
            <div className="flex flex-wrap gap-3 mb-3">
              {['1 Day', '2 Days 1 Night', '3 Days 2 Nights'].map((d) =>
                optionBtn(d, duration, setDuration)
              )}
            </div>
            <input
              type="text"
              placeholder="Or type custom e.g. 4 Days 3 Nights"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              style={inputStyle}
            />
          </div>

          {/* Group Size */}
          <div>
            <label style={labelStyle}>Group Size</label>
            <div className="flex flex-wrap gap-3">
              {['1-2', '3-4', '5-6', '7+'].map((d) =>
                optionBtn(d, groupSize, setGroupSize)
              )}
            </div>
          </div>

          {/* Vehicle */}
          <div>
            <label style={labelStyle}>Vehicle Preference</label>
            <div className="flex flex-wrap gap-3">
              {[
                'Swift Dzire',
                'Toyota Etios',
                'Innova Crysta',
                'Tempo Traveller',
              ].map((d) => optionBtn(d, vehicle, setVehicle))}
            </div>
          </div>

          {/* Stay */}
          <div>
            <label style={labelStyle}>Stay Required?</label>
            <div className="flex gap-3">
              {['Yes', 'No'].map((d) =>
                optionBtn(d, stayRequired, setStayRequired)
              )}
            </div>
          </div>

          {/* Budget */}
          <div className="md:col-span-2">
            <label style={labelStyle}>Budget Range</label>
            <div className="flex flex-wrap gap-3">
              {[
                'Under ₹2,000',
                '₹2,000 - ₹5,000',
                '₹5,000 - ₹10,000',
                'Above ₹10,000',
              ].map((d) => optionBtn(d, budget, setBudget))}
            </div>
          </div>

          {/* Date */}
          <div>
            <label style={labelStyle}>Travel Date</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              style={inputStyle}
            />
          </div>

          {/* Special Requests */}
          <div>
            <label style={labelStyle}>Special Requests</label>
            <textarea
              placeholder="Elderly parents, vegetarian food, photography stops..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={3}
              style={{ ...inputStyle, resize: 'none' }}
            />
          </div>
        </div>

        {/* Submit */}
        <div className="mt-12 text-center">
          <button
            onClick={handleWhatsApp}
            className="px-12 py-4 text-sm tracking-widest uppercase font-light text-white transition-all duration-300 hover:opacity-80 hover:scale-105"
            style={{ backgroundColor: 'var(--teal)' }}
          >
            Send to WhatsApp
          </button>
          <p
            className="mt-4"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '0.8rem',
              color: 'rgba(255,255,255,0.3)',
            }}
          >
            Your selections will be sent directly to our WhatsApp. We'll respond
            within 2 hours.
          </p>
        </div>
      </div>
    </section>
  )
}
