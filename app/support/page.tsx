import Link from 'next/link'
import { Phone, Book, Wifi, Mail, MessageSquare } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import TopBanner from '@/components/top-banner'
import Header from '@/components/header'
import Footer from '@/components/footer'

const supportCards = [
  {
    icon: Phone,
    title: 'Contact Support',
    desc: 'Our premium support team is available 24/7 to assist you.',
    action: (
      <Button asChild className="btn-signature-primary w-full">
        <a href="tel:+23233233620">Call Now</a>
      </Button>
    ),
  },
  {
    icon: Book,
    title: 'Knowledge Base',
    desc: 'Browse our comprehensive guides and tutorials.',
    action: (
      <Button asChild className="btn-signature-primary w-full">
        <Link href="/knowledge-base">View Guides</Link>
      </Button>
    ),
  },
  {
    icon: Wifi,
    title: 'Network Status',
    desc: 'Check for any outages or maintenance in your area.',
    action: (
      <Button asChild className="btn-signature-primary w-full">
        <Link href="/network-status">Check Status</Link>
      </Button>
    ),
  },
]

const departments = [
  {
    icon: Phone,
    dept: 'Sales',
    nums: ['+232 33 23 36 20', '+232 30 66 81 78', '+232 73 055 365'],
    email: 'info@signature-connect.com',
  },
  {
    icon: MessageSquare,
    dept: 'Technical Support',
    nums: ['+232 33 31 31 04', '+232 74 507 552', '+232 78 31 31 04'],
    email: 'noc@signature-connect.com',
  },
  {
    icon: Mail,
    dept: 'Billing',
    nums: ['+232 33 23 36 20', '+232 72 568 290'],
    email: 'billing@signature-connect.com',
  },
  {
    icon: Phone,
    dept: 'Feedback',
    nums: ['+23230431136', '+1 (240) 605-2966'],
    email: 'ceo@signature-connect.com',
  },
]

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-white">
      <TopBanner />
      <Header />

      {/* Hero */}
      <section className="py-20 lg:py-32 min-h-[50vh] flex items-center relative z-0 premium-gradient">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative text-center w-full">
          <h1 className="max-w-2xl mx-auto font-serif font-bold text-5xl text-white mb-8 md:text-6xl md:leading-normal">
            Customer <span className="gradient-text">Support</span>
          </h1>
          <p className="max-w-xl mx-auto text-lg font-normal leading-7 text-[#bdb8d8] font-sans">
            We&apos;re here to help. Find answers to common questions or get in touch with our dedicated support team, available 24/7.
          </p>
        </div>
      </section>

      {/* Support Cards */}
      <section className="py-20 lg:py-32 bg-[#f8f7ff]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {supportCards.map(({ icon: Icon, title, desc, action }) => (
              <Card key={title} className="text-center border border-[#e8e5f5] hover:-translate-y-2 transition-transform duration-300">
                <CardHeader>
                  <div className="mx-auto bg-[#7C5CF6] text-white w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-[#0f0d1e] font-serif">{title}</CardTitle>
                  <CardDescription className="font-sans text-[#6d6888]">{desc}</CardDescription>
                </CardHeader>
                <CardContent>{action}</CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-20 lg:py-32 bg-[#f8f7ff]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl sm:text-5xl text-center text-[#0f0d1e] font-bold mb-16">
            Find the right department
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
            {departments.map(({ icon: Icon, dept, nums, email }) => (
              <div key={dept} className="bg-white p-10 rounded-2xl border border-[#e8e5f5]">
                <Icon className="w-12 h-12 mx-auto text-[#FFB547] mb-6" />
                <h3 className="text-2xl font-bold text-[#0f0d1e] font-serif mb-4">{dept}</h3>
                {nums.map((n) => (
                  <a
                    key={n}
                    href={`tel:${n.replace(/\s/g, '')}`}
                    className="block text-lg text-[#7C5CF6] hover:underline font-sans"
                  >
                    {n}
                  </a>
                ))}
                <a
                  href={`mailto:${email}`}
                  className="block text-sm text-[#6d6888] hover:underline mt-4 font-sans"
                >
                  {email}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
