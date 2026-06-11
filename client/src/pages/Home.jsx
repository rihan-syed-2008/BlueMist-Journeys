import Hero from '../components/sections/Hero'
import Packages from '../components/sections/Packages'
import CustomBuilder from '../components/sections/CustomBuilder'
import Fleet from '../components/sections/Fleet'
import About from '../components/sections/About'
import Contact from '../components/sections/Contact'
import Footer from '../components/layout/Footer'
import PathSelector from '../components/sections/PathSelector'

export default function Home() {
  return (
    <>
      <Hero />
      <PathSelector />
      <Packages />
      <CustomBuilder />
      <Fleet />
      <About />
      <Contact />
      <Footer />
    </>
  )
}
