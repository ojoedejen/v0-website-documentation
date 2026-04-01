"use client"

import { Phone } from 'lucide-react'

export default function TopBanner() {
  return (
    <div className="bg-gradient-to-r from-[#FFCC00] to-[#FEA405] text-[#001BB7] py-2 sm:py-3 px-2 sm:px-4">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 text-xs sm:text-sm font-bold font-serif uppercase tracking-wider">
          <div className="flex items-center gap-1 sm:gap-2">
            <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>For Feedback please call or WhatsApp +23276340991</span>
          </div>
        </div>
      </div>
    </div>
  )
}
