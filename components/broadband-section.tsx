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
  { label: 'Average', value: 'NLe 1,250', subtext: 'most popular' },
  { label: 'Satisfaction', value: '98.5%', subtext: 'happy customers' },
]

export default function BroadbandSection() {
  return (
    <section className="py-24 sm:py-32 lg:py-40 min-h-screen flex items-center bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left - Floating Cards */}
          <div className="relative h-96 sm:h-[450px] lg:h-[550px]">
            {cards.map((card, index) => (
              <div
                key={index}
                className={`absolute bg-white rounded-2xl p-8 border-2 border-[#e8e5f5] hover:border-[#FFB547] transition-all duration-300 ${
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
                <div className="text-sm text-[#6d6888] font-sans">{card.label}</div>
                <div className="text-4xl sm:text-5xl font-bold text-[#7C5CF6] font-serif">{card.value}</div>
                <div className="text-xs text-[#9490b0] font-sans">{card.subtext}</div>
              </div>
            ))}
            
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#7C5CF6]/5 to-[#FFB547]/5 rounded-3xl -z-10" />
          </div>

          {/* Right - Content */}
          <div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif text-[#0f0d1e] mb-8">
              Premium <span className="gradient-text">Broadband</span> Experience
            </h2>
            <p className="text-[#6d6888] text-lg sm:text-xl leading-relaxed mb-12 font-sans">
              Experience the difference with Signature Connect&apos;s premium broadband service. We combine cutting-edge technology with exceptional customer service to deliver an internet experience that exceeds expectations.
            </p>

            {/* Feature Checklist */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-5">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#FFB547] to-[#ffcc5c] flex items-center justify-center flex-shrink-0">
                    <Check className="w-6 h-6 text-[#0f0d1e]" />
                  </div>
                  <span className="text-[#342f50] font-medium font-sans text-lg">{feature}</span>
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
