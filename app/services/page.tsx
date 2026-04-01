import Link from 'next/link'
import TopBanner from '@/components/top-banner'
import Header from '@/components/header'
import Footer from '@/components/footer'
import ServicesSection from '@/components/services-section'
import { Button } from '@/components/ui/button'

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <TopBanner />
      <Header />

      {/* Hero */}
      <section className="py-14 lg:py-24 relative z-0 premium-gradient">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative text-center">
          <h1 className="max-w-2xl mx-auto font-serif font-bold text-4xl text-white mb-5 md:text-5xl md:leading-normal">
            Our Internet <span className="gradient-text">Services</span>
          </h1>
          <p className="max-w-xl mx-auto text-base font-normal leading-7 text-blue-100 mb-9 font-sans">
            Comprehensive internet solutions for homes, businesses, and institutions across Sierra Leone.
          </p>
          <Button asChild className="btn-signature-primary px-8 py-3 text-lg font-serif font-bold rounded-xl">
            <Link href="/plans">View Our Plans</Link>
          </Button>
        </div>
      </section>

      <ServicesSection />
      <Footer />
    </div>
  )
}
