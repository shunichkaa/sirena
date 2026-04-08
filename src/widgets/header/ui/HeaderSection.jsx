import { useState } from 'react'
import { Link } from 'react-router-dom'
import { headerNavItems } from '../../../entities/school/model/content'

export function HeaderSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="site-header">
      <Link className="site-logo" to="/#top">
        Сирена.
      </Link>
      <button
        type="button"
        className={`site-burger${isMenuOpen ? ' is-open' : ''}`}
        onClick={toggleMenu}
        aria-expanded={isMenuOpen}
        aria-controls="site-main-nav"
        aria-label={isMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
      >
        <span className="site-burger-line" />
        <span className="site-burger-line" />
        <span className="site-burger-line" />
      </button>
      <nav id="site-main-nav" className={`site-nav${isMenuOpen ? ' is-open' : ''}`} aria-label="Основная навигация">
        <ul className="site-nav-list">
          {headerNavItems.map((item) => (
            <li key={item.href}>
              {item.href.startsWith('/') ? (
                <Link to={item.href} onClick={closeMenu}>
                  {item.label}
                </Link>
              ) : (
                <a href={item.href} onClick={closeMenu}>
                  {item.label}
                </a>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
