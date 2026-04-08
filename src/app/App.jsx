import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import './styles/base.css'
import './styles/shared-ui.css'
import './styles/forms.css'
import './styles/footer.css'
import './styles/documents.css'
import './styles/pricing-section.css'
import './styles/reviews-section.css'
import './styles/contacts-section.css'
import './styles/contacts-cta-section.css'
import './styles/animations.css'
import './styles/responsive.css'
import { LandingPage } from '../pages/landing/ui/LandingPage'
import { VisionModeToggle } from '../features/vision-mode/ui/VisionModeToggle'
import { DocumentsPage } from '../pages/documents/ui/DocumentsPage'

export function App() {
  const location = useLocation()
  const isDocumentsPage = location.pathname === '/documents'
  const siteUrl = 'https://aleksandra.github.io/sirena'

  useEffect(() => {
    const pathname = location.pathname === '/documents' ? '/documents' : '/'
    const currentUrl = `${siteUrl}${pathname}`
    const title =
      pathname === '/documents'
        ? 'Сведения и документы — Автошкола «Сирена»'
        : 'Автошкола «Сирена» — обучение в Озерске'
    const description =
      pathname === '/documents'
        ? 'Официальные сведения и документы автошколы «Сирена»: лицензия, устав и другие материалы.'
        : 'Автошкола «Сирена» в Озерске: категории A, B, C, набор в группы, контакты и сведения об образовательной организации.'

    document.title = title

    const setMeta = (selector, content) => {
      const meta = document.querySelector(selector)
      if (meta) {
        meta.setAttribute('content', content)
      }
    }

    const canonical = document.querySelector('link[rel="canonical"]')
    if (canonical) {
      canonical.setAttribute('href', currentUrl)
    }

    setMeta('meta[name="description"]', description)
    setMeta('meta[property="og:title"]', title)
    setMeta('meta[property="og:description"]', description)
    setMeta('meta[property="og:url"]', currentUrl)
    setMeta('meta[name="twitter:title"]', title)
    setMeta('meta[name="twitter:description"]', description)
  }, [location.pathname])

  useEffect(() => {
    if (location.hash) {
      const anchorId = location.hash.replace('#', '')
      if (!anchorId) {
        return
      }

      const anchor = document.getElementById(anchorId)
      if (anchor) {
        anchor.scrollIntoView()
      }
      return
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [location.pathname, location.hash])

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
      <VisionModeToggle />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/documents" element={<DocumentsPage />} />
      </Routes>
    </>
  )
}
