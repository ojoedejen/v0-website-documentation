import TopBanner from '@/components/top-banner'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ShieldCheck, Zap, LifeBuoy, ArrowRight } from 'lucide-react'

const solutions = [
  {
    icon: Zap,
    title: 'Small Business',
    description:
      'High-speed, reliable internet to keep your small business running smoothly, with plans that scale as you grow.',
  },
  {
    icon: ShieldCheck,
    title: 'Enterprise Solutions',
    description:
      'Dedicated, symmetrical fiber with 99.99% uptime SLAs, advanced security, and dedicated account management.',
  },
  {
    icon: LifeBuoy,
    title: 'Custom Infrastructure',
    description:
      'Tailored network solutions, including dark fiber and custom builds, for unique and demanding enterprise requirements.',
  },
]

export default function BusinessPage() {
  return (
    <div className="min-h-screen bg-white">
      <TopBanner />
      <Header />

      {/* Hero */}
      <section className="py-14 lg:py-24 relative z-0 premium-gradient">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative text-center">
          <h1 className="max-w-2xl mx-auto font-serif font-bold text-4xl text-white mb-5 md:text-5xl md:leading-normal">
            Connectivity That <span className="gradient-text">Empowers Business</span>
          </h1>
          <p className="max-w-xl mx-auto text-base font-normal leading-7 text-blue-100 mb-9 font-sans">
            Power your organization with enterprise-grade fiber internet, designed for reliability, security, and performance.
          </p>
          <Button asChild className="btn-signature-primary px-8 py-3 text-lg font-serif font-bold rounded-xl">
            <a href="https://wa.me/23230668178" target="_blank" rel="noopener noreferrer">
              Contact Sales
            </a>
          </Button>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-16 sm:py-20 bg-white text-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif mb-4 text-[#001BB7]">
              Tailored Business Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto font-sans leading-relaxed">
              From startups to large enterprises, we provide connectivity solutions that drive growth and innovation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <Card
                key={index}
                className="rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col"
              >
                <CardHeader>
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 bg-orange-100">
                    <solution.icon className="w-8 h-8 text-orange-500" />
                  </div>
                  <CardTitle className="text-2xl font-bold font-serif text-[#090040]">
                    {solution.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow">
                  <p className="mb-6 font-sans flex-grow text-gray-600">{solution.description}</p>
                  <Button
                    variant="outline"
                    className="mt-auto rounded-lg w-fit border-gray-300 text-gray-700 hover:bg-gray-100"
                  >
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold font-serif text-center text-[#001BB7] mb-12">
            Why Businesses Choose Us
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: '99.99%', label: 'Uptime SLA' },
              { value: '24/7', label: 'Dedicated Support' },
              { value: '10 Gbps', label: 'Max Speed' },
              { value: '48hrs', label: 'Installation' },
            ].map((item, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl shadow-md">
                <div className="text-3xl font-bold gradient-text font-serif mb-2">{item.value}</div>
                <div className="text-gray-600 font-sans">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
