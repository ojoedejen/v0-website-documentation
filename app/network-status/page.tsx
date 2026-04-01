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
  Investigating: { icon: AlertCircle, color: 'text-yellow-500', bgColor: 'bg-yellow-500' },
  Identified: { icon: Wrench, color: 'text-orange-500', bgColor: 'bg-orange-500' },
  Monitoring: { icon: Clock, color: 'text-blue-500', bgColor: 'bg-blue-500' },
  Resolved: { icon: CheckCircle, color: 'text-green-500', bgColor: 'bg-green-500' },
}

export default function NetworkStatusPage() {
  return (
    <div className="min-h-screen bg-white">
      <TopBanner />
      <Header />

      {/* Hero */}
      <section className="py-14 lg:py-24 relative z-0 premium-gradient">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative text-center">
          <h1 className="max-w-2xl mx-auto font-serif font-bold text-4xl text-white mb-5 md:text-5xl md:leading-normal">
            Network <span className="gradient-text">Status</span>
          </h1>
          <p className="max-w-xl mx-auto text-base font-normal leading-7 text-blue-100 mb-9 font-sans">
            Check for any outages or scheduled maintenance in your area. We believe in transparency.
          </p>
        </div>
      </section>

      {/* Current Status */}
      <section className="py-14 lg:py-24 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-12">
          <div>
            <h2 className="font-serif text-3xl text-center text-[#001BB7] font-bold mb-8">
              Current Status
            </h2>
            {currentStatus.allOperational ? (
              <div className="text-center bg-green-100 text-green-800 p-8 rounded-2xl">
                <CheckCircle className="w-16 h-16 mx-auto mb-4" />
                <h3 className="text-2xl font-bold font-serif">All Systems Operational</h3>
                <p className="mt-2 font-sans">
                  All Signature Connect services are currently operating normally.
                </p>
              </div>
            ) : (
              <div className="text-center bg-yellow-100 text-yellow-800 p-8 rounded-2xl">
                <AlertCircle className="w-16 h-16 mx-auto mb-4" />
                <h3 className="text-2xl font-bold font-serif">Partial Outage</h3>
                <p className="mt-2 font-sans">
                  Some services are currently experiencing issues. Our team is working on it.
                </p>
              </div>
            )}
          </div>

          {/* Service Status Grid */}
          <div>
            <h2 className="font-serif text-2xl text-center text-[#001BB7] font-bold mb-6">
              Service Status
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
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
                  className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm"
                >
                  <span className="font-medium font-sans text-gray-700">{service.name}</span>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                    <span className="text-sm text-green-600 font-sans">{service.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Incidents */}
          <div>
            <h2 className="font-serif text-2xl text-center text-[#001BB7] font-bold mb-6">
              Recent Incidents
            </h2>
            {recentIncidents.length > 0 ? (
              <div className="space-y-4">
                {recentIncidents.map((incident) => {
                  const config = statusConfig[incident.status]
                  const Icon = config.icon
                  return (
                    <div key={incident.id} className="bg-white p-6 rounded-xl shadow-sm">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-semibold font-serif text-gray-800">
                            {incident.title}
                          </h3>
                          <p className="text-sm text-gray-500 font-sans mt-1">{incident.date}</p>
                          <p className="text-gray-600 font-sans mt-2">{incident.description}</p>
                        </div>
                        <div
                          className={`flex items-center gap-1 px-3 py-1 rounded-full ${config.bgColor} text-white text-sm`}
                        >
                          <Icon className="w-4 h-4" />
                          {incident.status}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            ) : (
              <p className="text-center text-gray-500 font-sans">
                No recent incidents to display.
              </p>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
