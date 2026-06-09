import { Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Explore from './pages/Explore'
import ExploreDestination from './pages/ExploreDestination'
import AllPackages from './pages/AllPackages'
import PackageDetail from './pages/PackageDetail'
import Home from './pages/Home'

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
        <Route path="/packages" element={<AllPackages />} />
      </Routes>
    </div>
  )
}

export default App
