"use client"

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const discoverItems = [
  {
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop',
    title: 'Discover enterprise-grade connectivity solutions for your business',
    route: '/business',
  },
  {
    image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=600&h=400&fit=crop',
    title: 'Explore premium residential fiber packages for modern homes',
    route: '/plans',
  },
  {
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&h=400&fit=crop',
    title: 'Learn about our advanced security and network monitoring',
    route: '/support',
  },
]

export default function DiscoverMore() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 premium-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-white mb-4">
            Discover <span className="gradient-text">More</span>
          </h2>
          <p className="text-blue-100 text-base sm:text-lg max-w-2xl mx-auto font-sans">
            Explore our comprehensive range of services designed to keep you connected.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {discoverItems.map((item, index) => (
            <Link key={index} href={item.route}>
              <div className="group relative rounded-2xl overflow-hidden h-80 sm:h-96 cursor-pointer">
                {/* Background Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-lg sm:text-xl font-semibold font-serif mb-4 leading-snug">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-2 text-[#FFCC00] font-semibold font-serif group-hover:gap-4 transition-all">
                    <span>Discover More</span>
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#FFCC00] rounded-2xl transition-colors duration-300" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
