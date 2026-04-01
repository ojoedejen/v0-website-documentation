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
      className="relative bg-cover bg-center bg-no-repeat overflow-hidden flex items-center"
      style={{
        backgroundImage:
          "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/318c114f9_image.png')",
      }}
    >
      <div className="absolute inset-0 bg-black/60 z-0" />
      <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-3 sm:py-4 lg:py-5 w-full">
        <div className="grid lg:grid-cols-2 gap-3 lg:gap-4 items-start">
          {/* Left Content */}
          <div className="text-white space-y-2 lg:space-y-3 text-center lg:text-left">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold font-serif leading-tight">
              Premium{' '}
              <span className="gradient-text block mt-1">Fiber Internet Service</span>
            </h1>
            <p className="text-xs sm:text-sm lg:text-base text-blue-100 max-w-lg mx-auto lg:mx-0 font-sans leading-relaxed">
              Enjoy lightning-fast speeds and reliable connectivity with our advanced internet solutions. 24/7 dedicated support.
            </p>
          </div>

          {/* Right Form */}
          <div className="flex justify-center lg:justify-end mt-2 lg:mt-0">
            <Card className="w-full max-w-sm glass-card-strong p-2 sm:p-3 lg:p-4 rounded-2xl shadow-2xl tech-glow border-0">
              {/* Tabs */}
              <div className="flex bg-gradient-to-r from-[#FFCC00] to-[#FEA405] rounded-full p-1 mb-2 sm:mb-3">
                {['Home', 'Business', 'Institution'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex-1 py-1.5 sm:py-2 text-xs font-bold font-serif rounded-full transition-all uppercase tracking-wider ${
                      activeTab === tab
                        ? 'bg-white text-[#0f0d1e]'
                        : 'text-[#0f0d1e] hover:bg-white/20'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-1.5 sm:space-y-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2">
                  {[
                    ['first_name', 'First Name *'],
                    ['last_name', 'Last Name *'],
                  ].map(([field, label]) => (
                    <div key={field}>
                      <label className="block text-xs font-semibold font-serif text-white mb-1">
                        {label}
                      </label>
                      <Input
                        value={formData[field as keyof typeof formData]}
                        onChange={(e) => handleInputChange(field, e.target.value)}
                        className="signature-input rounded-lg border-2 h-8 sm:h-9"
                        required
                      />
                    </div>
                  ))}
                </div>
                <div>
                  <label className="block text-xs font-semibold font-serif text-white mb-1">
                    Phone *
                  </label>
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="signature-input rounded-lg border-2 h-8 sm:h-9"
                    placeholder="+232 XX XXX XXXX"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold font-serif text-white mb-1">
                    Address *
                  </label>
                  <Input
                    type="text"
                    value={formData.address}
                    onChange={(e) => handleInputChange('address', e.target.value)}
                    className="signature-input rounded-lg border-2 h-8 sm:h-9"
                    placeholder="Your residential address"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold font-serif text-white mb-1">
                    Location Address *
                  </label>
                  <Input
                    value={formData.location_address}
                    onChange={(e) => handleInputChange('location_address', e.target.value)}
                    className="signature-input rounded-lg border-2 h-8 sm:h-9"
                    placeholder="Enter your location in Sierra Leone"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-signature-primary py-2 sm:py-2 rounded-lg font-serif font-bold mt-1 uppercase tracking-wider text-xs"
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
