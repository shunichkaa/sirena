export const themePreferenceKey = 'themePreference'

function prefersLightScheme() {
  if (typeof window === 'undefined') {
    return false
  }
  return window.matchMedia('(prefers-color-scheme: light)').matches
}

export function applyThemePreference(theme) {
  document.documentElement.setAttribute('data-theme', theme === 'light' ? 'light' : 'dark')
}

export function readThemePreference() {
  try {
    const value = localStorage.getItem(themePreferenceKey)
    if (value === 'light' || value === 'dark') {
      return value
    }
    if (value === 'system') {
      return prefersLightScheme() ? 'light' : 'dark'
    }
  } catch {}
  return prefersLightScheme() ? 'light' : 'dark'
}

export function initTheme() {
  applyThemePreference(readThemePreference())
}
