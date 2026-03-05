import { useEffect, useRef } from 'react'

const clients = [
  { name: 'LG Electronics', logo: '/images/lg.jpg' },
  { name: 'Pyramid Timber', logo: '/images/PyRAMID.webp' },
  { name: 'Priya Gold', logo: '/images/Revised_Priya_Gold_Logo.webp' },
  { name: 'KK Rubber', logo: '/images/kk_rubber.jpg' },
]

export default function ClientsShowcase() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('cs-visible')
          }
        })
      },
      { threshold: 0.15 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => { if (sectionRef.current) observer.unobserve(sectionRef.current) }
  }, [])

  // Triple the logos for seamless infinite scroll
  const marqueeLogos = [...clients, ...clients, ...clients]

  return (
    <section className="cs" ref={sectionRef}>
      {/* Background decorations */}
      <div className="cs__bg-glow cs__bg-glow--1"></div>
      <div className="cs__bg-glow cs__bg-glow--2"></div>
      <div className="cs__bg-lines">
        {[...Array(5)].map((_, i) => <div key={i} className="cs__bg-line" />)}
      </div>

      <div className="container">
        {/* Header */}
        <div className="cs__header">
          <span className="cs__badge">Our Trusted Partners</span>
          <h2 className="cs__title">
            <span className="cs__title-line">
              <span className="cs__title-word">Clients</span>
              <span className="cs__title-word cs__title-word--gold">We Served</span>
            </span>
            <span className="cs__title-underline"></span>
          </h2>
          <div className="cs__divider">
            <span></span><span></span><span></span>
          </div>
        </div>

        {/* Marquee Logo Track */}
        <div className="cs__marquee-wrapper">
          <div className="cs__marquee-fade cs__marquee-fade--left"></div>
          <div className="cs__marquee-fade cs__marquee-fade--right"></div>
          <div className="cs__marquee-track">
            {marqueeLogos.map((client, i) => (
              <div key={i} className="cs__logo-card">
                <div className="cs__logo-card-glow"></div>
                <div className="cs__logo-img-wrapper">
                  <img src={client.logo} alt={client.name} loading="lazy" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Static Display Grid (below marquee) */}
        <div className="cs__grid">
          {clients.map((client, i) => (
            <div key={i} className="cs__card" style={{ animationDelay: `${i * 0.15}s` }}>
              <div className="cs__card-shine"></div>
              <div className="cs__card-border"></div>
              <div className="cs__card-logo">
                <img src={client.logo} alt={client.name} loading="lazy" />
              </div>
              <h4 className="cs__card-name">{client.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
