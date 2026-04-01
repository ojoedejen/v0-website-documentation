import TopBanner from '@/components/top-banner'
import Header from '@/components/header'
import Footer from '@/components/footer'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const guides = [
  {
    title: 'How to Check Your WiFi Signal Strength',
    content:
      'To check your WiFi signal, look at the WiFi icon on your device. More bars mean a stronger signal. For detailed analysis, use network analysis apps showing signal strength in dBm. A value closer to -30 dBm is best.',
  },
  {
    title: 'Troubleshooting Slow Internet Speeds',
    content:
      'If your internet is slow: 1. Restart your router by unplugging it for 30 seconds. 2. Move closer to your WiFi router. 3. Disconnect unused devices. 4. Check for outages on our Network Status page. 5. If the problem persists, contact our 24/7 support.',
  },
  {
    title: 'Understanding Your Monthly Bill',
    content:
      'Your monthly bill includes your plan subscription fee. Any additional charges will be clearly itemized. You can view and download your bills from the customer portal. For billing questions, contact our billing support team.',
  },
  {
    title: 'How to Make a Payment',
    content:
      'You can pay securely online via our Vultme payment portal using a card or mobile money. Alternatively, make a manual bank transfer or mobile money payment. Find all details on our Payment page.',
  },
  {
    title: 'Setting Up Your Router',
    content:
      'Connect your router to the modem using the provided ethernet cable. Plug in the power adapter and wait for the lights to stabilize. Connect to the WiFi network using the default credentials on the router label. For optimal placement, position the router centrally in your home.',
  },
  {
    title: 'Changing Your WiFi Password',
    content:
      'Access your router settings by typing 192.168.1.1 in your browser. Log in with the admin credentials (usually found on the router). Navigate to Wireless Settings > Security and update your password. Remember to reconnect all your devices with the new password.',
  },
]

export default function KnowledgeBasePage() {
  return (
    <div className="min-h-screen bg-white">
      <TopBanner />
      <Header />

      {/* Hero */}
      <section className="py-14 lg:py-24 relative z-0 premium-gradient">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative text-center">
          <h1 className="max-w-2xl mx-auto font-serif font-bold text-4xl text-white mb-5 md:text-5xl md:leading-normal">
            Knowledge <span className="gradient-text">Base</span>
          </h1>
          <p className="max-w-xl mx-auto text-base font-normal leading-7 text-blue-100 mb-9 font-sans">
            Browse our comprehensive guides and tutorials to get the most out of your Signature Connect service.
          </p>
        </div>
      </section>

      {/* Guides */}
      <section className="py-14 lg:py-24 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl text-center text-[#001BB7] font-bold mb-12">
            FAQ & Guides
          </h2>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {guides.map((guide, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-xl border border-gray-100 shadow-sm px-6"
              >
                <AccordionTrigger className="text-lg font-semibold text-left py-6 hover:no-underline font-serif text-[#090040]">
                  {guide.title}
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-gray-600 font-sans leading-relaxed">
                  {guide.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <Footer />
    </div>
  )
}
