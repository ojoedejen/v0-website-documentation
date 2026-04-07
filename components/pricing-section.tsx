"use client"

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Check, Zap } from 'lucide-react'

const residentialPlans = [
  {
    name: 'Nex Access',
    speed: '15 Mbps',
    price: '700',
    badge: 'Starter',
    popular: false,
    features: [
      '15 Mbps download/upload',
      'Unlimited monthly data',
      'Basic customer support',
      'Standard installation',
      'Email & web browsing',
      'Social media streaming',
    ],
  },
  {
    name: 'Nex Plus',
    speed: '30 Mbps (Shared)',
    price: '1,250',
    badge: 'Most Popular',
    popular: true,
    features: [
      '50 Mbps download/upload',
      'Unlimited monthly data',
      'Priority customer support',
      'HD video streaming',
      'Multiple device support',
      'Online gaming support',
      '4K streaming optimized',
    ],
  },
]

const businessPlans = [
  {
    name: 'Nex Business Lite',
    speed: '100 Mbps',
    price: '3,500',
    badge: 'Small Business',
    popular: false,
    features: [
      '100 Mbps download/upload',
      'Unlimited monthly data',
      'Priority support',
      'Multiple device support',
      'Video conferencing optimized',
      'Static IP available',
    ],
  },
  {
    name: 'Nex Business',
    speed: '200 Mbps',
    price: '6,500',
    badge: 'Best Value',
    popular: true,
    features: [
      '200 Mbps download/upload',
      'Unlimited premium data',
      'Dedicated support line',
      'Priority installation',
      'Multiple static IPs',
      'Service level agreement',
      '24/7 technical support',
    ],
  },
  {
    name: 'Nex Business Plus',
    speed: '250 Mbps',
    price: '9,600',
    badge: 'Enterprise',
    popular: false,
    features: [
      '250 Mbps download/upload',
      'Unlimited enterprise data',
      'Dedicated account manager',
      'Priority network access',
      'Custom IP configuration',
      'SLA guarantees',
      'Network monitoring',
      'Free internal support',
    ],
  },
]

