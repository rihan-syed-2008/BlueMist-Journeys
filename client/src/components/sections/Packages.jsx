import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { packages } from '../../data/packages'
import SectionHeader from '../ui/SectionHeader'
import Container from '../ui/Container'
import Section from '../ui/Section'
import PackageCard from '../package/PackageCard'

export default function Packages() {
  const [visible, setVisible] = useState(false)
  const sectionRef = useRef(null)
  const navigate = useNavigate()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <Section id="packages" innerRef={sectionRef} background="bg-cream">
      <Container>
        <div className="flex items-center justify-between mb-1">
          <div className="shrink-0">
            <SectionHeader
              eyebrow="Curated Experiences"
              title="Our Journeys"
              align="left"
            />

            <div className="mt-10 mb-10 flex justify-center md:hidden">
    <button
      onClick={() => navigate('/packages')}
      className="
        px-7 py-3
        rounded-full
        text-[11px]
        uppercase
        tracking-[0.28em]
      "
      style={{
        color: 'var(--navy)',
        border: '1px solid rgba(30,58,95,0.18)',
        background: 'rgba(255,255,255,0.55)',
      }}
    >
      View All Journeys →
    </button>
  </div>
          </div>

          <button
            onClick={() => navigate('/packages')}
            className="hidden md:flex items-center justify-center px-7 py-3 text-[11px] uppercase tracking-[0.28em] transition-all duration-300 rounded-full"
            style={{
              color: 'var(--navy)',
              border: '1px solid rgba(30,58,95,0.18)',
              background: 'rgba(255,255,255,0.55)',
              backdropFilter: 'blur(10px)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--navy)'
              e.currentTarget.style.color = 'white'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.55)'
              e.currentTarget.style.color = 'var(--navy)'
            }}
          >
            View All Journeys →
          </button>
        </div>
      </Container>

      {/* Cards Grid */}
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {packages.map((pkg, index) => (
            <div key={pkg.id} className={index === 2 ? 'hidden md:block' : ''}>
              <PackageCard pkg={pkg} index={index} visible={visible} />
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
