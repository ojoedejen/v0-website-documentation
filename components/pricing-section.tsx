"use client"

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Check, Zap } from 'lucide-react'

const plans = [
  {
    name: '10 Mbps Kombra',
    speed: '10 Mbps',
    price: '700',
    originalPrice: '900',
    badge: 'Most Popular',
    popular: true,
    features: [
      '10 Mbps download/upload',
      'Unlimited monthly data',
      'Basic customer support',
      'Standard installation included',
      'Email & web browsing',
      'Social media streaming',
      '3-day free trial',
    ],
  },
  {
    name: '20 Mbps Family',
    speed: '20 Mbps',
    price: '900',
    originalPrice: '1,200',
    badge: 'Best Value',
    popular: false,
    features: [
      '20 Mbps download/upload',
      'Unlimited monthly data',
      'Priority customer support',
      'HD video streaming',
      'Multiple device support',
      'Online gaming support',
      '3-day free trial',
    ],
  },
  {
    name: '20 Mbps Booster',
    speed: '20 Mbps',
    price: '1,250',
    originalPrice: '1,500',
    badge: 'Premium',
    popular: false,
    features: [
      '20 Mbps enhanced speeds',
      'Unlimited premium data',
      'Dedicated support line',
      'Priority installation',
      'Static IP available',
      'Service level agreement',
      '4K streaming optimized',
      '24/7 technical support',
    ],
  },
  {
    name: 'Enterprise Custom',
    speed: 'Custom',
    price: 'Contact',
    badge: 'Enterprise',
    isCustom: true,
    popular: false,
    features: [
      'Custom bandwidth solutions',
      'Dedicated enterprise support',
      'SLA guarantees',
      'Priority network access',
      'Multiple static IPs',
      'Custom installation',
      'Network monitoring',
      'Scalable solutions',
      'Free Internal Support',
      'Postpaid',
    ],
  },
]

export default function PricingSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-[#001BB7] mb-4">
            Choose Your <span className="gradient-text">Plan</span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto font-sans">
            Affordable plans for every need. All plans include unlimited data and professional installation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:-translate-y-2 ${
                plan.popular
                  ? 'bg-[#001BB7] text-white shadow-2xl scale-105'
                  : 'bg-white shadow-lg hover:shadow-xl border border-gray-100'
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div
                  className={`absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold font-serif ${
                    plan.popular
                      ? 'bg-gradient-to-r from-[#FFCC00] to-[#FEA405] text-[#001BB7]'
                      : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  {plan.badge}
                </div>
              )}

              <div className="mt-4">
                {/* Speed */}
                <div className="flex items-center gap-2 mb-2">
                  <Zap className={`w-5 h-5 ${plan.popular ? 'text-[#FFCC00]' : 'text-[#001BB7]'}`} />
                  <span className={`text-sm font-medium ${plan.popular ? 'text-blue-100' : 'text-gray-500'}`}>
                    {plan.speed}
                  </span>
                </div>

                {/* Plan Name */}
                <h3 className={`text-xl font-bold font-serif mb-4 ${plan.popular ? 'text-white' : 'text-[#090040]'}`}>
                  {plan.name}
                </h3>

                {/* Price */}
                <div className="mb-6">
                  {plan.isCustom ? (
                    <div className={`text-2xl font-bold font-serif ${plan.popular ? 'text-white' : 'text-[#001BB7]'}`}>
                      Contact Us
                    </div>
                  ) : (
                    <>
                      <div className="flex items-baseline gap-2">
                        <span className={`text-3xl sm:text-4xl font-bold font-serif ${plan.popular ? 'text-white' : 'text-[#001BB7]'}`}>
                          NLe {plan.price}
                        </span>
                        <span className={`text-sm ${plan.popular ? 'text-blue-100' : 'text-gray-500'}`}>/mo</span>
                      </div>
                      {plan.originalPrice && (
                        <div className={`text-sm line-through ${plan.popular ? 'text-blue-200' : 'text-gray-400'}`}>
                          NLe {plan.originalPrice}/mo
                        </div>
                      )}
                    </>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3">
                      <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.popular ? 'text-[#FFCC00]' : 'text-green-500'}`} />
                      <span className={`text-sm ${plan.popular ? 'text-blue-100' : 'text-gray-600'}`}>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                {plan.isCustom ? (
                  <a href="https://wa.me/23276340991" target="_blank" rel="noopener noreferrer">
                    <Button className="w-full btn-signature-primary py-3 rounded-xl font-serif font-bold">
                      Contact Sales
                    </Button>
                  </a>
                ) : (
                  <Link href={`/payment?plan=${encodeURIComponent(plan.name)}&price=${plan.price}&speed=${plan.speed}`}>
                    <Button
                      className={`w-full py-3 rounded-xl font-serif font-bold ${
                        plan.popular ? 'btn-signature-primary' : 'bg-[#001BB7] text-white hover:bg-[#090040]'
                      }`}
                    >
                      Get Started
                    </Button>
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="text-center mt-12 text-gray-500 text-sm font-sans">
          <p>Installation: NLe 1,000 (one-time) | Starlink equipment: NLe 7,500</p>
        </div>
      </div>
    </section>
  )
}
