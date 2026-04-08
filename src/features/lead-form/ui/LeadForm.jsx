import { useState } from 'react'
import { Button } from '../../../shared/ui/Button'
import { submitLead } from '../api/submitLead'
import { validateLeadForm } from '../model/validateLeadForm'

const initialValues = {
  name: '',
  phone: '',
  message: '',
  website: '',
}

export function LeadForm() {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')

  function handleChange(event) {
    const { name, value } = event.target
    setValues((prev) => ({ ...prev, [name]: value }))
    if (status !== 'idle') {
      setStatus('idle')
    }
  }

  async function handleSubmit(event) {
    event.preventDefault()
    const nextErrors = validateLeadForm(values)
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length) {
      return
    }

    try {
      setStatus('loading')
      await submitLead(values)
      setStatus('success')
      setValues(initialValues)
    } catch {
      setStatus('error')
    }
  }

  return (
    <form className="lead-form" onSubmit={handleSubmit} noValidate>
      <label className="field-label" htmlFor="name">
        Имя
      </label>
      <input
        id="name"
        name="name"
        value={values.name}
        onChange={handleChange}
        placeholder="Как к вам обращаться"
        autoComplete="name"
        aria-invalid={Boolean(errors.name)}
        aria-describedby={errors.name ? 'lead-name-error' : undefined}
      />
      {errors.name ? (
        <p id="lead-name-error" className="field-error">
          {errors.name}
        </p>
      ) : null}

      <label className="field-label" htmlFor="phone">
        Телефон
      </label>
      <input
        id="phone"
        name="phone"
        value={values.phone}
        onChange={handleChange}
        placeholder="+7 ..."
        autoComplete="tel"
        inputMode="tel"
        aria-invalid={Boolean(errors.phone)}
        aria-describedby={errors.phone ? 'lead-phone-error' : undefined}
      />
      {errors.phone ? (
        <p id="lead-phone-error" className="field-error">
          {errors.phone}
        </p>
      ) : null}

      <label className="field-label" htmlFor="message">
        Комментарий
      </label>
      <textarea
        id="message"
        name="message"
        value={values.message}
        onChange={handleChange}
        placeholder="Удобное время звонка"
        autoComplete="off"
      />
      <input
        type="text"
        name="website"
        value={values.website}
        onChange={handleChange}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ position: 'absolute', left: '-9999px' }}
      />

      <Button type="submit" variant="primary" className="full-width" disabled={status === 'loading'}>
        {status === 'loading' ? 'Отправка...' : 'Отправить'}
      </Button>
      {status === 'success' ? (
        <p className="form-status success" role="status" aria-live="polite">
          Спасибо, мы свяжемся с вами
        </p>
      ) : null}
      {status === 'error' ? (
        <p className="form-status error" role="alert" aria-live="assertive">
          Не удалось отправить заявку. Позвоните нам по телефону.
        </p>
      ) : null}
    </form>
  )
}
