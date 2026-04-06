import { documentsCategories, documentsPagePlaceholders } from '../../../entities/school/model/content'

export function DocumentsPage() {
  return (
    <main className="documents-page section">
      <header className="documents-page-header">
        <a className="documents-back-link" href="/">
          <span aria-hidden="true">←</span>
          <span>На главную</span>
        </a>
        <h1 className="documents-page-title">
          <span className="line-accent">Сведения</span>
          <br />
          об образовательной организации
        </h1>
      </header>

      <section className="documents-info-wrap" aria-labelledby="documents-contact-data">
        <h2 className="section-title" id="documents-contact-data">
          Контактные данные
        </h2>
        <div className="documents-info-grid">
          <article className="card">
            <p className="contact-label">Школа</p>
            <p>{documentsPagePlaceholders.schoolName}</p>
          </article>
          <article className="card">
            <p className="contact-label">Телефон</p>
            <p>{documentsPagePlaceholders.phone}</p>
          </article>
          <article className="card">
            <p className="contact-label">Эл. почта</p>
            <p>{documentsPagePlaceholders.email}</p>
          </article>
          <article className="card">
            <p className="contact-label">Время работы</p>
            <p>{documentsPagePlaceholders.officeHours}</p>
          </article>
          <article className="card">
            <p className="contact-label">Адрес</p>
            <address className="documents-address">{documentsPagePlaceholders.legalAddress}</address>
          </article>
        </div>
      </section>

      <section className="documents-list-wrap">
        <h2 className="section-title" id="documents-categories-title">
          Разделы и документы
        </h2>
        <nav aria-labelledby="documents-categories-title">
          <ul className="documents-list">
            {documentsCategories.map((category) => (
              <li key={category}>
                <span className="documents-link" role="link" aria-disabled="true">
                  {category}
                </span>
                <p className="documents-placeholder">Здесь будет ссылка или документ по этому разделу.</p>
              </li>
            ))}
          </ul>
        </nav>
      </section>
    </main>
  )
}
