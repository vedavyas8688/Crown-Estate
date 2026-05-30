/**
 * Fixed square logo badge — top-right corner, every page.
 * Replace `/images/square-logo.svg` with the real logo file when ready.
 */
 import { Link } from 'react-router-dom'

/**
 * Fixed square logo badge — top-right corner, every page.
 * Clicking navigates to the home page.
 */
export default function SquareLogo() {
  return (
    <Link to="/" className="square-logo-badge" aria-label="Home">
      <img src="/squarelogo.png" alt="Crown Estate" />
    </Link>
  )
}
