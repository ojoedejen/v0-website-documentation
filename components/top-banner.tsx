"use client"

import { Phone } from 'lucide-react'

export default function TopBanner() {
  return (
    <div className="bg-gradient-to-r from-[#FFB547] to-[#ffcc5c] text-[#0f0d1e] py-2 sm:py-3 px-2 sm:px-4">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 text-xs sm:text-sm font-bold font-serif uppercase tracking-wider">
          <div className="flex items-center gap-1 sm:gap-2">
            <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>For Feedback please Only Call: +232 7634 0991 | WhatsApp Only: +1 (240) 605-2966 </span>
          </div>
        </div>
      </div>
    </div>
  )
}
