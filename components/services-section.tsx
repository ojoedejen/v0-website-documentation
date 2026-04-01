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
    color: 'from-blue-400 to-blue-600',
    route: '/plans',
  },
  {
    icon: Home,
    title: 'In-Home WiFi',
    description: 'Complete home coverage with our advanced mesh WiFi systems, eliminating dead zones everywhere.',
    featured: false,
    color: 'from-green-400 to-green-600',
    route: '/plans',
  },
  {
    icon: Cable,
    title: 'Streaming Services',
    description: 'Optimized bandwidth for 4K streaming, video calls, and real-time content delivery.',
    featured: false,
    color: 'from-purple-400 to-purple-600',
    route: '/plans',
  },
  {
    icon: Building2,
    title: 'Business Solutions',
    description: 'Enterprise-grade connectivity with SLA guarantees, dedicated support, and custom infrastructure.',
    featured: false,
    color: 'from-red-400 to-red-600',
    route: '/business',
  },
  {
    icon: Satellite,
    title: 'Starlink Microwave',
    description: 'Satellite-powered internet reaching even the most remote areas of Sierra Leone.',
    featured: false,
    color: 'from-orange-400 to-orange-600',
    route: '/plans',
  },
  {
    icon: GraduationCap,
    title: 'VPN & IP Protection',
    description: 'Secure your connection with static IPs and VPN services for enhanced privacy and security.',
    featured: false,
    color: 'from-indigo-400 to-indigo-600',
    route: '/support',
  },
]

export default function ServicesSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-[#001BB7] mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto font-sans">
            Comprehensive internet solutions for homes, businesses, and institutions across Sierra Leone.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className={`rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:-translate-y-2 ${
                  service.featured
                    ? 'bg-[#090040] text-white shadow-2xl'
                    : 'bg-gray-50 hover:bg-white hover:shadow-xl border border-gray-100'
                }`}
              >
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-gradient-to-r ${service.color}`}
                >
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3
                  className={`text-xl sm:text-2xl font-bold font-serif mb-3 ${
                    service.featured ? 'text-white' : 'text-[#090040]'
                  }`}
                >
                  {service.title}
                </h3>
                <p
                  className={`text-sm sm:text-base leading-relaxed mb-6 font-sans ${
                    service.featured ? 'text-blue-100' : 'text-gray-600'
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
                        : 'border-gray-300 text-gray-700 hover:bg-gray-100'
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
