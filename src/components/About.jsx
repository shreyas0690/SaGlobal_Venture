import { useEffect, useRef, useState } from 'react'

const steps = [
  { num: '01', title: 'Timber Supply', desc: 'We supply premium pine timber sourced through reliable channels, ensuring uniform grading and regular availability for bulk and ongoing requirements.' },
  { num: '02', title: 'Sawmill & Custom Sizes', desc: 'With in-house sawmill facilities, we cut timber into customized sizes including planks and sleepers as per client specifications.' },
  { num: '03', title: 'Packaging & Delivery', desc: 'We also provide wooden packaging solutions and coordinate bulk logistics to ensure safe and timely delivery across India.' },
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
    const targets = { years: 30, projects: 480, clients: 1200, awards: 15 }
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
            <h2 className="section-title">Reliable Timber Solutions for Indian Industry</h2>
            <p className="about__desc">
              S.A Global Venture is an India-focused timber company engaged in premium pine timber supply, in-house sawmill processing, and wooden packaging solutions. Our operations are built on over 100 years of generational involvement in the timber business, including trade in jungle wood and durable hardwood species alongside imported pine.
              <br/><br/>
              We support manufacturers, builders, and traders with consistent grading, accurate CFT, and reliable supply across India.
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
          </div>
        </div>

      </div>
    </section>
  )
}
