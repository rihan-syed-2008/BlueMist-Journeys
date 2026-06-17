import { Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Explore from './pages/Explore'
import ExploreDestination from './pages/ExploreDestination'
import Journeys from './pages/Journeys'
import PackageDetail from './pages/PackageDetail'
import Home from './pages/Home'

import Transfers from './pages/Transfers'
import CustomTrip from './pages/CustomTrip'
import About from './pages/About'
import Contact from './pages/Contact'

import AirportTransfer from './pages/transfers/AirportTransfer'
import RailwayTransfer from './pages/transfers/RailwayTransfer'
import PointToPointTransfer from './pages/transfers/PointToPointTransfer'

import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import ReactGA from 'react-ga4'

function AnalyticsTracker() {
  const location = useLocation()

  useEffect(() => {
    ReactGA.send({
      hitType: 'pageview',
      page: location.pathname + location.search,
    })
  }, [location])

  return null
}

function ScrollToHash() {
  const location = useLocation()

  useEffect(() => {
    const section = sessionStorage.getItem('scrollTo')
    if (section) {
      sessionStorage.removeItem('scrollTo')
      setTimeout(() => {
        const el = document.getElementById(section)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    }
  }, [])

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '')
      setTimeout(() => {
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    }
  }, [location])

  return null
}

function App() {
  return (
    <div>
      <Navbar />
      <ScrollToHash />
      <AnalyticsTracker />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/package/:id" element={<PackageDetail />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/explore/:id" element={<ExploreDestination />} />
        <Route path="/journeys" element={<Journeys />} />
        <Route path="/transfers" element={<Transfers />} />
        <Route path="/transfers/airport" element={<AirportTransfer />} />
        <Route path="/transfers/railway" element={<RailwayTransfer />} />
        <Route path="/transfers/point-to-point" element={<PointToPointTransfer />} />
        <Route path="/custom-trip" element={<CustomTrip />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App
