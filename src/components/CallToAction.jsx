export default function CallToAction() {
  return (
    <section className="cta2">
      <div className="cta2__bg" style={{ backgroundImage: 'url(/images/cta-bg.png)' }} />
      <div className="cta2__overlay" />

      <div className="container cta2__container">
        {/* Left - content */}
        <div className="cta2__content">
          <span className="cta2__tag">Let's Build Together</span>
          <h2 className="cta2__title">
            Bring the Warmth of<br/>Real Timber to<br/>
            <span className="cta2__title-highlight">Any Space</span>
          </h2>
          <p className="cta2__desc">
            Contact us today for a free consultation and quote. Our team of experts 
            will help you find the perfect timber solution for your project — 
            residential, commercial, or custom.
          </p>
          <div className="cta2__actions">
            <a href="#footer" className="cta2__btn-primary">
              Get Free Quote
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
            <a href="tel:18004585697" className="cta2__btn-phone">
              <span className="cta2__phone-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.362 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.908.339 1.85.574 2.81.7A2 2 0 0122 16.92z"/>
                </svg>
              </span>
              1 800 458 56 97
            </a>
          </div>
        </div>

        {/* Right - stats */}
        <div className="cta2__stats">
          <div className="cta2__stat">
            <span className="cta2__stat-num">25+</span>
            <span className="cta2__stat-label">Years of<br/>Experience</span>
          </div>
          <div className="cta2__stat">
            <span className="cta2__stat-num">480+</span>
            <span className="cta2__stat-label">Projects<br/>Completed</span>
          </div>
          <div className="cta2__stat">
            <span className="cta2__stat-num">98%</span>
            <span className="cta2__stat-label">Client<br/>Satisfaction</span>
          </div>
        </div>
      </div>
    </section>
  )
}
