import { useState, useEffect } from 'react'
import { useCart } from '../context/CartContext'

const navLinks = [
  {
    label: 'Home',
    href: '#',
    submenu: [
      { label: 'Sawmill', href: '#hero' },
      { label: 'Landscaping', href: '#portfolio' },
      { label: 'Carpentry', href: '#services' },
    ]
  },
  {
    label: 'Pages',
    href: '#',
    submenu: [
      { label: 'About Us', href: '#about' },
      { label: 'Our Services', href: '#services' },
      { label: 'Our Team', href: '#about' },
      { label: 'FAQs', href: '#' },
      { label: 'Pricing', href: '#products' },
      { label: 'Contact', href: '#footer' },
    ]
  },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Blog', href: '#blog' },
  { label: 'Shop', href: '#products' },
]

export default function Header({ onQuoteClick }) {
  const { count, setIsOpen } = useCart()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      {/* Top bar */}
      <div className="header__topbar">
        <div className="container header__topbar-inner">
          <a href="tel:+18004585697" className="header__phone">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            1 800 458 56 97
          </a>
          <button onClick={onQuoteClick} className="header__quote-link">Request a Quote</button>
        </div>
      </div>

      {/* Main nav */}
      <div className="header__main">
        <div className="container header__main-inner">
          <a href="#" className="header__logo">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <rect x="2" y="2" width="36" height="36" rx="4" stroke="currentColor" strokeWidth="2"/>
              <path d="M12 28V14l8 8 8-8v14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>Timber<em>Co</em></span>
          </a>

          <nav className={`header__nav ${mobileOpen ? 'header__nav--open' : ''}`}>
            <ul className="header__nav-list">
              {navLinks.map((link, i) => (
                <li
                  key={i}
                  className={`header__nav-item ${link.submenu ? 'has-dropdown' : ''}`}
                  onMouseEnter={() => link.submenu && setOpenDropdown(i)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <a href={link.href} className="header__nav-link">
                    {link.label}
                    {link.submenu && (
                      <svg width="10" height="6" viewBox="0 0 10 6" fill="currentColor"><path d="M1 1l4 4 4-4"/></svg>
                    )}
                  </a>
                  {link.submenu && openDropdown === i && (
                    <ul className="header__dropdown">
                      {link.submenu.map((sub, j) => (
                        <li key={j}><a href={sub.href}>{sub.label}</a></li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
            <div className="header__nav-actions-mobile">
              <button onClick={onQuoteClick} className="btn btn--primary">Request a Quote</button>
            </div>
          </nav>

          <div className="header__actions">
            <button onClick={onQuoteClick} className="btn btn--primary header__cta-btn">Request a Quote</button>
            <button className="header__cart-btn" onClick={() => setIsOpen(true)} aria-label="Cart">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
                <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/>
              </svg>
              {count > 0 && <span className="header__cart-count">{count}</span>}
            </button>
            <button
              className={`header__hamburger ${mobileOpen ? 'header__hamburger--open' : ''}`}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
