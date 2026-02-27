import { useState } from 'react'

export default function RequestQuote() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
    setForm({ name: '', email: '', phone: '', service: '', message: '' })
  }

  return (
    <section id="quote" className="quote">
      <div className="container quote__container">
        {/* Left */}
        <div className="quote__info">
          <span className="section-tag">Get in Touch</span>
          <h2 className="section-title">Request a<br/>Free Quote</h2>
          <p className="quote__desc">
            Fill out the form and our team will get back to you within 24 hours. 
            We offer free consultation for all projects.
          </p>

          <div className="quote__details">
            <div className="quote__detail">
              <div className="quote__detail-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.362 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.908.339 1.85.574 2.81.7A2 2 0 0122 16.92z"/>
                </svg>
              </div>
              <div>
                <span className="quote__detail-label">Phone</span>
                <a href="tel:+18005552569" className="quote__detail-value">+1 800 555 25 69</a>
              </div>
            </div>

            <div className="quote__detail">
              <div className="quote__detail-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <div>
                <span className="quote__detail-label">Email</span>
                <a href="mailto:info@timberco.com" className="quote__detail-value">info@timberco.com</a>
              </div>
            </div>

            <div className="quote__detail">
              <div className="quote__detail-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div>
                <span className="quote__detail-label">Office</span>
                <span className="quote__detail-value">785 15th Street, Berlin, DE</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right - Form */}
        <div className="quote__form-wrap">
          {submitted && (
            <div className="quote__success">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              <span>Thank you! We'll contact you soon.</span>
            </div>
          )}
          <form className="quote__form" onSubmit={handleSubmit}>
            <div className="quote__row">
              <div className="quote__field">
                <label htmlFor="q-name">Full Name *</label>
                <input id="q-name" type="text" name="name" placeholder="John Doe" value={form.name} onChange={handleChange} required />
              </div>
              <div className="quote__field">
                <label htmlFor="q-email">Email *</label>
                <input id="q-email" type="email" name="email" placeholder="john@example.com" value={form.email} onChange={handleChange} required />
              </div>
            </div>
            <div className="quote__row">
              <div className="quote__field">
                <label htmlFor="q-phone">Phone</label>
                <input id="q-phone" type="tel" name="phone" placeholder="+1 (555) 000-0000" value={form.phone} onChange={handleChange} />
              </div>
              <div className="quote__field">
                <label htmlFor="q-service">Service</label>
                <select id="q-service" name="service" value={form.service} onChange={handleChange}>
                  <option value="">Select a service</option>
                  <option value="building">Building Solutions</option>
                  <option value="logging">Logging Services</option>
                  <option value="forestry">Forestry & Timber</option>
                  <option value="shipping">Truck Shipping</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
            <div className="quote__field">
              <label htmlFor="q-msg">Message *</label>
              <textarea id="q-msg" name="message" rows="4" placeholder="Tell us about your project..." value={form.message} onChange={handleChange} required />
            </div>
            <button type="submit" className="quote__submit">
              Send Request
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
