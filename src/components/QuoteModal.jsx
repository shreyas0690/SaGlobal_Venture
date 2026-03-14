import { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'

const EMAILJS_SERVICE_ID = 'service_i0fb9yv'
const EMAILJS_TEMPLATE_ID = 'template_dsqn0bq'
const EMAILJS_PUBLIC_KEY = 'bu8-aakqqJj9pEseJ'

export default function QuoteModal({ isOpen, onClose }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', material: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

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

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          phone: form.phone,
          material: form.material,
          message: form.message,
        },
        EMAILJS_PUBLIC_KEY
      )
      setSubmitted(true)
      setForm({ name: '', email: '', phone: '', material: '', message: '' })
      setTimeout(() => {
        setSubmitted(false)
        onClose()
      }, 2500)
    } catch (err) {
      console.error('EmailJS Error:', err)
      setError('Failed to send request. Please try again.')
    } finally {
      setLoading(false)
    }
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
          <h2 className="qmodal__title">Request For Quotation</h2>
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
        {error && (
          <div className="qmodal__error">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M15 9l-6 6M9 9l6 6"/></svg>
            <span>{error}</span>
          </div>
        )}

        {/* Form */}
        <form className="qmodal__form" onSubmit={handleSubmit}>
          <div className="qmodal__row">
            <div className="qmodal__field">
              <label htmlFor="qm-name">Full Name *</label>
              <input id="qm-name" type="text" name="name" placeholder="Rahul Kumar" value={form.name} onChange={handleChange} required />
            </div>
            <div className="qmodal__field">
              <label htmlFor="qm-email">Email *</label>
              <input id="qm-email" type="email" name="email" placeholder="rahul@example.in" value={form.email} onChange={handleChange} required />
            </div>
          </div>
          <div className="qmodal__row">
            <div className="qmodal__field">
              <label htmlFor="qm-phone">Phone</label>
              <input id="qm-phone" type="tel" name="phone" placeholder="+91 98765 43210" value={form.phone} onChange={handleChange} />
            </div>
            <div className="qmodal__field">
              <label htmlFor="qm-material">Material & Quantity</label>
              <input id="qm-material" type="text" name="material" placeholder="e.g. 5x Oak Trunks" value={form.material} onChange={handleChange} />
            </div>
          </div>
          <div className="qmodal__field">
            <label htmlFor="qm-msg">Additional Details *</label>
            <textarea id="qm-msg" name="message" rows="4" placeholder="Tell us more about your requirements..." value={form.message} onChange={handleChange} required />
          </div>
          <button type="submit" className="qmodal__submit" disabled={loading}>
            {loading ? 'Sending...' : 'Send Request'}
            {!loading && <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>}
          </button>
        </form>
      </div>
    </div>
  )
}
