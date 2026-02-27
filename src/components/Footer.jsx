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
                <li><span>Mon-Fri:</span> 9 AM – 6 PM</li>
                <li><span>Saturday:</span> 9 AM – 4 PM</li>
                <li><span>Sunday:</span> Closed</li>
              </ul>
            </div>

            {/* Col 2 - Office */}
            <div className="footer__col">
              <h4 className="footer__heading">Office</h4>
              <address className="footer__address">
                Germany — 785 15th Street,<br/>
                Office 478, Berlin, De 81566
              </address>
              <a href="mailto:info@timberco.com" className="footer__contact-link">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                info@timberco.com
              </a>
              <a href="tel:+18005552569" className="footer__contact-link">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                +1 800 555 25 69
              </a>
            </div>

            {/* Col 3 - Links */}
            <div className="footer__col">
              <h4 className="footer__heading">Links</h4>
              <ul className="footer__links">
                <li><a href="#">Home</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#products">Shop</a></li>
                <li><a href="#footer">Contact</a></li>
              </ul>
            </div>

            {/* Col 4 - Newsletter */}
            <div className="footer__col">
              <h4 className="footer__heading">Subscribe for Updates!</h4>
              <p className="footer__newsletter-desc">Get the latest news and offers from TimberCo.</p>
              <form className="footer__form" onSubmit={handleSubmit}>
                <input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="footer__input"
                />
                <button type="submit" className="btn btn--primary btn--sm">Subscribe</button>
              </form>
              <div className="footer__social">
                <a href="#" aria-label="Facebook" className="footer__social-link">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </a>
                <a href="#" aria-label="Twitter" className="footer__social-link">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>
                </a>
                <a href="#" aria-label="Instagram" className="footer__social-link">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/></svg>
                </a>
                <a href="#" aria-label="Dribbble" className="footer__social-link">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32M8.56 2.75c4.37 6 6 12.12 6.44 19.18"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>© 2024 TimberCo. All rights reserved.</p>
          <div className="footer__bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
