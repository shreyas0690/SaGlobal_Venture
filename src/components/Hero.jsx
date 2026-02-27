import { useState, useEffect, useCallback } from 'react'

const slides = [
  {
    image: '/images/hero-sawmill.png',
    subtitle: 'Since 1998 — Trusted Worldwide',
    title: 'Where Nature Meets Craftsmanship',
    desc: 'Premium sawmill services delivering excellence in every cut, every grain, every project.',
    highlight: 'Craftsmanship',
    cta: 'Explore Services',
    href: '#services',
    stat: { number: '25+', label: 'Years Legacy' }
  },
  {
    image: '/images/hero-forest.png',
    subtitle: 'Committed to Sustainability',
    title: 'Rooted in Nature, Built to Last',
    desc: 'Responsible forestry practices ensuring the finest quality timber for generations to come.',
    highlight: 'Nature,',
    cta: 'Our Story',
    href: '#about',
    stat: { number: '480+', label: 'Projects Delivered' }
  },
  {
    image: '/images/hero-timber.png',
    subtitle: 'Master Grade Timber',
    title: 'The Art of Exceptional Woodwork',
    desc: 'Hand-selected, precision-milled timber products crafted for those who demand the extraordinary.',
    highlight: 'Exceptional',
    cta: 'View Collection',
    href: '#products',
    stat: { number: '1.2K', label: 'Happy Clients' }
  }
]

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [animating, setAnimating] = useState(false)
  const [progress, setProgress] = useState(0)
  const [loaded, setLoaded] = useState(false)

  const DURATION = 7000

  const goTo = useCallback((index) => {
    if (animating) return
    setAnimating(true)
    setProgress(0)
    setCurrent(index)
    setTimeout(() => setAnimating(false), 1200)
  }, [animating])

  const next = useCallback(() => goTo((current + 1) % slides.length), [current, goTo])
  const prev = useCallback(() => goTo((current - 1 + slides.length) % slides.length), [current, goTo])

  // Auto-play with progress bar
  useEffect(() => {
    let startTime = Date.now()
    let raf
    const tick = () => {
      const elapsed = Date.now() - startTime
      setProgress(Math.min((elapsed / DURATION) * 100, 100))
      if (elapsed >= DURATION) {
        next()
        return
      }
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [current, next])

  // Reveal on mount
  useEffect(() => {
    setTimeout(() => setLoaded(true), 100)
  }, [])

  return (
    <section id="hero" className={`hero2 ${loaded ? 'hero2--loaded' : ''}`}>
      {/* Background slides */}
      <div className="hero2__bg">
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`hero2__bg-slide ${i === current ? 'hero2__bg-slide--active' : ''} ${i < current ? 'hero2__bg-slide--prev' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          />
        ))}
        <div className="hero2__bg-overlay" />
      </div>

      {/* Floating particles */}
      <div className="hero2__particles">
        {[...Array(6)].map((_, i) => (
          <div key={i} className={`hero2__particle hero2__particle--${i + 1}`} />
        ))}
      </div>

      {/* Decorative grid lines */}
      <div className="hero2__grid-lines">
        <div className="hero2__grid-line" />
        <div className="hero2__grid-line" />
        <div className="hero2__grid-line" />
        <div className="hero2__grid-line" />
      </div>

      {/* Main content */}
      <div className="container hero2__container">
        <div className="hero2__content">
          {slides.map((slide, i) => (
            <div key={i} className={`hero2__slide-content ${i === current ? 'hero2__slide-content--active' : ''}`}>
              {/* Subtitle with line */}
              <div className="hero2__subtitle-wrap">
                <span className="hero2__subtitle-line" />
                <span className="hero2__subtitle">{slide.subtitle}</span>
              </div>

              {/* Title with word-by-word reveal */}
              <h1 className="hero2__title">
                {slide.title.split(' ').map((word, wi) => (
                  <span key={wi} className="hero2__title-word" style={{ transitionDelay: `${0.4 + wi * 0.08}s` }}>
                    <span className={word.toLowerCase() === slide.highlight.toLowerCase() ? 'hero2__title-highlight' : ''}>
                      {word}
                    </span>
                  </span>
                ))}
              </h1>

              {/* Description */}
              <p className="hero2__desc">{slide.desc}</p>

              {/* CTA Row */}
              <div className="hero2__cta-row">
                <a href={slide.href} className="hero2__cta-btn">
                  <span className="hero2__cta-text">{slide.cta}</span>
                  <span className="hero2__cta-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </span>
                </a>
                <a href="#about" className="hero2__play-btn">
                  <span className="hero2__play-circle">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><polygon points="8,5 20,12 8,19"/></svg>
                  </span>
                  <span className="hero2__play-label">Watch Video</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Right side - stat card */}
        <div className="hero2__side">
          {slides.map((slide, i) => (
            <div key={i} className={`hero2__stat-card ${i === current ? 'hero2__stat-card--active' : ''}`}>
              <span className="hero2__stat-number">{slide.stat.number}</span>
              <span className="hero2__stat-label">{slide.stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="hero2__bottom">
        <div className="container hero2__bottom-inner">
          {/* Slide counter */}
          <div className="hero2__counter">
            <span className="hero2__counter-current">{String(current + 1).padStart(2, '0')}</span>
            <span className="hero2__counter-sep">/</span>
            <span className="hero2__counter-total">{String(slides.length).padStart(2, '0')}</span>
          </div>

          {/* Progress bar */}
          <div className="hero2__progress">
            <div className="hero2__progress-bar" style={{ width: `${progress}%` }} />
          </div>

          {/* Arrows */}
          <div className="hero2__arrows">
            <button className="hero2__arrow" onClick={prev} aria-label="Previous slide">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            </button>
            <button className="hero2__arrow" onClick={next} aria-label="Next slide">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero2__scroll">
        <div className="hero2__scroll-mouse">
          <div className="hero2__scroll-dot" />
        </div>
        <span className="hero2__scroll-text">Scroll Down</span>
      </div>

      {/* Side nav dots */}
      <div className="hero2__side-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`hero2__side-dot ${i === current ? 'hero2__side-dot--active' : ''}`}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
