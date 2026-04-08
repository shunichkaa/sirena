import { useEffect, useState } from 'react'

const visionModeStorageKey = 'visionModeEnabled'

export function useVisionMode() {
  const [isVisionModeEnabled, setIsVisionModeEnabled] = useState(() => {
    try {
      return localStorage.getItem(visionModeStorageKey) === '1'
    } catch {
      return false
    }
  })

  useEffect(() => {
    document.body.classList.toggle('vision-mode', isVisionModeEnabled)
    try {
      localStorage.setItem(visionModeStorageKey, isVisionModeEnabled ? '1' : '0')
    } catch {
      return undefined
    }
  }, [isVisionModeEnabled])

  const toggleVisionMode = () => {
    setIsVisionModeEnabled((value) => !value)
  }

  return { isVisionModeEnabled, toggleVisionMode }
}
