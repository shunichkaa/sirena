import { SectionHeader } from '../../../shared/ui/SectionHeader'
import { pricingItems } from '../../../entities/school/model/content'
import { Button } from '../../../shared/ui/Button'

export function PricingSection() {
  return (
    <section className="section reveal-on-scroll" id="pricing">
      <SectionHeader
        num="02 / Стоимость"
        title={
          <>
            Цены
            <br />
            и пакеты
          </>
        }
      />
      <div className="pricing-grid">
        {pricingItems.map((item) => (
          <article key={item.title} className={`price-card ${item.featured ? 'featured' : ''}`}>
            <p className="price-category">{item.subtitle}</p>
            <h3 className="price-title">{item.title}</h3>
            <p className="price-desc">{item.note}</p>
            <p className="price-num">{item.price}</p>
            <ul className="price-list">
              {item.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <Button as="a" href="#consult" variant="primary" className="full-width">
              Записаться
            </Button>
          </article>
        ))}
      </div>
    </section>
  )
}
