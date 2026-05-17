import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Forces window scroll to top whenever the route changes.
 * Without this, navigating from a long page to /contact lands you mid-page.
 */
export default function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname])

  return null
}
