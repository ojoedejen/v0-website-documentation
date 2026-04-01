import type { Metadata, Viewport } from 'next'
import { Inter, Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Signature Connect - Premium Internet Service Provider | Sierra Leone',
  description: 'Sierra Leone\'s leading internet service provider since 2022. Fast, reliable fiber, microwave, and Starlink connectivity for homes and businesses. Plans starting at NLe 700/month.',
  keywords: 'internet, ISP, Sierra Leone, fiber, broadband, Freetown, Signature Connect, high-speed internet',
  authors: [{ name: 'Signature Connect' }],
  openGraph: {
    title: 'Signature Connect - Premium Internet Service Provider',
    description: 'Sierra Leone\'s leading ISP delivering fast, reliable connectivity through Fiber, Microwave, and Starlink.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#001BB7',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
