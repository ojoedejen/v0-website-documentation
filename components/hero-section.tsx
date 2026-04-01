"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card } from '@/components/ui/card'

export default function HeroSection() {
  const [activeTab, setActiveTab] = useState('Home')
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    phone: '',
    address: '',
    location_address: '',
    service_type: 'Home',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value, service_type: activeTab }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    const message = `New Lead from Signature Connect Website:
Service Type: ${formData.service_type}
First Name: ${formData.first_name}
Last Name: ${formData.last_name}
Phone: ${formData.phone}
Address: ${formData.address}
Location Address: ${formData.location_address}`
    window.open(`https://wa.me/23233233620?text=${encodeURIComponent(message)}`, '_blank')
    setFormData({
      first_name: '',
      last_name: '',
      phone: '',
      address: '',
      location_address: '',
      service_type: activeTab,
    })
    alert("Your request has been prepared! Please click 'Send' in WhatsApp to submit.")
    setIsSubmitting(false)
  }

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat overflow-hidden min-h-screen flex items-center"
      style={{
        backgroundImage:
          "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/318c114f9_image.png')",
      }}
    >
      <div className="absolute inset-0 bg-black/60 z-0" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24 xl:py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Left Content */}
          <div className="text-white space-y-6 lg:space-y-8 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-serif leading-tight">
              Premium{' '}
              <span className="gradient-text block mt-2">Fiber Internet Service</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-blue-100 max-w-lg mx-auto lg:mx-0 font-sans leading-relaxed">
              Enjoy lightning-fast speeds and reliable connectivity with our advanced internet solutions. 24/7 dedicated support.
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 glass-card">
              <div className="text-2xl sm:text-3xl xl:text-4xl font-bold gradient-text mb-2">
                Plans Starting at NLe 700
              </div>
              <div className="text-sm sm:text-base text-blue-100">
                10 Mbps Kombra &bull; Unlimited Data &bull; Installation NLe 1,000
              </div>
            </div>
            <Button className="btn-signature-primary px-6 sm:px-10 py-3 sm:py-4 text-sm sm:text-lg font-serif font-bold rounded-xl w-full sm:w-auto">
              Get Connected Today
            </Button>
          </div>

          {/* Right Form */}
          <div className="flex justify-center lg:justify-end mt-8 lg:mt-0">
            <Card className="w-full max-w-md glass-card-strong p-4 sm:p-6 lg:p-8 rounded-3xl shadow-2xl tech-glow border-0">
              {/* Tabs */}
              <div className="flex bg-gradient-to-r from-[#FFCC00] to-[#FEA405] rounded-full p-1 mb-6 sm:mb-8">
                {['Home', 'Business', 'Institution'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex-1 py-2 sm:py-3 text-xs sm:text-sm font-bold font-serif rounded-full transition-all uppercase tracking-wider ${
                      activeTab === tab
                        ? 'bg-white text-[#001BB7] shadow-lg'
                        : 'text-[#001BB7] hover:bg-white/10'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {[
                    ['first_name', 'First Name *'],
                    ['last_name', 'Last Name *'],
                  ].map(([field, label]) => (
                    <div key={field}>
                      <label className="block text-xs sm:text-sm font-semibold font-serif text-white mb-2">
                        {label}
                      </label>
                      <Input
                        value={formData[field as keyof typeof formData]}
                        onChange={(e) => handleInputChange(field, e.target.value)}
                        className="signature-input rounded-xl border-2 h-10 sm:h-12"
                        required
                      />
                    </div>
                  ))}
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-semibold font-serif text-white mb-2">
                    Phone *
                  </label>
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="signature-input rounded-xl border-2 h-10 sm:h-12"
                    placeholder="+232 XX XXX XXXX"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-semibold font-serif text-white mb-2">
                    Address *
                  </label>
                  <Input
                    type="text"
                    value={formData.address}
                    onChange={(e) => handleInputChange('address', e.target.value)}
                    className="signature-input rounded-xl border-2 h-10 sm:h-12"
                    placeholder="Your residential address"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-semibold font-serif text-white mb-2">
                    Location Address *
                  </label>
                  <Input
                    value={formData.location_address}
                    onChange={(e) => handleInputChange('location_address', e.target.value)}
                    className="signature-input rounded-xl border-2 h-12 sm:h-14"
                    placeholder="Enter your location in Sierra Leone"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-signature-primary py-3 sm:py-4 rounded-xl font-serif font-bold mt-6 uppercase tracking-wider"
                >
                  {isSubmitting ? 'Checking Coverage...' : 'Check Coverage & Get Quote'}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
