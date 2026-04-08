function createTelegramText(payload) {
  return [
    'Новая заявка с сайта',
    `Имя: ${payload.name}`,
    `Телефон: ${payload.phone}`,
    `Комментарий: ${payload.message || 'без комментария'}`,
  ].join('\n')
}

async function sendTelegram(payload) {
  const env = globalThis.process?.env ?? {}
  const botToken = env.telegramBotToken
  const chatId = env.telegramChatId

  if (!botToken || !chatId) {
    throw new Error('Telegram env не настроены')
  }

  const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      chat_id: chatId,
      text: createTelegramText(payload),
    }),
  })

  if (!response.ok) {
    throw new Error('Ошибка отправки в Telegram')
  }
}

async function sendEmail(payload) {
  const env = globalThis.process?.env ?? {}
  const apiKey = env.resendApiKey
  const to = env.leadEmailTo
  const from = env.leadEmailFrom

  if (!apiKey || !to || !from) {
    throw new Error('Email env не настроены')
  }

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to: [to],
      subject: `Новая заявка: ${payload.name}`,
      text: createTelegramText(payload),
    }),
  })

  if (!response.ok) {
    throw new Error('Ошибка отправки email')
  }
}

export default async function handler(request, response) {
  if (request.method !== 'POST') {
    response.status(405).json({ message: 'Method Not Allowed' })
    return
  }

  const payload = request.body || {}

  if (payload.website) {
    response.status(200).json({ ok: true })
    return
  }

  if (!payload.name || !payload.phone) {
    response.status(400).json({ message: 'name и phone обязательны' })
    return
  }

  try {
    await Promise.all([sendEmail(payload), sendTelegram(payload)])
    response.status(200).json({ ok: true })
  } catch {
    response.status(500).json({ message: 'Ошибка отправки заявки' })
  }
}
