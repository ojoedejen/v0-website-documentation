"use client"

import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="premium-gradient text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Company Info */}
          <div className="md:col-span-2 lg:col-span-1 text-center md:text-left">
            <img
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/689536d778d0bd14e66d561d/93ce435ab_Artboard115x.png"
              alt="Signature Connect Logo"
              className="h-20 sm:h-32 w-auto mx-auto md:mx-0 mb-4"
            />
            <p className="text-blue-100 mb-6 font-sans leading-relaxed text-sm">
              Sierra Leone&apos;s leading internet service provider since 2022, delivering fast, reliable, and affordable connectivity through Fiber, Microwave, and Starlink.
            </p>
            <div className="flex justify-center md:justify-start gap-4">
              <a
                href="https://www.facebook.com/signatureconnectsl"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:bg-[#FFCC00] hover:text-[#001BB7] transition-all"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:bg-[#FFCC00] hover:text-[#001BB7] transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:bg-[#FFCC00] hover:text-[#001BB7] transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:bg-[#FFCC00] hover:text-[#001BB7] transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:col-span-2 lg:col-span-2 text-center sm:text-left">
            <div>
              <h4 className="text-lg font-bold font-serif mb-6 gradient-text">Our Services</h4>
              <ul className="space-y-3 text-blue-100 font-sans text-sm">
                {['High-Speed Internet', 'In-Home WiFi', 'Starlink Microwave', 'Business Solutions', 'VPN & IP Protection'].map((s) => (
                  <li key={s}>
                    <a href="#" className="hover:text-[#FFCC00] transition-colors">{s}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold font-serif mb-6 gradient-text">Customer Support</h4>
              <ul className="space-y-3 text-blue-100 font-sans text-sm">
                {['24/7 Support', 'Technical NOC', 'Billing Support', 'Installation Guide', 'Customer Portal'].map((s) => (
                  <li key={s}>
                    <a href="#" className="hover:text-[#FFCC00] transition-colors">{s}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div className="text-center md:text-left lg:col-span-1">
            <h4 className="text-lg font-bold font-serif mb-6 gradient-text">Contact Us</h4>
            <div className="space-y-4 text-blue-100 font-sans text-sm">
              <a
                href="tel:+23233233620"
                className="flex items-center justify-center md:justify-start glass-card p-3 rounded-xl gap-3 hover:bg-white/10 transition-colors"
              >
                <Phone className="w-5 h-5 text-[#00D4FF]" />
                <span>+232 33 23 36 20</span>
              </a>
              <a
                href="tel:+23272568290"
                className="flex items-center justify-center md:justify-start glass-card p-3 rounded-xl gap-3 hover:bg-white/10 transition-colors"
              >
                <Phone className="w-5 h-5 text-[#00D4FF]" />
                <span>+232 72568290</span>
              </a>
              <a
                href="mailto:info@signature-connect.com"
                className="flex items-center justify-center md:justify-start glass-card p-3 rounded-xl gap-3 hover:bg-white/10 transition-colors"
              >
                <Mail className="w-5 h-5 text-[#00D4FF]" />
                <span className="break-all text-xs">info@signature-connect.com</span>
              </a>
              <div className="flex items-start justify-center md:justify-start glass-card p-3 rounded-xl gap-3">
                <MapPin className="w-5 h-5 mt-1 text-[#00D4FF]" />
                <span className="text-xs">
                  92 Regent Road, Hill Station
                  <br />
                  Freetown, Sierra Leone
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 sm:mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-blue-100 text-xs font-sans text-center md:text-left">
            &copy; 2025 Signature Connect. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-blue-100 font-sans">
            <a href="#" className="hover:text-[#FFCC00]">Terms of Service</a>
            <a href="#" className="hover:text-[#FFCC00]">Privacy Policy</a>
            <a href="#" className="hover:text-[#FFCC00]">Fair Usage Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
