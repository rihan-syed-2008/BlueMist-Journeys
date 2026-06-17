import { useEffect, useState } from 'react'
import { HERO_CONFIG } from '../utils/heroConfig'

export default function useHeroReveal(sectionRef) {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [introComplete, setIntroComplete] = useState(() => {
    return sessionStorage.getItem('bluemist-intro-complete') === 'true'
  })

  const [introFading, setIntroFading] = useState(false)

useEffect(() => {
  if (introComplete) return

  const fadeTimer = setTimeout(() => {
    setIntroFading(true)
  }, 800)

  const completeTimer = setTimeout(() => {
    sessionStorage.setItem('bluemist-intro-complete', 'true')
    setIntroComplete(true)
  }, 1800)

  return () => {
    clearTimeout(fadeTimer)
    clearTimeout(completeTimer)
  }
}, [introComplete])

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        if (!sectionRef.current) return

        const rect = sectionRef.current.getBoundingClientRect()

        const sectionHeight =
          sectionRef.current.offsetHeight - window.innerHeight

        const scrolled = -rect.top

        const progress = Math.min(Math.max(scrolled / sectionHeight, 0), 1)

        setScrollProgress(progress)

        // Mist permanently disappears
        if (progress > HERO_CONFIG.revealStart && !introComplete) {
          sessionStorage.setItem('bluemist-intro-complete', 'true')
          setIntroComplete(true)
        }
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [sectionRef, introComplete])

  return {
    scrollProgress,
    introComplete,
    introFading
  }
}
