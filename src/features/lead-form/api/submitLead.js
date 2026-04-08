import { schoolContacts } from '../../../entities/school/model/content'

export async function submitLead(payload) {
  const response = await fetch('/api/submit-lead', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      name: payload.name,
      phone: payload.phone,
      message: payload.message || '-',
      website: payload.website || '',
    }),
  })

  if (response.ok) {
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
