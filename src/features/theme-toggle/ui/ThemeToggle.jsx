import { Button } from '../../../shared/ui/Button'
import { useTheme } from '../model/useTheme'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  const ariaLabel = theme === 'dark' ? 'Включить светлую тему' : 'Включить тёмную тему'

  return (
    <div className="theme-toggle">
      <Button
        type="button"
        variant="ghost"
        className="theme-toggle-btn"
        onClick={toggleTheme}
        aria-label={ariaLabel}
      >
        {theme === 'dark' ? (
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM11 1h2v3h-2V1zm0 20h2v-3h-2v3zM3.515 4.929l1.414-1.414L7.05 5.636 5.636 7.05 3.515 4.93zM16.95 18.364l1.414-1.414 2.121 2.121-1.414 1.414-2.121-2.121zm2.121-14.85l1.414 1.414-2.121 2.121L16.95 5.636l2.121-2.121zM5.636 16.95l-1.414 1.414 2.121 2.121 1.414-1.414-2.121-2.121zM23 11v2h-3v-2h3zM4 11v2H1v-2h3z" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M10 7a7 7 0 0 0 10 6.326A8 8 0 1 1 10 7z" />
          </svg>
        )}
      </Button>
    </div>
  )
}
