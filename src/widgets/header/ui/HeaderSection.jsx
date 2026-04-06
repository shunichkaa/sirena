import { headerNavItems } from '../../../entities/school/model/content'

export function HeaderSection() {
  return (
    <header className="site-header">
      <a className="site-logo" href="#top">
        Сирена.
      </a>
      <nav aria-label="Основная навигация">
        <ul className="site-nav-list">
          {headerNavItems.map((item) => (
            <li key={item.href}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
