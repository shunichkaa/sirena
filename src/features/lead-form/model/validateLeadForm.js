export function validateLeadForm(values) {
  const errors = {}
  if (!values.name.trim()) {
    errors.name = 'Введите имя'
  }
  const normalizedPhone = values.phone.replace(/\D/g, '')
  if (!normalizedPhone) {
    errors.phone = 'Введите телефон'
  } else if (normalizedPhone.length < 10) {
    errors.phone = 'Проверьте номер телефона'
  }
  return errors
}
