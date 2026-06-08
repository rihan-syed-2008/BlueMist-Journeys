import { useState, useEffect } from 'react'

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

const MobileSectionHeader = ({ title, isOpen, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className="
      md:hidden
      w-full
      flex
      items-center
      justify-between
      py-4
      border-b
      border-white/10
    "
  >
    <span
      style={{
        color: isOpen ? 'var(--teal)' : 'white',
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: '1.3rem',
        fontWeight: 300,
      }}
    >
      {title}
    </span>

    <span
      style={{
        color: 'var(--teal)',
        fontSize: '1.5rem',
      }}
    >
      {isOpen ? '−' : '+'}
    </span>
  </button>
)

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

  const [mobileSections, setMobileSections] = useState({
    basics: true,
    destinations: false,
    preferences: false,
  })

  const toggleSection = (section) => {
    setMobileSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  useEffect(() => {
    const handleVehicleSelect = (event) => {
      setVehicle(event.detail)
    }

    window.addEventListener('vehicleSelected', handleVehicleSelect)

    return () => {
      window.removeEventListener('vehicleSelected', handleVehicleSelect)
    }
  }, [])

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
    padding: '18px 20px',
    backgroundColor: 'rgba(255,255,255,0.96)',
    border: '1px solid rgba(30,58,95,0.12)',
    borderRadius: '16px',
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
        padding: '12px 22px',
        fontFamily: "'DM Sans', sans-serif",
        fontSize: '0.85rem',
        backgroundColor:
          current === val || (Array.isArray(current) && current.includes(val))
            ? 'var(--teal)'
            : 'transparent',
        color:
          current === val || (Array.isArray(current) && current.includes(val))
            ? 'white'
            : 'rgba(255,255,255,0.78)',
        border: '1px solid rgba(255,255,255,0.18)',
        borderRadius: '999px',
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
      style={{ backgroundColor: 'var(--cream)' }}
    >
      <div
        className="
    max-w-6xl mx-auto
    rounded-[40px]
    px-8 md:px-16
    py-16 md:py-20
    shadow-[0_40px_120px_rgba(15,23,42,0.16)]
  "
        style={{
          backgroundColor: 'var(--navy)',
        }}
      >
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
              fontSize: 'clamp(2.3rem, 4vw, 4rem)',
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

        {/* MOBILE ACCORDION */}

        <div className="md:hidden">
          {/* BASICS */}
          <MobileSectionHeader
            title="Trip Basics"
            isOpen={mobileSections.basics}
            onClick={() => toggleSection('basics')}
          />

          {mobileSections.basics && (
            <div className="pt-6 space-y-8">
              {/* Pickup */}
              <div className="relative">
                <label style={labelStyle}>Pickup Location</label>
                <input
                  type="text"
                  placeholder="Start typing your pickup point..."
                  value={pickup}
                  onChange={(e) => handlePickupChange(e.target.value)}
                  onBlur={() =>
                    setTimeout(() => setShowSuggestions(false), 300)
                  }
                  style={inputStyle}
                />
                {showSuggestions && suggestions.length > 0 && (
                  <div
                    style={{
                      backgroundColor: 'white',
                      border: '1px solid rgba(30,58,95,0.12)',
                      borderTop: 'none',
                      maxHeight: '180px',
                      overflowY: 'auto',
                      borderRadius: '0 0 16px 16px',
                    }}
                  >
                    {suggestions.map((s) => (
                      <div
                        key={s}
                        onClick={() => {
                          setPickup(s)
                          setShowSuggestions(false)
                        }}
                        className="px-4 py-3 cursor-pointer"
                        style={{
                          fontFamily: "'DM Sans', sans-serif",
                          color: 'var(--navy)',
                        }}
                      >
                        {s}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Drop */}
              <div className="relative">
                <label style={labelStyle}>Drop Point</label>
                <input
                  type="text"
                  placeholder="Where should we drop you?"
                  value={dropoff}
                  onChange={(e) => handleDropoffChange(e.target.value)}
                  style={inputStyle}
                />
                {showDropSuggestions && dropSuggestions.length > 0 && (
                  <div
                    style={{
                      backgroundColor: 'white',
                      border: '1px solid rgba(30,58,95,0.12)',
                      borderTop: 'none',
                      maxHeight: '180px',
                      overflowY: 'auto',
                      borderRadius: '0 0 16px 16px',
                    }}
                  >
                    {dropSuggestions.map((s) => (
                      <div
                        key={s}
                        onClick={() => {
                          setDropoff(s)
                          setShowDropSuggestions(false)
                        }}
                        className="px-4 py-3 cursor-pointer"
                        style={{
                          fontFamily: "'DM Sans', sans-serif",
                          color: 'var(--navy)',
                        }}
                      >
                        {s}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Duration */}
              <div>
                <label style={labelStyle}>Trip Duration</label>
                <div className="flex flex-wrap gap-3">
                  {['1 Day', '2 Days 1 Night', '3 Days 2 Nights'].map((d) =>
                    optionBtn(d, duration, setDuration)
                  )}
                  <input
                    type="text"
                    placeholder="Or type custom e.g. 4 Days 3 Nights"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    style={{
                      ...inputStyle,
                      marginTop: '12px',
                    }}
                  />
                </div>
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
            </div>
          )}

          {/* DESTINATIONS */}

          <MobileSectionHeader
            title="Destinations"
            isOpen={mobileSections.destinations}
            onClick={() => toggleSection('destinations')}
          />

          {mobileSections.destinations && (
            <div className="pt-6">
              <label style={labelStyle}>Destinations</label>

              <div className="flex flex-wrap gap-3 mb-6">
                {['Coonoor', 'Ooty', 'Kotagiri', 'Masinagudi'].map((d) =>
                  optionBtn(d, destinations, toggleDestination)
                )}
              </div>

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
                          border: '1px solid rgba(255,255,255,0.19)',
                          backgroundColor: selectedPlaces.includes(place)
                            ? 'var(--teal)'
                            : 'transparent',
                          color: selectedPlaces.includes(place)
                            ? 'white'
                            : 'rgba(255,255,255,0.8)',
                        }}
                      >
                        {place}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* PREFERENCES */}

          <MobileSectionHeader
            title="Preferences"
            isOpen={mobileSections.preferences}
            onClick={() => toggleSection('preferences')}
          />

          {mobileSections.preferences && (
            <div className="pt-6 space-y-8">
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

              <div>
                <label style={labelStyle}>Stay Required?</label>
                <div className="flex flex-wrap gap-3">
                  {['Yes', 'No'].map((d) =>
                    optionBtn(d, stayRequired, setStayRequired)
                  )}
                </div>
              </div>

              <div>
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

              <div>
                <label style={labelStyle}>Special Requests</label>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  rows={3}
                  style={{ ...inputStyle, resize: 'none' }}
                />
              </div>
            </div>
          )}
        </div>

        {/* Form Grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-12">
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
                        border: '1px solid rgba(255,255,255,0.19)',
                        backgroundColor: selectedPlaces.includes(place)
                          ? 'var(--teal)'
                          : 'transparent',
                        color: selectedPlaces.includes(place)
                          ? 'white'
                          : 'rgba(255,255,255,0.8)',
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
            className="px-14 py-5
              rounded-full
              text-sm
              tracking-[0.28em]
              uppercase
              transition-all duration-500
              hover:-translate-y-[2px]"
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
            Your selections will be sent directly to our WhatsApp. We'll reach
            out to you soon.
          </p>
        </div>
      </div>
    </section>
  )
}
