import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { navLinks } from '../data/content'

export default function Navbar() {
  const location = useLocation()
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    document.body.classList.toggle('menu-open', mobileOpen)
    return () => document.body.classList.remove('menu-open')
  }, [mobileOpen])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  const isActive = (to) =>
    location.pathname === to || (to === '/' && location.pathname === '/home-a')

  return (
    <div
      data-collapse="medium"
      data-animation="default"
      data-duration="400"
      role="banner"
      className="navbar w-nav"
    >
      {/* ─── DESKTOP nav — exact original structure, untouched ── */}
      <nav role="navigation" className="nav-menu w-nav-menu">
        <div className="w-layout-grid grid-navbar">
          <div
            id="w-node-_07425466-8eb7-6e44-8292-395d2ea97cad-2ea97ca8"
            className="block-navbar"
          >
            {navLinks.left.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`nav-link w-nav-link${isActive(link.to) ? ' w--current' : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <Link to="/" className="brand w-nav-brand">
            <img src="/CE-logo.png" loading="lazy" alt="Crown Estate" className="logo" />
          </Link>

          <div
            id="w-node-_07425466-8eb7-6e44-8292-395d2ea97ccb-2ea97ca8"
            className="block-navbar"
          >
            {navLinks.right.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`nav-link w-nav-link${isActive(link.to) ? ' w--current' : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* ─── MOBILE bar — logo left, burger right ─────────────── */}
      <div className="ce-mobile-bar">
        <Link to="/" className="ce-mobile-bar__logo" onClick={() => setMobileOpen(false)}>
          <img src="/CE-logo.png" loading="lazy" alt="Crown Estate" />
        </Link>

        <button
          className={`ce-mobile-bar__burger${mobileOpen ? ' ce-mobile-bar__burger--open' : ''}`}
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          aria-controls="ce-mobile-menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* ─── MOBILE dropdown — below bar only ─────────────────── */}
      <nav
        id="ce-mobile-menu"
        className={`ce-mobile-menu${mobileOpen ? ' ce-mobile-menu--open' : ''}`}
        aria-hidden={!mobileOpen}
      >
        {[...navLinks.left, ...navLinks.right].map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className={`ce-mobile-menu__link${isActive(link.to) ? ' ce-mobile-menu__link--active' : ''}`}
            onClick={() => setMobileOpen(false)}
            tabIndex={mobileOpen ? 0 : -1}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </div>
  )
}