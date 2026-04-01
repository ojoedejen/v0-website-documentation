import TopBanner from '@/components/top-banner'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { CheckCircle, AlertCircle, Clock, Wrench } from 'lucide-react'

// Mock data - in a real app this would come from an API
const currentStatus = {
  allOperational: true,
}

const recentIncidents = [
  {
    id: 1,
    title: 'Scheduled Maintenance - Freetown Central',
    status: 'Resolved',
    date: 'March 15, 2026',
    description: 'Routine maintenance completed successfully.',
  },
  {
    id: 2,
    title: 'Network Upgrade - Bo Region',
    status: 'Resolved',
    date: 'March 10, 2026',
    description: 'Infrastructure upgrade completed. Improved speeds in the region.',
  },
]

const statusConfig: Record<string, { icon: typeof CheckCircle; color: string; bgColor: string }> = {
  Investigating: { icon: AlertCircle, color: 'text-[#FFB547]', bgColor: 'bg-[#FFB547]' },
  Identified: { icon: Wrench, color: 'text-[#f97316]', bgColor: 'bg-[#f97316]' },
  Monitoring: { icon: Clock, color: 'text-[#7C5CF6]', bgColor: 'bg-[#7C5CF6]' },
  Resolved: { icon: CheckCircle, color: 'text-[#10b981]', bgColor: 'bg-[#10b981]' },
}

export default function NetworkStatusPage() {
  return (
    <div className="min-h-screen bg-white">
      <TopBanner />
      <Header />

      {/* Hero */}
      <section className="py-20 lg:py-32 min-h-[50vh] flex items-center relative z-0 premium-gradient">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative text-center w-full">
          <h1 className="max-w-2xl mx-auto font-serif font-bold text-5xl text-white mb-8 md:text-6xl md:leading-normal">
            Network <span className="gradient-text">Status</span>
          </h1>
          <p className="max-w-xl mx-auto text-lg font-normal leading-7 text-[#bdb8d8] font-sans">
            Check for any outages or scheduled maintenance in your area. We believe in transparency.
          </p>
        </div>
      </section>

      {/* Current Status */}
      <section className="py-20 lg:py-32 bg-[#f8f7ff]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-16">
          <div>
            <h2 className="font-serif text-4xl text-center text-[#0f0d1e] font-bold mb-10">
              Current Status
            </h2>
            {currentStatus.allOperational ? (
              <div className="text-center bg-[#10b981]/10 text-[#10b981] p-10 rounded-2xl border border-[#10b981]/20">
                <CheckCircle className="w-20 h-20 mx-auto mb-6" />
                <h3 className="text-3xl font-bold font-serif">All Systems Operational</h3>
                <p className="mt-3 font-sans text-lg">
                  All Signature Connect services are currently operating normally.
                </p>
              </div>
            ) : (
              <div className="text-center bg-[#FFB547]/10 text-[#FFB547] p-10 rounded-2xl border border-[#FFB547]/20">
                <AlertCircle className="w-20 h-20 mx-auto mb-6" />
                <h3 className="text-3xl font-bold font-serif">Partial Outage</h3>
                <p className="mt-3 font-sans text-lg">
                  Some services are currently experiencing issues. Our team is working on it.
                </p>
              </div>
            )}
          </div>

          {/* Service Status Grid */}
          <div>
            <h2 className="font-serif text-3xl text-center text-[#0f0d1e] font-bold mb-8">
              Service Status
            </h2>
            <div className="grid md:grid-cols-2 gap-5">
              {[
                { name: 'Freetown Fiber Network', status: 'Operational' },
                { name: 'Microwave Network', status: 'Operational' },
                { name: 'Starlink Services', status: 'Operational' },
                { name: 'Customer Portal', status: 'Operational' },
                { name: 'Payment Systems', status: 'Operational' },
                { name: 'Support Services', status: 'Operational' },
              ].map((service, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-5 bg-white rounded-xl border border-[#e8e5f5]"
                >
                  <span className="font-medium font-sans text-[#342f50]">{service.name}</span>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#10b981]" />
                    <span className="text-sm text-[#10b981] font-sans">{service.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Incidents */}
         
        </div>
      </section>

      <Footer />
    </div>
  )
}
