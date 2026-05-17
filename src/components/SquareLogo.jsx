/**
 * Fixed square logo badge — top-right corner, every page.
 * Replace `/images/square-logo.svg` with the real logo file when ready.
 */
export default function SquareLogo() {
  return (
    <a
      href="#"
      className="square-logo-badge"
      aria-label="Brand"
      onClick={(e) => e.preventDefault()}
    >
      <img src="/CE-Icon.png" alt="" />
    </a>
  )
}
