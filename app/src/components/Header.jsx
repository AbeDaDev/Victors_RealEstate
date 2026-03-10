
import { useEffect, useState } from 'react'

function Header() {
  const [isLightMode, setIsLightMode] = useState(false)

  useEffect(() => {
    document.body.classList.toggle('light-mode', isLightMode)
  }, [isLightMode])

  const handleThemeToggle = (checked) => {
    setIsLightMode(checked)
  }

  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Primary">
        <div className="logo-container">
          <img src="/logo.jpg" alt="logo" className="logo" />
        </div>

        <div className="links-container">
          <ul className="links">
            <li alt="Home">
              <a href="#top">Home</a>
            </li>
            <li alt="Reviews">
              <a href="#testimonials">Testimonials</a>
            </li>
            <li alt="Contact">
              <a href="#contact">Contact</a>
            </li>
            <li alt="Location">
              <a href="#location">Location</a>
            </li>
            <li className="theme-toggle">
              <label className="switch" aria-label="Toggle light mode">
                <input
                  type="checkbox"
                  checked={isLightMode}
                  onChange={(e) => handleThemeToggle(e.target.checked)}
                />
                <span className="slider">
                  <span className="switch-label">{isLightMode ? 'Light' : 'Dark'}</span>
                </span>
              </label>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header
