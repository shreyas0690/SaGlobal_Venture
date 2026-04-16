import { useState } from 'react'

export default function Footer() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Subscribed with: ${email}`)
    setEmail('')
  }

  return (
    <footer id="footer" className="footer">
      <div className="footer__main">
        <div className="container">
          <div className="footer__grid">
            {/* Col 1 - Working Hours */}
            <div className="footer__col">
              <h4 className="footer__heading">Working Hours</h4>
              <ul className="footer__hours">
                <li><span>Mon-Sat:</span> 10 AM – 6 PM</li>
                <li><span>Sunday:</span> Closed</li>
              </ul>
            </div>

            {/* Col 2 - Office */}
            <div className="footer__col">
              <h4 className="footer__heading">Office</h4>
              <address className="footer__address">
                Maman Road, Satha,<br/>
                Bulandshahr, Uttar Pradesh – 203001
              </address>
              <address className="footer__address" style={{ marginTop: '10px' }}>
                Machhu Nagar, Gandhiram,<br/>
                Gujarat – 370240
              </address>
              <a href="mailto:office@saglobalventure.com" className="footer__contact-link">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                office@saglobalventure.com
              </a>
              <a href="tel:+918477819222" className="footer__contact-link">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                +91 8477 819 222
              </a>
              <a href="tel:+919452599023" className="footer__contact-link">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                +91 9452 599 023
              </a>
              <a href="tel:+918979536060" className="footer__contact-link">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                +91 8979 536 060
              </a>
            </div>

            {/* Col 3 - Links */}
            <div className="footer__col">
              <h4 className="footer__heading">Links</h4>
              <ul className="footer__links">
                <li><a href="#">Home</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#footer">Contact</a></li>
              </ul>
            </div>

            {/* Col 4 - Google Map */}
            <div className="footer__col footer__col--map">
              <h4 className="footer__heading">Our Location</h4>
              <div className="footer__map-wrapper">
                <iframe
                  src="https://maps.google.com/maps?q=S.k.plywood,+maman+Road,+Satha+Rd,+Bulandshahr,+Uttar+Pradesh+203001&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="220"
                  style={{ border: 0, borderRadius: '12px' }}
                  allowFullScreen=""
                  loading="lazy"
                  title="SA Global Venture Office Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>© 2026 SA Global Venture. All rights reserved.</p>
          <div className="footer__bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
