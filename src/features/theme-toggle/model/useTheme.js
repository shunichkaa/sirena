import { useLayoutEffect, useState } from 'react'
import { applyThemePreference, readThemePreference, themePreferenceKey } from './initTheme'

export function useTheme() {
  const [theme, setTheme] = useState(readThemePreference)

  useLayoutEffect(() => {
    applyThemePreference(theme)
    try {
      localStorage.setItem(themePreferenceKey, theme)
    } catch {}
  }, [theme])

  const toggleTheme = () => {
    setTheme((current) => (current === 'light' ? 'dark' : 'light'))
  }

  return { theme, toggleTheme }
}
