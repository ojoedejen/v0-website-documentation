import Link from 'next/link'
import { Button } from '@/components/ui/button'
import TopBanner from '@/components/top-banner'
import Header from '@/components/header'
import Footer from '@/components/footer'

const stats = [
  {
    stat: '99.99%',
    title: 'Network Uptime',
    desc: 'Industry-leading reliability with enterprise-grade infrastructure.',
  },
  {
    stat: '10 Gig',
    title: 'Maximum Speed',
    desc: 'Lightning-fast symmetrical speeds up to 10 Gigabit.',
  },
  {
    stat: '24/7',
    title: 'Premium Support',
    desc: 'Round-the-clock support from certified network engineers.',
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <TopBanner />
      <Header />

      {/* Hero */}
      <section className="py-14 lg:py-24 relative z-0 premium-gradient">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative text-center">
          <h1 className="max-w-2xl mx-auto font-serif font-bold text-4xl text-white mb-5 md:text-5xl md:leading-normal">
            Transforming Connectivity with <span className="gradient-text">Premium Technology</span>
          </h1>
          <p className="max-w-sm mx-auto text-base font-normal leading-7 text-blue-100 mb-9 font-sans">
            Experience intelligent connectivity and discover a better way to manage your entire digital lifestyle seamlessly.
          </p>
        </div>
      </section>

      {/* About Us */}
      <section className="py-14 lg:py-24 relative bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-9">
            <div className="img-box">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/c4cdc1bb3_family-creating-digital-content.jpg"
                alt="About Signature Connect"
                className="max-lg:mx-auto object-cover rounded-2xl shadow-lg hover:-translate-y-2 transition-transform duration-300"
              />
            </div>
            <div className="lg:pl-[100px] flex items-center">
              <div className="data w-full">
                <h2 className="font-serif font-bold text-4xl lg:text-5xl text-[#001BB7] mb-9 max-lg:text-center relative">
                  About Us
                </h2>
                <p className="font-normal text-xl leading-8 text-gray-500 max-lg:text-center max-w-2xl mx-auto font-sans">
                  At Signature Connect, we are Sierra Leone&apos;s leading internet service provider, delivering cutting-edge connectivity solutions since 2022. Founded and owned by Ibrahim Misheal Kallon, an indigenous Sierra Leonean entrepreneur, we are committed to bridging the digital divide across our nation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Since */}
      <section className="py-14 lg:py-24 relative bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-9">
            <div className="lg:pr-24 flex items-center">
              <div className="data w-full">
                <img
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/689536d778d0bd14e66d561d/30fe46a1f_Kombrapackage22x.png"
                  alt="Signature Connect Innovation"
                  className="block lg:hidden mb-9 mx-auto object-cover rounded-2xl shadow-lg hover:-translate-y-2 transition-transform duration-300"
                />
                <h2 className="font-serif font-bold text-4xl lg:text-5xl text-[#001BB7] mb-9 max-lg:text-center">
                  We are Premium Since 2022
                </h2>
                <p className="font-normal text-xl leading-8 text-gray-500 max-lg:text-center max-w-2xl mx-auto font-sans">
                  Signature Connect isn&apos;t just a collection of services and infrastructure; it&apos;s a philosophy. We go beyond speed, prioritizing reliability, security, and premium support. Every element is meticulously crafted to enhance performance and elevate customer satisfaction.
                </p>
              </div>
            </div>
            <div className="img-box">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/689536d778d0bd14e66d561d/30fe46a1f_Kombrapackage22x.png"
                alt="Signature Connect Technology"
                className="hidden lg:block object-cover rounded-2xl shadow-lg hover:-translate-y-2 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl text-center text-[#001BB7] font-bold mb-14">
            Our Results in Numbers
          </h2>
          <div className="flex flex-col gap-5 xl:gap-8 lg:flex-row lg:justify-between">
            {stats.map(({ stat, title, desc }) => (
              <div
                key={title}
                className="w-full max-lg:max-w-2xl mx-auto lg:w-1/3 bg-white p-6 rounded-2xl shadow-md border-2 border-[#090040] hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex gap-5">
                  <div className="font-serif text-2xl font-bold text-[#090040]">{stat}</div>
                  <div className="flex-1">
                    <h4 className="text-xl text-[#090040] font-semibold mb-2 font-serif">{title}</h4>
                    <p className="text-xs text-gray-600 leading-5 font-sans">{desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-14 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-serif text-4xl font-bold text-[#001BB7] mb-4">Our Leadership</h2>
            <div className="bg-gray-50 rounded-2xl p-8 shadow-sm">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/689536d778d0bd14e66d561d/8375568e3_Kombrapackage22x.png"
                alt="Ibrahim Misheal Kallon - CEO"
                className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-[#FFCC00] shadow-lg mb-6"
              />
              <h3 className="text-2xl font-bold font-serif text-[#090040] mb-2">Ibrahim Misheal Kallon</h3>
              <p className="text-lg text-orange-500 font-semibold mb-4 font-sans">Founder & CEO</p>
              <p className="text-gray-600 leading-relaxed font-sans">
                An indigenous Sierra Leonean entrepreneur committed to bridging the digital divide and connecting our nation to the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-14 lg:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl text-center font-bold text-[#001BB7] mb-6">Our Location</h2>
          <p className="text-lg text-gray-500 text-center max-w-3xl mx-auto mb-10 font-sans">
            Visit our head office in Freetown. We&apos;re always happy to connect.
          </p>
          <div className="rounded-2xl overflow-hidden shadow-2xl h-96 lg:h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d991.5098806562765!2d-13.251069630471008!3d8.487499099129963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xf84fe7a7820c8ed%3A0x86cfb4b3a7e9b41b!2s92%20Regent%20Rd%2C%20Freetown%2C%20Sierra%20Leone!5e0!3m2!1sen!2sus!4v1722285272639!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Signature Connect Head Office"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="border-2 border-[#090040] rounded-2xl p-8 xl:p-11 premium-gradient text-center">
            <h2 className="font-serif text-4xl text-white font-bold mb-4">Ready for Premium Connectivity?</h2>
            <p className="text-blue-100 mb-11 max-w-2xl mx-auto font-sans">
              Join our community of premium clients and experience enterprise-grade fiber connectivity.
            </p>
            <Link href="/">
              <Button className="btn-signature-primary px-8 py-4 text-lg font-serif font-bold rounded-xl">
                Get Premium Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
