"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqItems = [
  {
    question: 'What speeds and data allowances do you offer?',
    answer:
      'We offer plans starting from 10 Mbps up to custom enterprise solutions. All our plans come with unlimited monthly data, so you never have to worry about caps or throttling.',
  },
  {
    question: 'How does the installation process work and what is the cost?',
    answer:
      'Professional installation costs NLe 1,000 as a one-time fee. This includes the router, cables, and full setup by our certified technicians. We aim to complete installation within 48 hours of payment confirmation.',
  },
  {
    question: 'What areas in Sierra Leone do you cover?',
    answer:
      'We provide nationwide coverage via Fiber, Microwave, and Starlink technologies. This includes urban centers, rural communities, and remote locations across Sierra Leone.',
  },
  {
    question: 'What are the payment options available?',
    answer:
      'We accept payments through our Vultme payment portal (card/mobile money), bank transfer to Rokel Commercial Bank, Afrimoney, and Orange Money. Visit our payment page for detailed instructions.',
  },
  {
    question: 'What kind of customer support is available?',
    answer:
      '24/7 premium support is available at +232 33 31 31 04, +232 74 507 552, or +232 78 31 31 04. Our technical NOC team and customer service representatives are always ready to assist you.',
  },
]

export default function FaqSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-[#001BB7] mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto font-sans">
            Find answers to common questions about our services.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqItems.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-gray-50 rounded-xl border border-gray-100 px-6 data-[state=open]:shadow-lg transition-shadow"
            >
              <AccordionTrigger className="text-left text-base sm:text-lg font-semibold font-serif text-[#090040] hover:text-[#001BB7] py-6 hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 font-sans pb-6 leading-relaxed">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
