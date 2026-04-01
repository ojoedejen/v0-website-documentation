"use client"

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Wifi, Home, Cable, Building2, Satellite, GraduationCap, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: Wifi,
    title: 'High-Speed Internet',
    description: 'Lightning-fast fiber optic internet with speeds up to 10 Gbps for seamless streaming, gaming, and working.',
    featured: true,
    color: 'from-[#7C5CF6] to-[#9370ff]',
    route: '/plans',
  },
  {
    icon: Home,
    title: 'In-Home WiFi',
    description: 'Complete home coverage with our advanced mesh WiFi systems, eliminating dead zones everywhere.',
    featured: false,
    color: 'from-[#10b981] to-[#34d399]',
    route: '/plans',
  },
  {
    icon: Cable,
    title: 'Streaming Services',
    description: 'Optimized bandwidth for 4K streaming, video calls, and real-time content delivery.',
    featured: false,
    color: 'from-[#9370ff] to-[#ae96ff]',
    route: '/plans',
  },
  {
    icon: Building2,
    title: 'Business Solutions',
    description: 'Enterprise-grade connectivity with SLA guarantees, dedicated support, and custom infrastructure.',
    featured: false,
    color: 'from-[#f43f5e] to-[#fb7185]',
    route: '/business',
  },
  {
    icon: Satellite,
    title: 'Starlink Microwave',
    description: 'Satellite-powered internet reaching even the most remote areas of Sierra Leone.',
    featured: false,
    color: 'from-[#FFB547] to-[#ffcc5c]',
    route: '/plans',
  },
  {
    icon: GraduationCap,
    title: 'VPN & IP Protection',
    description: 'Secure your connection with static IPs and VPN services for enhanced privacy and security.',
    featured: false,
    color: 'from-[#38bdf8] to-[#7dd3fc]',
    route: '/support',
  },
]

export default function ServicesSection() {
  return (
    <section className="py-24 sm:py-32 lg:py-40 min-h-screen flex items-center bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-16 lg:mb-24">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif text-[#0f0d1e] mb-6">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-[#6d6888] text-lg sm:text-xl max-w-2xl mx-auto font-sans">
            Comprehensive internet solutions for homes, businesses, and institutions across Sierra Leone.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className={`rounded-2xl p-8 sm:p-10 transition-all duration-300 hover:-translate-y-2 ${
                  service.featured
                    ? 'bg-[#0f0d1e] text-white'
                    : 'bg-[#f8f7ff] hover:bg-white border border-[#e8e5f5]'
                }`}
              >
                <div
                  className={`w-16 h-16 rounded-xl flex items-center justify-center mb-8 bg-gradient-to-r ${service.color}`}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3
                  className={`text-2xl sm:text-3xl font-bold font-serif mb-4 ${
                    service.featured ? 'text-white' : 'text-[#0f0d1e]'
                  }`}
                >
                  {service.title}
                </h3>
                <p
                  className={`text-base sm:text-lg leading-relaxed mb-8 font-sans ${
                    service.featured ? 'text-[#bdb8d8]' : 'text-[#6d6888]'
                  }`}
                >
                  {service.description}
                </p>
                <Link href={service.route}>
                  <Button
                    variant={service.featured ? 'default' : 'outline'}
                    className={`group ${
                      service.featured
                        ? 'btn-signature-primary'
                        : 'border-[#e8e5f5] text-[#6d6888] hover:bg-[#f0eefb]'
                    }`}
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
