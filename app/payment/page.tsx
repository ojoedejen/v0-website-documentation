"use client"

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import Header from '@/components/header'
import Footer from '@/components/footer'
import TopBanner from '@/components/top-banner'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { CheckCircle } from 'lucide-react'

function PaymentContent() {
  const searchParams = useSearchParams()
  const [plan, setPlan] = useState({ name: '', price: '', speed: '' })
  const [formData, setFormData] = useState({
    fullName: '',
    address: '',
    contactNumber: '',
    paymentReference: '',
    purposeOfPayment: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    setPlan({
      name: searchParams.get('plan') || 'N/A',
      price: searchParams.get('price') || '0',
      speed: searchParams.get('speed') || 'N/A',
    })
  }, [searchParams])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    const message = `New Manual Payment Confirmation - Signature Connect:
Plan Name: ${plan.name}
Price: NLe ${plan.price}
Full Name: ${formData.fullName}
Address: ${formData.address}
Contact Number: ${formData.contactNumber}
Payment Reference: ${formData.paymentReference}
Purpose of Payment: ${formData.purposeOfPayment}`
    window.open(`https://wa.me/23233233620?text=${encodeURIComponent(message)}`, '_blank')
    setIsSubmitted(true)
    setIsSubmitting(false)
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-white">
        <TopBanner />
        <Header />
        <div className="premium-gradient flex items-center justify-center py-32 sm:py-40 px-4 min-h-[70vh]">
          <div className="text-center bg-white/10 backdrop-blur-sm p-10 sm:p-14 rounded-3xl max-w-2xl mx-auto glass-card-strong">
            <CheckCircle className="w-20 h-20 text-[#FFB547] mx-auto mb-8" />
            <h1 className="text-4xl sm:text-5xl font-bold font-serif text-white mb-6">
              Confirmation Received!
            </h1>
            <p className="text-xl text-[#bdb8d8] mb-10 font-sans">
              Thank you for your submission. Our team will verify your payment and contact you shortly.
            </p>
            <Button asChild className="btn-signature-primary px-10 py-4 text-lg font-serif font-bold rounded-xl">
              <Link href="/">Back to Home</Link>
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#f8f7ff]">
      <TopBanner />
      <Header />
      <div className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-serif text-[#0f0d1e]">
              Complete Your <span className="gradient-text">Subscription</span>
            </h1>
            <p className="mt-6 text-xl text-[#6d6888] font-sans">
              You&apos;re one step away from lightning-fast internet.
            </p>
          </div>

          <div className="mb-16">
            <img
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/c4cdc1bb3_family-creating-digital-content.jpg"
              alt="Family enjoying internet"
              className="rounded-2xl w-full object-cover h-64 sm:h-80 md:h-96"
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
            {/* Payment Options */}
            <div>
              <div className="bg-white p-10 rounded-2xl border border-[#e8e5f5]">
                <h2 className="text-2xl font-bold text-[#0f0d1e] font-serif mb-6">
                  Complete Your Subscription
                </h2>
                <a
                  href="https://pay.vultme.io/signatureconnectltd"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full btn-signature-primary py-4 text-lg mb-8">
                    Pay Now - Quick & Secure
                  </Button>
                </a>
                <p className="text-[#6d6888] text-center mb-6 font-sans">
                  Or scan to pay with one of our partners
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 items-center">
                  <img
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/689536d778d0bd14e66d561d/8f4ee178c_image.png"
                    alt="Vult.me QR"
                    className="rounded-lg w-full"
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <img
                      src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/689536d778d0bd14e66d561d/adb7ba220_image.png"
                      alt="Afrimoney QR"
                      className="rounded-lg w-full"
                    />
                    <img
                      src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/689536d778d0bd14e66d561d/fb5c7d4be_image.png"
                      alt="Orange Money QR"
                      className="rounded-lg w-full"
                    />
                  </div>
                </div>
                <div className="p-5 bg-[#f8f7ff] rounded-lg mt-8 border border-[#e8e5f5]">
                  <h3 className="font-bold font-serif text-[#0f0d1e]">Bank Deposit</h3>
                  <p className="font-sans text-sm text-[#6d6888]">
                    Account Name: <strong className="text-[#0f0d1e]">Signature-Connect Limited</strong>
                  </p>
                  <p className="font-sans text-sm text-[#6d6888]">
                    Bank: <strong className="text-[#0f0d1e]">Rokel Commercial Bank SL Ltd</strong>
                  </p>
                  <p className="font-sans text-sm text-[#6d6888]">
                    Account No: <strong className="text-[#0f0d1e]">0182978551102</strong>
                  </p>
                  <p className="font-sans text-sm text-[#6d6888]">
                    Currency: <strong className="text-[#0f0d1e]">SLE</strong>
                  </p>
                </div>
              </div>
            </div>

            {/* Manual Payment Form */}
            <div>
              <Card className="rounded-2xl border border-[#e8e5f5]">
                <CardHeader>
                  <CardTitle className="text-2xl font-serif text-[#0f0d1e]">
                    Confirm Your Payment
                  </CardTitle>
                  <CardDescription className="font-sans text-[#6d6888]">
                    Once you&apos;ve paid, submit your details here for manual payments only.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {[
                      { id: 'fullName', label: 'Full Name (as shown on the invoice)', type: 'text' },
                      { id: 'address', label: 'Address', type: 'text' },
                      { id: 'contactNumber', label: 'Contact Number', type: 'tel', placeholder: '+232 XX XXX XXXX' },
                      { id: 'paymentReference', label: 'Payment Reference', type: 'text' },
                      { id: 'purposeOfPayment', label: 'Purpose of Payment', type: 'text' },
                    ].map((f) => (
                      <div key={f.id}>
                        <label htmlFor={f.id} className="block text-sm font-medium text-[#342f50] mb-2 font-sans">
                          {f.label}
                        </label>
                        <Input
                          id={f.id}
                          type={f.type}
                          value={formData[f.id as keyof typeof formData]}
                          onChange={handleInputChange}
                          required
                          placeholder={f.placeholder}
                          className="border-[#e8e5f5]"
                        />
                      </div>
                    ))}
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full btn-signature-primary py-4 text-base"
                    >
                      {isSubmitting ? 'Submitting...' : 'Confirm Manual Payment'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default function PaymentPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-[#f8f7ff]">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-[#7C5CF6] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-[#6d6888]">Loading...</p>
        </div>
      </div>
    }>
      <PaymentContent />
    </Suspense>
  )
}
