import { officialLinks, schoolContacts } from '../../../entities/school/model/content'
import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer className="site-footer">
      <p className="footer-logo">Сирена.</p>
      <nav aria-label="Ссылки по разделам">
        <ul className="footer-nav-list">
          <li>
            <a href="#about">О школе</a>
          </li>
          <li>
            <a href="#pricing">Цены</a>
          </li>
          <li>
            <a href="#contacts">Контакты</a>
          </li>
          <li>
            <Link to="/documents">Сведения и документы</Link>
          </li>
        </ul>
      </nav>
      <nav className="footer-official" aria-label="Официальные ресурсы">
        <p className="footer-contacts-title">Официальные ресурсы</p>
        <ul className="footer-nav-list">
          {officialLinks.map((item) => (
            <li key={item.href}>
              <a href={item.href} target="_blank" rel="noopener noreferrer">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="footer-contacts">
        <a className="footer-contact-link" href={schoolContacts.vkHref} target="_blank" rel="noreferrer">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12.785 17h-1.436s-3.17-.171-5.964-2.716C2.338 11.511 1 6 1 6h3.936s1.293 4.436 2.971 5.318c.552.29.81.38 1.17.38.202 0 .319-.14.319-.427V6h2.62v5.387c0 .57.215.773.414.773.552 0 1.895-.945 2.903-3.212L16.94 6H19.56s-.399 2.142-2.47 5.13c-1.598 2.307-1.775 2.488-.674 3.505.81.748 2.906 2.706 3.492 3.944.022.045.04.089.056.133h-2.887s-.674-.114-1.56-.994c-1.293-1.28-1.895-1.47-2.226-1.47-.465 0-.505.133-.505.77V17z" />
          </svg>
          <span>ВКонтакте</span>
        </a>
        <a className="footer-contact-link" href={schoolContacts.phoneHref}>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M19.95 21c-2.046 0-4.055-.503-5.85-1.465a19.34 19.34 0 0 1-4.925-3.76 19.34 19.34 0 0 1-3.76-4.925A12.42 12.42 0 0 1 3.95 5c0-.55.45-1 1-1h3.4c.5 0 .92.37.99.86l.55 3.86a1 1 0 0 1-.29.87l-1.88 1.88a15.44 15.44 0 0 0 4.81 4.81l1.88-1.88a1 1 0 0 1 .87-.29l3.86.55a1 1 0 0 1 .86.99v3.4c0 .55-.45 1-1 1z" />
          </svg>
          <span>{schoolContacts.phone}</span>
        </a>
        <div className="footer-contact-link footer-contact-static">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 2c-3.86 0-7 3.14-7 7 0 5.24 6.2 12.4 6.47 12.7a.7.7 0 0 0 1.06 0C12.8 21.4 19 14.24 19 9c0-3.86-3.14-7-7-7zm0 16.98C10.2 16.8 6.4 11.8 6.4 9A5.6 5.6 0 1 1 17.6 9c0 2.8-3.8 7.8-5.6 9.98z" />
            <path d="M12 6.2A2.8 2.8 0 1 0 14.8 9 2.8 2.8 0 0 0 12 6.2z" />
          </svg>
          <span>
            {schoolContacts.address
              .replace('г. Озерск', 'г.\u00A0Озерск')
              .replace('Озерск, Челябинская', 'Озерск,\u00A0Челябинская')}
          </span>
        </div>
      </div>
      <p className="footer-copy">© 2026 Автошкола «Сирена», Озерск</p>
    </footer>
  )
}
