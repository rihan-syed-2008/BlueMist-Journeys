import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Packages from './components/Packages'
import PackageDetail from './components/PackageDetail'
import CustomBuilder from './components/CustomBuilder'
import Fleet from './components/Fleet'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Explore from './pages/Explore'
import ExploreDestination from './pages/ExploreDestination'
import AllPackages from './pages/AllPackages'

import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

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
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Packages />
              <CustomBuilder />
              <Fleet />
              <About />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route path="/package/:id" element={<PackageDetail />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/explore/:id" element={<ExploreDestination />} />
        <Route path="/packages" element={<AllPackages />} />
      </Routes>
    </div>
  )
}

export default App
