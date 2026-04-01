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
      <section className="py-14 lg:py-24 relative z-0 premium-gradient">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative text-center">
          <h1 className="max-w-2xl mx-auto font-serif font-bold text-4xl text-white mb-5 md:text-5xl md:leading-normal">
            Explore Our <span className="gradient-text">Network Coverage</span>
          </h1>
          <p className="max-w-xl mx-auto text-base font-normal leading-7 text-blue-100 mb-9 font-sans">
            Enter your address to see if Signature Connect&apos;s premium fiber service is available in your area.
          </p>
          <form onSubmit={handleCheckCoverage} className="max-w-2xl mx-auto">
            <div className="relative">
              <Input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Enter your address (e.g., Wilkinson Road, Freetown, Sierra Leone)"
                className="w-full signature-input rounded-full h-14 pl-6 pr-40"
              />
              <Button
                type="submit"
                disabled={loading}
                className="btn-signature-primary absolute right-2 top-1/2 -translate-y-1/2 rounded-full px-6 py-2 h-10"
              >
                {loading ? 'Checking...' : 'Check Now'}
              </Button>
            </div>
          </form>
          {result && (
            <div
              className={`mt-6 p-4 rounded-lg max-w-2xl mx-auto text-white font-semibold ${
                result.available ? 'bg-green-500/80' : 'bg-red-500/80'
              }`}
            >
              <div className="flex items-center justify-center">
                {result.available ? (
                  <CheckCircle className="w-6 h-6 mr-2" />
                ) : (
                  <XCircle className="w-6 h-6 mr-2" />
                )}
                {result.message}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Map Section */}
      <section className="py-14 lg:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl text-center text-[#001BB7] font-bold mb-10">
            Our Rapidly Expanding Network
          </h2>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl h-96 lg:h-[500px]">
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
      <section className="py-14 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gray-50 rounded-2xl">
              <div className="w-16 h-16 rounded-full bg-[#001BB7] mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl text-white font-bold">F</span>
              </div>
              <h3 className="text-xl font-bold font-serif text-[#090040] mb-2">Fiber Coverage</h3>
              <p className="text-gray-600 font-sans">
                High-speed fiber optic connections available in Freetown and major urban centers.
              </p>
            </div>
            <div className="text-center p-8 bg-gray-50 rounded-2xl">
              <div className="w-16 h-16 rounded-full bg-[#FEA405] mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl text-white font-bold">M</span>
              </div>
              <h3 className="text-xl font-bold font-serif text-[#090040] mb-2">Microwave Coverage</h3>
              <p className="text-gray-600 font-sans">
                Wireless microwave links connecting Bo, Kenema, and surrounding regions.
              </p>
            </div>
            <div className="text-center p-8 bg-gray-50 rounded-2xl">
              <div className="w-16 h-16 rounded-full bg-[#00C853] mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl text-white font-bold">S</span>
              </div>
              <h3 className="text-xl font-bold font-serif text-[#090040] mb-2">Starlink Coverage</h3>
              <p className="text-gray-600 font-sans">
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