export default function PricingSection() {
  return (
    <section className="py-20 sm:py-28 lg:py-36 min-h-screen flex flex-col justify-center bg-[#f8f7ff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif text-[#0f0d1e] mb-6">
            Choose Your <span className="gradient-text">Plan</span>
          </h2>
          <p className="text-[#6d6888] text-lg sm:text-xl max-w-2xl mx-auto font-sans">
            Affordable plans for every need. All plans include unlimited data and professional installation.
          </p>
        </div>

        {/* Residential Plans */}
        <div className="mb-20">
          <h3 className="text-2xl sm:text-3xl font-bold font-serif text-[#0f0d1e] mb-10 text-center">
            Residential Plans
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto">
            {residentialPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-2xl p-8 sm:p-10 transition-all duration-300 hover:-translate-y-2 ${
                  plan.popular
                    ? 'bg-[#0f0d1e] text-white'
                    : 'bg-white border border-[#e8e5f5]'
                }`}
              >
                {/* Badge */}
                {plan.badge && (
                  <div
                    className={`absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 rounded-full text-xs font-bold font-serif ${
                      plan.popular
                        ? 'bg-gradient-to-r from-[#FFB547] to-[#ffcc5c] text-[#0f0d1e]'
                        : 'bg-[#f0eefb] text-[#6d6888]'
                    }`}
                  >
                    {plan.badge}
                  </div>
                )}

                <div className="mt-4">
                  {/* Speed */}
                  <div className="flex items-center gap-2 mb-3">
                    <Zap className={`w-5 h-5 ${plan.popular ? 'text-[#FFB547]' : 'text-[#7C5CF6]'}`} />
                    <span className={`text-sm font-medium ${plan.popular ? 'text-[#bdb8d8]' : 'text-[#6d6888]'}`}>
                      {plan.speed}
                    </span>
                  </div>

                  {/* Plan Name */}
                  <h3 className={`text-2xl font-bold font-serif mb-6 ${plan.popular ? 'text-white' : 'text-[#0f0d1e]'}`}>
                    {plan.name}
                  </h3>

                  {/* Price */}
                  <div className="mb-8">
                    <div className="flex items-baseline gap-2">
                      <span className={`text-4xl sm:text-5xl font-bold font-serif ${plan.popular ? 'text-white' : 'text-[#7C5CF6]'}`}>
                        NLe {plan.price}
                      </span>
                      <span className={`text-sm ${plan.popular ? 'text-[#bdb8d8]' : 'text-[#6d6888]'}`}>/mon</span>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-4 mb-10">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-3">
                        <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.popular ? 'text-[#FFB547]' : 'text-[#10b981]'}`} />
                        <span className={`text-sm ${plan.popular ? 'text-[#bdb8d8]' : 'text-[#6d6888]'}`}>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Link href={`/payment?plan=${encodeURIComponent(plan.name)}&price=${plan.price}&speed=${plan.speed}`}>
                    <Button
                      className={`w-full py-4 rounded-xl font-serif font-bold ${
                        plan.popular ? 'btn-signature-primary' : 'bg-[#7C5CF6] text-white hover:bg-[#6644e0]'
                      }`}
                    >
                      Get Started
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Business Plans */}
        <div>
          <h3 className="text-2xl sm:text-3xl font-bold font-serif text-[#0f0d1e] mb-10 text-center">
            Business Plans
          </h3>
          <p className="text-center text-[#4169E1] mb-20 font-sans text-lg sm:text-xl font-bold">
  For Dedicated package request a Quote. All packages are shared.
</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {businessPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-2xl p-8 sm:p-10 transition-all duration-300 hover:-translate-y-2 ${
                  plan.popular
                    ? 'bg-[#0f0d1e] text-white'
                    : 'bg-white border border-[#e8e5f5]'
                }`}
              >
                {/* Badge */}
                {plan.badge && (
                  <div
                    className={`absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 rounded-full text-xs font-bold font-serif ${
                      plan.popular
                        ? 'bg-gradient-to-r from-[#FFB547] to-[#ffcc5c] text-[#0f0d1e]'
                        : 'bg-[#f0eefb] text-[#6d6888]'
                    }`}
                  >
                    {plan.badge}
                  </div>
                )}

                <div className="mt-4">
                  {/* Speed */}
                  <div className="flex items-center gap-2 mb-3">
                    <Zap className={`w-5 h-5 ${plan.popular ? 'text-[#FFB547]' : 'text-[#7C5CF6]'}`} />
                    <span className={`text-sm font-medium ${plan.popular ? 'text-[#bdb8d8]' : 'text-[#6d6888]'}`}>
                      {plan.speed}
                    </span>
                  </div>

                  {/* Plan Name */}
                  <h3 className={`text-xl font-bold font-serif mb-6 ${plan.popular ? 'text-white' : 'text-[#0f0d1e]'}`}>
                    {plan.name}
                  </h3>

                  {/* Price */}
                  <div className="mb-8">
                    <div className="flex items-baseline gap-2">
                      <span className={`text-3xl sm:text-4xl font-bold font-serif ${plan.popular ? 'text-white' : 'text-[#7C5CF6]'}`}>
                        NLe {plan.price}
                      </span>
                      <span className={`text-sm ${plan.popular ? 'text-[#bdb8d8]' : 'text-[#6d6888]'}`}>/mon</span>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-10">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-3">
                        <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.popular ? 'text-[#FFB547]' : 'text-[#10b981]'}`} />
                        <span className={`text-sm ${plan.popular ? 'text-[#bdb8d8]' : 'text-[#6d6888]'}`}>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Link href={`/payment?plan=${encodeURIComponent(plan.name)}&price=${plan.price}&speed=${plan.speed}`}>
                    <Button
                      className={`w-full py-4 rounded-xl font-serif font-bold ${
                        plan.popular ? 'btn-signature-primary' : 'bg-[#7C5CF6] text-white hover:bg-[#6644e0]'
                      }`}
                    >
                      Get Started
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-16 text-[#6d6888] text-sm font-sans">
          <p>Installation: NLe 1,000 (one-time) | Starlink equipment: NLe 7,500</p>
        </div>
      </div>
    </section>
  )
}
