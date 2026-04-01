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
      <section className="py-20 lg:py-32 min-h-[50vh] flex items-center relative z-0 premium-gradient">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative text-center w-full">
          <h1 className="max-w-2xl mx-auto font-serif font-bold text-5xl text-white mb-8 md:text-6xl md:leading-normal">
            Connectivity That <span className="gradient-text">Empowers Business</span>
          </h1>
          <p className="max-w-xl mx-auto text-lg font-normal leading-7 text-[#bdb8d8] mb-12 font-sans">
            Power your organization with enterprise-grade fiber internet, designed for reliability, security, and performance.
          </p>
          <Button asChild className="btn-signature-primary px-10 py-4 text-lg font-serif font-bold rounded-xl">
            <a href="https://wa.me/23233233620" target="_blank" rel="noopener noreferrer">
              Contact Sales
            </a>
          </Button>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20 sm:py-32 min-h-screen flex items-center bg-white text-[#0f0d1e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-16 sm:mb-24">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-serif mb-6 text-[#0f0d1e]">
              Tailored Business Solutions
            </h2>
            <p className="text-xl text-[#6d6888] max-w-3xl mx-auto font-sans leading-relaxed">
              From startups to large enterprises, we provide connectivity solutions that drive growth and innovation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {solutions.map((solution, index) => (
              <Card
                key={index}
                className="rounded-2xl border border-[#e8e5f5] hover:-translate-y-2 transition-all duration-300 flex flex-col"
              >
                <CardHeader>
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 bg-[#FFB547]/20">
                    <solution.icon className="w-8 h-8 text-[#FFB547]" />
                  </div>
                  <CardTitle className="text-2xl font-bold font-serif text-[#0f0d1e]">
                    {solution.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow">
                  <p className="mb-8 font-sans flex-grow text-[#6d6888]">{solution.description}</p>
                  <Button
                    variant="outline"
                    className="mt-auto rounded-lg w-fit border-[#e8e5f5] text-[#6d6888] hover:bg-[#f0eefb]"
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
      <section className="py-20 bg-[#f8f7ff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold font-serif text-center text-[#0f0d1e] mb-16">
            Why Businesses Choose Us
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: '99.99%', label: 'Uptime SLA' },
              { value: '24/7', label: 'Dedicated Support' },
              { value: '10 Gbps', label: 'Max Speed' },
              { value: '48hrs', label: 'Installation' },
            ].map((item, index) => (
              <div key={index} className="text-center p-8 bg-white rounded-xl border border-[#e8e5f5]">
                <div className="text-4xl font-bold gradient-text font-serif mb-3">{item.value}</div>
                <div className="text-[#6d6888] font-sans">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
