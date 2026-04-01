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
      <div className="absolute inset-0 bg-[#0f0d1e]/70 z-0" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28 xl:py-36 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-24 items-center">
          {/* Left Content */}
          <div className="text-white space-y-8 lg:space-y-12 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold font-serif leading-tight">
              Premium{' '}
              <span className="gradient-text block mt-3">Fiber Internet Service</span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl text-[#bdb8d8] max-w-xl mx-auto lg:mx-0 font-sans leading-relaxed">
              Enjoy lightning-fast speeds and reliable connectivity with our advanced internet solutions. 24/7 dedicated support.
            </p>
          </div>

          {/* Right Form */}
          <div className="flex justify-center lg:justify-end mt-8 lg:mt-0">
            <Card className="w-full max-w-md glass-card-strong p-6 sm:p-8 lg:p-10 rounded-3xl border-0">
              {/* Tabs */}
              <div className="flex bg-gradient-to-r from-[#FFB547] to-[#ffcc5c] rounded-full p-1 mb-8 sm:mb-10">
                {['Home', 'Business', 'Institution'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex-1 py-3 sm:py-4 text-xs sm:text-sm font-bold font-serif rounded-full transition-all uppercase tracking-wider ${
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
              <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
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
                        className="signature-input rounded-xl border-2 h-12 sm:h-14"
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
                    className="signature-input rounded-xl border-2 h-12 sm:h-14"
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
                    className="signature-input rounded-xl border-2 h-12 sm:h-14"
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
                    className="signature-input rounded-xl border-2 h-14 sm:h-16"
                    placeholder="Enter your location in Sierra Leone"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-signature-primary py-4 sm:py-5 rounded-xl font-serif font-bold mt-8 uppercase tracking-wider text-base"
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
