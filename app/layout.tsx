import type { Metadata, Viewport } from 'next'
import { Outfit, Sora } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const outfit = Outfit({ 
  subsets: ["latin"],
  variable: '--font-outfit',
  display: 'swap',
})

const sora = Sora({ 
  subsets: ["latin"],
  variable: '--font-sora',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Signature Connect - Premium Internet Service Provider | Sierra Leone',
  description: 'Sierra Leone\'s leading internet service provider since 2022. Fast, reliable fiber, microwave, and Starlink connectivity for homes and businesses.',
  keywords: 'internet, ISP, Sierra Leone, fiber, broadband, Freetown, Signature Connect, high-speed internet',
  authors: [{ name: 'Signature Connect' }],
  openGraph: {
    title: 'Signature Connect - Premium Internet Service Provider',
    description: 'Sierra Leone\'s leading ISP delivering fast, reliable connectivity through Fiber, Microwave, and Starlink.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#7C5CF6',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${sora.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
