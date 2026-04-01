import TopBanner from '@/components/top-banner'
import Header from '@/components/header'
import Footer from '@/components/footer'
import PricingSection from '@/components/pricing-section'
import FaqSection from '@/components/faq-section'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { ShoppingCart } from 'lucide-react'

const products = [
  {
    name: '8-Port Network Switch',
    description: 'Expand your wired network with this reliable 8-port gigabit switch.',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/689536d778d0bd14e66d561d/2e3f491e9_image.png',
  },
  {
    name: 'Starlink Kit',
    description: 'The complete Starlink hardware kit to get you connected to high-speed satellite internet.',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/689536d778d0bd14e66d561d/d553fadbf_image.png',
  },
  {
    name: 'WiFi Range Extender',
    description: 'Eliminate WiFi dead zones and extend your wireless coverage throughout your property.',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/689536d778d0bd14e66d561d/b245e4892_image.png',
  },
  {
    name: 'Signature Connect Router',
    description: 'High-performance router designed specifically for Signature Connect services.',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/689536d778d0bd14e66d561d/8506e3674_image.png',
  },
  {
    name: 'Signature Connect Modem',
    description: 'Advanced modem technology for reliable internet connectivity.',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/689536d778d0bd14e66d561d/13fd053b0_image.png',
  },
  {
    name: '4-Antenna WiFi Router',
    description: 'Professional-grade WiFi router with 4 high-gain antennas for maximum coverage.',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/689536d778d0bd14e66d561d/7251d2e8e_image.png',
  },
  {
    name: 'Dual-Band WiFi Router',
    description: 'Advanced dual-band router for seamless connectivity across all your devices.',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/689536d778d0bd14e66d561d/78217ed2c_image.png',
  },
]

function ProductShowcase() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold font-serif text-[#0f0d1e]">Our Products</h2>
          <p className="mt-6 text-lg text-[#6d6888] font-sans">
            High-quality hardware to enhance your internet experience.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product, index) => (
            <Card
              key={index}
              className="flex flex-col border border-[#e8e5f5] hover:-translate-y-2 transition-transform duration-300"
            >
              <CardHeader>
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-cover rounded-t-lg w-full h-48"
                />
                <CardTitle className="text-xl font-bold text-[#0f0d1e] font-serif mt-6">
                  {product.name}
                </CardTitle>
                <CardDescription className="font-sans text-[#6d6888]">{product.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-end">
                <Button asChild className="btn-signature-primary w-full mt-4">
                  <a
                    href="https://wa.me/23233233620"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                  >
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Order via WhatsApp
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function PlansPage() {
  return (
    <div className="min-h-screen bg-white">
      <TopBanner />
      <Header />

      {/* Hero */}
      <section className="py-20 lg:py-32 min-h-[50vh] flex items-center relative z-0 premium-gradient">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative text-center w-full">
          <h1 className="max-w-2xl mx-auto font-serif font-bold text-5xl text-white mb-8 md:text-6xl md:leading-normal">
            Find Your <span className="gradient-text">Perfect Plan</span>
          </h1>
          <p className="max-w-xl mx-auto text-lg font-normal leading-7 text-[#bdb8d8] font-sans">
            Whether for home, business, or enterprise, we have a premium connectivity solution tailored to your needs.
          </p>
        </div>
      </section>

      <PricingSection />
      <ProductShowcase />
      <FaqSection />
      <Footer />
    </div>
  )
}
