import TopBanner from '@/components/top-banner'
import Header from '@/components/header'
import HeroSection from '@/components/hero-section'
import TrustIndicators from '@/components/trust-indicators'
import AboutUsSection from '@/components/about-us-section'
import ServicesSection from '@/components/services-section'
import BroadbandSection from '@/components/broadband-section'
import PricingSection from '@/components/pricing-section'
import DiscoverMore from '@/components/discover-more'
import FaqSection from '@/components/faq-section'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <div className="min-h-screen">
      <TopBanner />
      <Header />
      <HeroSection />
      <TrustIndicators />
      <AboutUsSection />
      <ServicesSection />
      <BroadbandSection />
      <PricingSection />
      <DiscoverMore />
      <FaqSection />
      <Footer />
    </div>
  )
}
