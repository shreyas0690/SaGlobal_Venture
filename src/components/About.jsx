import { useEffect, useRef, useState } from 'react'

const steps = [
  { num: '01', title: 'Harvesting', desc: 'We carefully select and harvest timber from sustainably managed forests, ensuring minimal environmental impact.' },
  { num: '02', title: 'Manufacturing', desc: 'Our state-of-the-art sawmill processes raw timber into premium lumber products with precision and care.' },
]

export default function About() {
  const sectionRef = useRef(null)
  const [counters, setCounters] = useState({ years: 0, projects: 0, clients: 0, awards: 0 })
  const counted = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !counted.current) {
            counted.current = true
            animateCounters()
          }
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in')
          }
        })
      },
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => { if (sectionRef.current) observer.unobserve(sectionRef.current) }
  }, [])

  const animateCounters = () => {
    const targets = { years: 25, projects: 480, clients: 1200, awards: 15 }
    const duration = 2000
    const start = Date.now()
    const tick = () => {
      const elapsed = Date.now() - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCounters({
        years: Math.round(targets.years * eased),
        projects: Math.round(targets.projects * eased),
        clients: Math.round(targets.clients * eased),
        awards: Math.round(targets.awards * eased),
      })
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }

  return (
    <section id="about" className="about" ref={sectionRef}>
      <div className="container">
        <div className="about__grid">
          <div className="about__image-col">
            <div className="about__image-wrapper">
              <img src="/images/about-owner.png" alt="Peter Bowman - Sawmill Owner" loading="lazy" />
              <div className="about__image-badge">
                <span className="about__badge-number">{counters.years}+</span>
                <span className="about__badge-text">Years of<br/>Experience</span>
              </div>
            </div>
          </div>

          <div className="about__content-col">
            <span className="section-tag">About Us</span>
            <h2 className="section-title">Responsible forestry & quality timber</h2>
            <p className="about__desc">
              We are a premier timber company committed to sustainable forestry practices 
              and delivering the highest quality wood products. Our team of experienced 
              professionals ensures every piece of timber meets rigorous standards.
            </p>

            <div className="about__steps">
              {steps.map((step, i) => (
                <div key={i} className="about__step">
                  <span className="about__step-num">{step.num}</span>
                  <div>
                    <h4 className="about__step-title">{step.title}</h4>
                    <p className="about__step-desc">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <a href="#services" className="btn btn--primary">Our Services</a>
          </div>
        </div>

        {/* Stats */}
        <div className="about__stats">
          <div className="about__stat">
            <span className="about__stat-number">{counters.years}+</span>
            <span className="about__stat-label">Years Experience</span>
          </div>
          <div className="about__stat">
            <span className="about__stat-number">{counters.projects}+</span>
            <span className="about__stat-label">Projects Completed</span>
          </div>
          <div className="about__stat">
            <span className="about__stat-number">{counters.clients}+</span>
            <span className="about__stat-label">Happy Clients</span>
          </div>
          <div className="about__stat">
            <span className="about__stat-number">{counters.awards}</span>
            <span className="about__stat-label">Industry Awards</span>
          </div>
        </div>
      </div>
    </section>
  )
}
