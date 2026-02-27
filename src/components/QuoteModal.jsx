import { useState, useEffect } from 'react'

export default function QuoteModal({ isOpen, onClose }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      onClose()
    }, 2500)
    setForm({ name: '', email: '', phone: '', service: '', message: '' })
  }

  if (!isOpen) return null

  return (
    <div className="qmodal" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="qmodal__card">
        {/* Close button */}
        <button className="qmodal__close" onClick={onClose} aria-label="Close">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>

        {/* Header */}
        <div className="qmodal__header">
          <span className="qmodal__tag">Get in Touch</span>
          <h2 className="qmodal__title">Request a Free Quote</h2>
          <p className="qmodal__desc">
            Fill out the form below and our team will get back to you within 24 hours.
          </p>
        </div>

        {/* Success message */}
        {submitted && (
          <div className="qmodal__success">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            <span>Thank you! We'll contact you soon.</span>
          </div>
        )}

        {/* Form */}
        <form className="qmodal__form" onSubmit={handleSubmit}>
          <div className="qmodal__row">
            <div className="qmodal__field">
              <label htmlFor="qm-name">Full Name *</label>
              <input id="qm-name" type="text" name="name" placeholder="John Doe" value={form.name} onChange={handleChange} required />
            </div>
            <div className="qmodal__field">
              <label htmlFor="qm-email">Email *</label>
              <input id="qm-email" type="email" name="email" placeholder="john@example.com" value={form.email} onChange={handleChange} required />
            </div>
          </div>
          <div className="qmodal__row">
            <div className="qmodal__field">
              <label htmlFor="qm-phone">Phone</label>
              <input id="qm-phone" type="tel" name="phone" placeholder="+1 (555) 000-0000" value={form.phone} onChange={handleChange} />
            </div>
            <div className="qmodal__field">
              <label htmlFor="qm-service">Service</label>
              <select id="qm-service" name="service" value={form.service} onChange={handleChange}>
                <option value="">Select a service</option>
                <option value="building">Building Solutions</option>
                <option value="logging">Logging Services</option>
                <option value="forestry">Forestry & Timber</option>
                <option value="shipping">Truck Shipping</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
          <div className="qmodal__field">
            <label htmlFor="qm-msg">Message *</label>
            <textarea id="qm-msg" name="message" rows="4" placeholder="Tell us about your project..." value={form.message} onChange={handleChange} required />
          </div>
          <button type="submit" className="qmodal__submit">
            Send Request
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>
          </button>
        </form>
      </div>
    </div>
  )
}
