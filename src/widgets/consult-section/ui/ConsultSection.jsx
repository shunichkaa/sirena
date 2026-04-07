import { SectionHeader } from '../../../shared/ui/SectionHeader'
import { faqItems } from '../../../entities/school/model/content'
import { LeadForm } from '../../../features/lead-form/ui/LeadForm'

export function ConsultSection() {
  return (
    <section className="section reveal-on-scroll" id="consult">
      <SectionHeader
        num="04 / Запись"
        title={
          <>
            Консультация
            <br />
            и запись
          </>
        }
      />

      <div className="consult-layout">
        <article className="card">
          <h3>Напишите нам</h3>
          <p className="card-note">Оставьте заявку, и мы свяжемся с вами для уточнения деталей.</p>
          <LeadForm />
        </article>
        <aside className="card">
          <h3>Частые вопросы</h3>
          {faqItems.map((item) => (
            <p className="faq-item" key={item.question}>
              <strong>{item.question}</strong>
              <br />
              {item.answer}
            </p>
          ))}
        </aside>
      </div>
    </section>
  )
}
