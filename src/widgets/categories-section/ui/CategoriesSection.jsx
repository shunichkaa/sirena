import { SectionHeader } from '../../../shared/ui/SectionHeader'
import { categoryItems } from '../../../entities/school/model/content'
import { Button } from '../../../shared/ui/Button'

export function CategoriesSection() {
  return (
    <section className="section" id="categories">
      <SectionHeader
        num="02 / Категории"
        title={
          <>
            Категории
            <br />
            обучения
          </>
        }
      />
      <div className="categories-grid">
        {categoryItems.map((item) => (
          <article key={item.title} className="category-card">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <p className="category-hours">{item.hours}</p>
            <Button as="a" href="#consult" variant="primary" className="full-width">
              Записаться
            </Button>
          </article>
        ))}
      </div>
    </section>
  )
}
