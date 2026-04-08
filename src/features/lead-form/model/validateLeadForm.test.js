import { describe, expect, it } from 'vitest'
import { validateLeadForm } from './validateLeadForm'

describe('validateLeadForm', () => {
  it('returns errors for empty fields', () => {
    const result = validateLeadForm({ name: '', phone: '', message: '' })
    expect(result).toEqual({
      name: 'Введите имя',
      phone: 'Введите телефон',
    })
  })

  it('validates short phone', () => {
    const result = validateLeadForm({ name: 'Иван', phone: '+7 900 11', message: '' })
    expect(result.phone).toBe('Проверьте номер телефона')
  })

  it('returns no errors for valid payload', () => {
    const result = validateLeadForm({ name: 'Иван', phone: '+7 900 111 22 33', message: '' })
    expect(result).toEqual({})
  })
})
