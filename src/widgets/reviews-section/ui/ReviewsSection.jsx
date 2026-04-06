import { SectionHeader } from '../../../shared/ui/SectionHeader'
import { reviewsItems } from '../../../entities/school/model/content'

export function ReviewsSection() {
  const loopedReviews = [...reviewsItems, ...reviewsItems]

  return (
    <section className="section reveal-on-scroll" id="reviews">
      <SectionHeader
        num="03 / Отзывы"
        title={
          <>
            Что говорят
            <br />
            ученики
          </>
        }
        tag={
          <>
            Реальные
            <br />
            впечатления
          </>
        }
      />
      <div className="reviews-slider" aria-label="Отзывы учеников">
        <div className="scroll-track">
          {loopedReviews.map((item, index) => (
            <article key={`${item.author}-${index}`} className="review-card">
              <h3>{item.author}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
