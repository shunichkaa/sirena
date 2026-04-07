import { Button } from '../../../shared/ui/Button'
import { useVisionMode } from '../model/useVisionMode'

export function VisionModeToggle() {
  const { isVisionModeEnabled, toggleVisionMode } = useVisionMode()

  return (
    <div className="vision-mode-toggle">
      <Button type="button" variant="ghost" className="vision-mode-toggle-btn" onClick={toggleVisionMode}>
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 5c4.76 0 8.69 2.95 10 7-1.31 4.05-5.24 7-10 7S3.31 16.05 2 12c1.31-4.05 5.24-7 10-7zm0 2c-3.58 0-6.64 2.13-7.86 5 1.22 2.87 4.28 5 7.86 5s6.64-2.13 7.86-5c-1.22-2.87-4.28-5-7.86-5zm0 2.5A2.5 2.5 0 1 1 9.5 12 2.5 2.5 0 0 1 12 9.5z" />
        </svg>
        <span className="vision-mode-toggle-label">
          {isVisionModeEnabled ? 'Обычная версия' : 'Версия для слабовидящих'}
        </span>
      </Button>
    </div>
  )
}
