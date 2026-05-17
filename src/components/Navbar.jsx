import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { navLinks } from '../data/content'

export default function Navbar() {
  const location = useLocation()
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    document.body.classList.toggle('menu-open', mobileOpen)
  }, [mobileOpen])

  // Close mobile menu on every route change
  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  // Helper: render a top-level link with active highlighting
  const NavLink = ({ to, children }) => {
    const isActive =
      location.pathname === to || (to === '/' && location.pathname === '/home-a')
    return (
      <Link
        to={to}
        className={`nav-link w-nav-link ${isActive ? 'w--current' : ''}`}
        onClick={() => setMobileOpen(false)}
      >
        {children}
      </Link>
    )
  }

  return (
    <div
      data-collapse="medium"
      data-animation="default"
      data-duration="400"
      role="banner"
      className={`navbar w-nav ${mobileOpen ? 'w--nav-menu-open' : ''}`}
    >
      <Link to="/" className="brand-mobile w-nav-brand">
        <img src="/CE-logo.png" loading="lazy" alt="Lovio" className="logo-mobile" />
      </Link>

      <nav
        role="navigation"
        className="nav-menu w-nav-menu"
        style={mobileOpen ? { display: 'block' } : undefined}
      >
        <div className="w-layout-grid grid-navbar">
          <div
            id="w-node-_07425466-8eb7-6e44-8292-395d2ea97cad-2ea97ca8"
            className="block-navbar"
          >
            {navLinks.left.map((link) => (
              <NavLink key={link.to} to={link.to}>
                {link.label}
              </NavLink>
            ))}
          </div>

          <Link to="/" className="brand w-nav-brand">
            <img src="/CE-logo.png" loading="lazy" alt="Lovio" className="logo" />
          </Link>

          <div
            id="w-node-_07425466-8eb7-6e44-8292-395d2ea97ccb-2ea97ca8"
            className="block-navbar"
          >
            {navLinks.right.map((link) => (
              <NavLink key={link.to} to={link.to}>
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile hamburger */}
      <div
        className={`menu-button w-nav-button ${mobileOpen ? 'w--open' : ''}`}
        role="button"
        tabIndex="0"
        aria-label="menu"
        aria-expanded={mobileOpen}
        onClick={() => setMobileOpen((v) => !v)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            setMobileOpen((v) => !v)
          }
        }}
      >
        <img
          src={mobileOpen ? '/images/close.svg' : '/images/menu.svg'}
          loading="lazy"
          alt=""
          className="menu-image"
        />
      </div>
    </div>
  )
}
