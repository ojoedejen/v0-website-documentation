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
      'We offer residential plans from 15 Mbps (Nex Access) to 50 Mbps (Nex Plus), and business plans from 100 Mbps to 250 Mbps. All our plans come with unlimited monthly data, so you never have to worry about caps or throttling.',
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
      '24/7 premium support is available at +232 33 23 36 20. Our technical NOC team and customer service representatives are always ready to assist you.',
  },
]

export default function FaqSection() {
  return (
    <section className="py-24 sm:py-32 lg:py-40 min-h-screen flex items-center bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-16 lg:mb-24">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif text-[#0f0d1e] mb-6">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-[#6d6888] text-lg sm:text-xl max-w-2xl mx-auto font-sans">
            Find answers to common questions about our services.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-5">
          {faqItems.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-[#f8f7ff] rounded-xl border border-[#e8e5f5] px-8 data-[state=open]:bg-white transition-colors"
            >
              <AccordionTrigger className="text-left text-lg sm:text-xl font-semibold font-serif text-[#0f0d1e] hover:text-[#7C5CF6] py-8 hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-[#6d6888] font-sans pb-8 leading-relaxed text-base">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
