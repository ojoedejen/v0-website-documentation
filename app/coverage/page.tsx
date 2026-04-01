"use client"

import { useState } from 'react'
import TopBanner from '@/components/top-banner'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { XCircle, CheckCircle } from 'lucide-react'

export default function CoveragePage() {
  const [address, setAddress] = useState('')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<{ available: boolean; message: string } | null>(null)

  const handleCheckCoverage = (e: React.FormEvent) => {
    e.preventDefault()
    if (!address) {
      setResult({ available: false, message: 'Please enter an address to check.' })
      return
    }
    setLoading(true)
    setResult(null)
    setTimeout(() => {
      if (address.trim().length > 0) {
        setResult({
          available: true,
          message:
            'Great news! Signature Connect is available at your location via our Starlink (Microwave) network covering all of Sierra Leone.',
        })
      } else {
        setResult({ available: false, message: 'Please enter a valid Sierra Leone address.' })
      }
      setLoading(false)
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-white">
      <TopBanner />
      <Header />

      {/* Hero with Coverage Check */}
      <section className="py-20 lg:py-32 min-h-[60vh] flex items-center relative z-0 premium-gradient">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative text-center w-full">
          <h1 className="max-w-2xl mx-auto font-serif font-bold text-5xl text-white mb-8 md:text-6xl md:leading-normal">
            Explore Our <span className="gradient-text">Network Coverage</span>
          </h1>
          <p className="max-w-xl mx-auto text-lg font-normal leading-7 text-[#bdb8d8] mb-12 font-sans">
            Enter your address to see if Signature Connect&apos;s premium fiber service is available in your area.
          </p>
          <form onSubmit={handleCheckCoverage} className="max-w-2xl mx-auto">
            <div className="relative">
              <Input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Enter your address (e.g., Wilkinson Road, Freetown, Sierra Leone)"
                className="w-full signature-input rounded-full h-16 pl-8 pr-44"
              />
              <Button
                type="submit"
                disabled={loading}
                className="btn-signature-primary absolute right-2 top-1/2 -translate-y-1/2 rounded-full px-8 py-3 h-12"
              >
                {loading ? 'Checking...' : 'Check Now'}
              </Button>
            </div>
          </form>
          {result && (
            <div
              className={`mt-8 p-5 rounded-lg max-w-2xl mx-auto text-white font-semibold ${
                result.available ? 'bg-[#10b981]/80' : 'bg-[#f43f5e]/80'
              }`}
            >
              <div className="flex items-center justify-center">
                {result.available ? (
                  <CheckCircle className="w-6 h-6 mr-3" />
                ) : (
                  <XCircle className="w-6 h-6 mr-3" />
                )}
                {result.message}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 lg:py-32 min-h-screen flex items-center bg-[#f8f7ff]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <h2 className="font-serif text-4xl sm:text-5xl text-center text-[#0f0d1e] font-bold mb-12">
            Our Rapidly Expanding Network
          </h2>
          <div className="relative rounded-2xl overflow-hidden h-96 lg:h-[550px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2020767.9112163887!2d-13.157359968786485!3d8.42008430330613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xf0106183aabf343%3A0x5369e9cdc72cf719!2sSierra%20Leone!5e0!3m2!1sen!2ssl!4v1758162872827!5m2!1sen!2ssl"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sierra Leone Coverage Map"
            />
          </div>
        </div>
      </section>

      {/* Coverage Info */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-10">
            <div className="text-center p-10 bg-[#f8f7ff] rounded-2xl border border-[#e8e5f5]">
              <div className="w-16 h-16 rounded-full bg-[#7C5CF6] mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl text-white font-bold">F</span>
              </div>
              <h3 className="text-xl font-bold font-serif text-[#0f0d1e] mb-4">Fiber Coverage</h3>
              <p className="text-[#6d6888] font-sans">
                High-speed fiber optic connections available in Freetown and major urban centers.
              </p>
            </div>
            <div className="text-center p-10 bg-[#f8f7ff] rounded-2xl border border-[#e8e5f5]">
              <div className="w-16 h-16 rounded-full bg-[#FFB547] mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl text-[#0f0d1e] font-bold">M</span>
              </div>
              <h3 className="text-xl font-bold font-serif text-[#0f0d1e] mb-4">Microwave Coverage</h3>
              <p className="text-[#6d6888] font-sans">
                Wireless microwave links connecting Bo, Kenema, and surrounding regions.
              </p>
            </div>
            <div className="text-center p-10 bg-[#f8f7ff] rounded-2xl border border-[#e8e5f5]">
              <div className="w-16 h-16 rounded-full bg-[#10b981] mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl text-white font-bold">S</span>
              </div>
              <h3 className="text-xl font-bold font-serif text-[#0f0d1e] mb-4">Starlink Coverage</h3>
              <p className="text-[#6d6888] font-sans">
                Satellite-powered internet reaching even the most remote locations nationwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
