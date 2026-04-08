import { schoolContacts } from '../../../entities/school/model/content'
import { Button } from '../../../shared/ui/Button'

export function HeroSection() {
  return (
    <section className="hero section" id="top">
      <p className="hero-label">Автошкола «Сирена» · г. Озерск</p>
      <h1>
        <span className="line-accent">Сирена.</span>
        <br />
        Твой чёткий
        <br />
        сигнал к старту.
      </h1>
      <div className="hero-actions">
        <Button as="a" href="#consult" variant="primary">
          Записаться
        </Button>
        <Button as="a" href={schoolContacts.phoneHref} variant="ghost">
          Позвонить
        </Button>
      </div>
    </section>
  )
}
