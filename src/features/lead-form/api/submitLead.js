import { schoolContacts } from '../../../entities/school/model/content'

export async function submitLead(payload) {
  const formspreeEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT

  if (formspreeEndpoint) {
    const response = await fetch(formspreeEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        name: payload.name,
        phone: payload.phone,
        message: payload.message || '-',
      }),
    })

    if (!response.ok) {
      throw new Error('Не удалось отправить заявку')
    }

    return { ok: true }
  }

  const subject = encodeURIComponent('Новая заявка с сайта автошколы')
  const body = encodeURIComponent(
    [
      'Новая заявка:',
      `Имя: ${payload.name}`,
      `Телефон: ${payload.phone}`,
      `Комментарий: ${payload.message || '-'}`,
    ].join('\n')
  )
  window.location.href = `mailto:${schoolContacts.email}?subject=${subject}&body=${body}`
  return { ok: true }
}
