import { HeaderSection } from '../../../widgets/header/ui/HeaderSection'
import { HeroSection } from '../../../widgets/hero-section/ui/HeroSection'
import { AboutSection } from '../../../widgets/about-section/ui/AboutSection'
import { PricingSection } from '../../../widgets/pricing-section/ui/PricingSection'
import { ContactsCtaSection } from '../../../widgets/contacts-cta-section/ui/ContactsCtaSection'
import { ReviewsSection } from '../../../widgets/reviews-section/ui/ReviewsSection'
import { ConsultSection } from '../../../widgets/consult-section/ui/ConsultSection'
import { ContactsSection } from '../../../widgets/contacts-section/ui/ContactsSection'
import { Footer } from '../../../widgets/footer/ui/Footer'

export function LandingPage() {
  return (
    <>
      <HeaderSection />
      <main>
        <HeroSection />
        <AboutSection />
        <PricingSection />
        <ContactsCtaSection />
        <ReviewsSection />
        <ConsultSection />
        <ContactsSection />
      </main>
      <Footer />
    </>
  )
}
