import { useState } from 'react'

const services = [
  {
    num: '01',
    title: 'Building Solutions',
    desc: 'Complete timber frame construction for residential and commercial projects — from concept to final build.',
    image: '/images/service-building.png',
    features: ['Custom Design', 'Quality Materials', 'Expert Team']
  },
  {
    num: '02',
    title: 'Logging Services',
    desc: 'Professional and responsible logging operations using modern equipment and sustainable harvesting practices.',
    image: '/images/service-logging.png',
    features: ['Modern Equipment', 'Certified Loggers', 'Eco-Friendly']
  },
  {
    num: '03',
    title: 'Forestry & Timber',
    desc: 'Sustainable forest management and premium timber sourcing for quality wood products delivered worldwide.',
    image: '/images/service-forestry.png',
    features: ['Global Sourcing', 'Premium Grades', 'Fast Delivery']
  },
]

export default function Services() {
  const [active, setActive] = useState(0)

  return (
    <section id="services" className="srv">
      {/* Dark background */}
      <div className="srv__bg">
        {services.map((s, i) => (
          <div
            key={i}
            className={`srv__bg-img ${i === active ? 'srv__bg-img--active' : ''}`}
            style={{ backgroundImage: `url(${s.image})` }}
          />
        ))}
        <div className="srv__bg-overlay" />
      </div>

      <div className="container srv__container">
        {/* Left - heading & tabs */}
        <div className="srv__left">
          <span className="section-tag srv__tag">What We Do</span>
          <h2 className="srv__title">Expert Timber<br/>Solutions For<br/>Every Need</h2>
          <p className="srv__subtitle">
            Three decades of delivering precision milling, 
            sustainable forestry, and premium wood products.
          </p>

          {/* Service tabs */}
          <div className="srv__tabs">
            {services.map((s, i) => (
              <button
                key={i}
                className={`srv__tab ${i === active ? 'srv__tab--active' : ''}`}
                onClick={() => setActive(i)}
              >
                <span className="srv__tab-num">{s.num}</span>
                <span className="srv__tab-title">{s.title}</span>
                <span className="srv__tab-arrow">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Right - active service detail */}
        <div className="srv__right">
          {services.map((s, i) => (
            <div key={i} className={`srv__detail ${i === active ? 'srv__detail--active' : ''}`}>
              <div className="srv__detail-img">
                <img src={s.image} alt={s.title} loading="lazy" />
                <div className="srv__detail-num">{s.num}</div>
              </div>
              <div className="srv__detail-body">
                <h3 className="srv__detail-title">{s.title}</h3>
                <p className="srv__detail-desc">{s.desc}</p>
                <div className="srv__detail-features">
                  {s.features.map((f, fi) => (
                    <span key={fi} className="srv__detail-feature">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                      {f}
                    </span>
                  ))}
                </div>
                <a href="#" className="srv__detail-link">
                  Learn More
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
