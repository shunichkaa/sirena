import { SectionHeader } from '../../../shared/ui/SectionHeader'

export function AboutSection() {
  return (
    <section className="section reveal-on-scroll" id="about">
      <SectionHeader
        num="01 / О школе"
        title={
          <>
            Почему
            <br />
            выбирают нас
          </>
        }
        tag={
          <>
            Коротко
            <br />
            о школе
          </>
        }
      />
      <div className="feature-grid">
        <article className="feature-card">
          <span className="feature-icon" aria-hidden="true">
            ◎
          </span>
          <h3>Свой автодром</h3>
          <p>Собственная площадка для сдачи экзамена и отработки упражнений.</p>
        </article>
        <article className="feature-card">
          <span className="feature-icon" aria-hidden="true">
            ◈
          </span>
          <h3>Команда</h3>
          <p>Опытные преподаватели теории и мастера практики.</p>
        </article>
        <article className="feature-card">
          <span className="feature-icon" aria-hidden="true">
            ◇
          </span>
          <h3>Рассрочка и акции</h3>
          <p>Рассрочка на период обучения, акции и скидки для отдельных категорий.</p>
        </article>
        <article className="feature-card">
          <span className="feature-icon" aria-hidden="true">
            ◐
          </span>
          <h3>Нормативы и программы</h3>
          <p>Работаем в рамках требований законодательства и дорабатываем программы с учетом практики обучения.</p>
        </article>
        <article className="feature-card">
          <span className="feature-icon" aria-hidden="true">
            ◑
          </span>
          <h3>Технологии</h3>
          <p>Внедряем современные программы и оснащение учебных классов, следим за качеством подготовки.</p>
        </article>
        <article className="feature-card">
          <span className="feature-icon" aria-hidden="true">
            ◉
          </span>
          <h3>Сообщество</h3>
          <p>Новости и отзывы — в группе ВКонтакте. Можно заранее записаться и уточнить детали обучения.</p>
        </article>
      </div>
    </section>
  )
}
