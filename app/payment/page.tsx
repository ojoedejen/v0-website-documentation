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
        <div className="premium-gradient flex items-center justify-center py-24 sm:py-32 px-4">
          <div className="text-center bg-white/10 backdrop-blur-sm p-8 sm:p-12 rounded-3xl max-w-2xl mx-auto glass-card-strong">
            <CheckCircle className="w-16 h-16 text-[#FFCC00] mx-auto mb-6" />
            <h1 className="text-3xl sm:text-4xl font-bold font-serif text-white mb-4">
              Confirmation Received!
            </h1>
            <p className="text-lg text-blue-100 mb-8 font-sans">
              Thank you for your submission. Our team will verify your payment and contact you shortly.
            </p>
            <Button asChild className="btn-signature-primary px-8 py-3 text-lg font-serif font-bold rounded-xl">
              <Link href="/">Back to Home</Link>
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <TopBanner />
      <Header />
      <div className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-gray-800">
              Complete Your <span className="text-orange-500">Subscription</span>
            </h1>
            <p className="mt-4 text-lg text-gray-600 font-sans">
              You&apos;re one step away from lightning-fast internet.
            </p>
          </div>

          <div className="mb-12">
            <img
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/c4cdc1bb3_family-creating-digital-content.jpg"
              alt="Family enjoying internet"
              className="rounded-2xl shadow-xl w-full object-cover h-64 sm:h-80 md:h-96"
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Payment Options */}
            <div>
              <div className="bg-white p-8 shadow-lg rounded-2xl">
                <h2 className="text-2xl font-bold text-[#001BB7] font-serif mb-4">
                  Complete Your Subscription
                </h2>
                <a
                  href="https://pay.vultme.io/signatureconnectltd"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full btn-signature-primary py-4 text-lg mb-6">
                    Pay Now - Quick & Secure
                  </Button>
                </a>
                <p className="text-gray-500 text-center mb-4 font-sans">
                  Or scan to pay with one of our partners
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
                  <img
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/689536d778d0bd14e66d561d/8f4ee178c_image.png"
                    alt="Vult.me QR"
                    className="rounded-lg shadow-md w-full"
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <img
                      src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/689536d778d0bd14e66d561d/adb7ba220_image.png"
                      alt="Afrimoney QR"
                      className="rounded-lg shadow-md w-full"
                    />
                    <img
                      src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/689536d778d0bd14e66d561d/fb5c7d4be_image.png"
                      alt="Orange Money QR"
                      className="rounded-lg shadow-md w-full"
                    />
                  </div>
                </div>
                <div className="p-4 bg-gray-100 rounded-lg mt-6">
                  <h3 className="font-bold font-serif">Bank Deposit</h3>
                  <p className="font-sans text-sm">
                    Account Name: <strong>Signature-Connect Limited</strong>
                  </p>
                  <p className="font-sans text-sm">
                    Bank: <strong>Rokel Commercial Bank SL Ltd</strong>
                  </p>
                  <p className="font-sans text-sm">
                    Account No: <strong>0182978551102</strong>
                  </p>
                  <p className="font-sans text-sm">
                    Currency: <strong>SLE</strong>
                  </p>
                </div>
              </div>
            </div>

            {/* Manual Payment Form */}
            <div>
              <Card className="shadow-lg rounded-2xl">
                <CardHeader>
                  <CardTitle className="text-2xl font-serif text-[#090040]">
                    Confirm Your Payment
                  </CardTitle>
                  <CardDescription className="font-sans">
                    Once you&apos;ve paid, submit your details here for manual payments only.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {[
                      { id: 'fullName', label: 'Full Name (as shown on the invoice)', type: 'text' },
                      { id: 'address', label: 'Address', type: 'text' },
                      { id: 'contactNumber', label: 'Contact Number', type: 'tel', placeholder: '+232 XX XXX XXXX' },
                      { id: 'paymentReference', label: 'Payment Reference', type: 'text' },
                      { id: 'purposeOfPayment', label: 'Purpose of Payment', type: 'text' },
                    ].map((f) => (
                      <div key={f.id}>
                        <label htmlFor={f.id} className="block text-sm font-medium text-gray-700 mb-1 font-sans">
                          {f.label}
                        </label>
                        <Input
                          id={f.id}
                          type={f.type}
                          value={formData[f.id as keyof typeof formData]}
                          onChange={handleInputChange}
                          required
                          placeholder={f.placeholder}
                        />
                      </div>
                    ))}
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full btn-signature-primary py-3 text-base"
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
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-[#001BB7] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    }>
      <PaymentContent />
    </Suspense>
  )
}
