import { documentsCategories, documentsPagePlaceholders } from '../../../entities/school/model/content'
import { documentsCategoryFiles, getDocumentPdfHref } from '../../../entities/school/model/documentsFiles'

export function DocumentsPage() {
  return (
    <main className="documents-page section">
      <header className="documents-page-header">
        <a className="documents-back-link" href="#top">
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
            {documentsCategories.map((category) => {
              const files = documentsCategoryFiles[category]
              return (
                <li key={category}>
                  <h3 className="documents-category-title">{category}</h3>
                  <ul className="documents-file-list">
                    {files.map((item) => (
                      <li key={item.fileName}>
                        <a
                          className="documents-link"
                          href={getDocumentPdfHref(item.fileName)}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {item.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              )
            })}
          </ul>
        </nav>
      </section>
    </main>
  )
}
