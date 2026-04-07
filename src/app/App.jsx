import { useEffect } from 'react'
import '../app/styles/global.css'
import { LandingPage } from '../pages/landing/ui/LandingPage'
import { VisionModeToggle } from '../features/vision-mode/ui/VisionModeToggle'
import { ThemeToggle } from '../features/theme-toggle/ui/ThemeToggle'
import { DocumentsPage } from '../pages/documents/ui/DocumentsPage'

export function App() {
  const isDocumentsPage = window.location.pathname === '/documents'

  useEffect(() => {
    const elements = document.querySelectorAll('.reveal-on-scroll')
    if (!elements.length) {
      return
    }

    if (!('IntersectionObserver' in window)) {
      elements.forEach((el) => el.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
          } else {
            entry.target.classList.remove('is-visible')
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' }
    )

    elements.forEach((el) => observer.observe(el))

    return () => {
      observer.disconnect()
    }
  }, [isDocumentsPage])

  return (
    <>
      <div className="header-floating-actions">
        <VisionModeToggle />
        <ThemeToggle />
      </div>
      {isDocumentsPage ? <DocumentsPage /> : <LandingPage />}
    </>
  )
}
