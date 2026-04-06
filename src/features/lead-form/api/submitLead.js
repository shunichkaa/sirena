export async function submitLead(payload) {
  const response = await fetch('/api/submit-lead', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })

  if (!response.ok) {
    throw new Error('Не удалось отправить заявку')
  }

  return response.json()
}
