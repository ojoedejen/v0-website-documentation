"use client"

import { Check } from 'lucide-react'

const features = [
  'Unlimited monthly data',
  '24/7 premium support',
  '48-hour installation',
  'Multiple payment options',
]

const cards = [
  { label: 'Starting from', value: 'NLe 700', subtext: 'per month' },
  { label: 'Average', value: 'NLe 900', subtext: 'most popular' },
  { label: 'Satisfaction', value: '98.5%', subtext: 'happy customers' },
]

export default function BroadbandSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Floating Cards */}
          <div className="relative h-80 sm:h-96 lg:h-[500px]">
            {cards.map((card, index) => (
              <div
                key={index}
                className={`absolute bg-white rounded-2xl shadow-xl p-6 border-2 border-gray-100 hover:border-[#FFCC00] transition-all duration-300 ${
                  index === 0
                    ? 'top-0 left-0 sm:left-8'
                    : index === 1
                    ? 'top-1/3 right-0 sm:right-8'
                    : 'bottom-0 left-1/4'
                }`}
                style={{
                  animation: `float ${3 + index}s ease-in-out infinite`,
                  animationDelay: `${index * 0.5}s`,
                }}
              >
                <div className="text-sm text-gray-500 font-sans">{card.label}</div>
                <div className="text-3xl sm:text-4xl font-bold text-[#001BB7] font-serif">{card.value}</div>
                <div className="text-xs text-gray-400 font-sans">{card.subtext}</div>
              </div>
            ))}
            
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#001BB7]/5 to-[#FFCC00]/5 rounded-3xl -z-10" />
          </div>

          {/* Right - Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-[#001BB7] mb-6">
              Premium <span className="gradient-text">Broadband</span> Experience
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8 font-sans">
              Experience the difference with Signature Connect&apos;s premium broadband service. We combine cutting-edge technology with exceptional customer service to deliver an internet experience that exceeds expectations.
            </p>

            {/* Feature Checklist */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#FFCC00] to-[#FEA405] flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-[#001BB7]" />
                  </div>
                  <span className="text-gray-700 font-medium font-sans">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }
      `}</style>
    </section>
  )
}
