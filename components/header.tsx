"use client"

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Globe, HelpCircle, Menu, X } from 'lucide-react'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Plans', path: '/plans' },
  { name: 'Coverage', path: '/coverage' },
  { name: 'Speed Test', path: '/speed-test' },
  { name: 'Network Status', path: '/network-status' },
  { name: 'Support', path: '/support' },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-[#0f0d1e] text-white py-3 sm:py-4 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-[#7C5CF6]/10 to-[#0f0d1e]" />
      <div className="max-w-7xl mx-auto flex items-center justify-between relative z-10">
        <div className="flex items-center">
          <Link href="/">
            <img
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/689536d778d0bd14e66d561d/93ce435ab_Artboard115x.png"
              alt="Signature Connect Logo"
              className="h-20 sm:h-32 w-auto hover:scale-105 transition-transform"
            />
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className="hover:text-[#FFB547] transition-colors font-medium font-serif relative group"
            >
              {item.name}
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#FFB547] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-3 lg:gap-4">
          <Globe className="w-5 h-5 text-[#9370ff] cursor-pointer" />
          <HelpCircle className="w-5 h-5 text-[#9370ff] cursor-pointer" />
          <Button asChild className="btn-signature-outline rounded-full px-6 py-2 font-serif font-semibold">
            <a href="https://wa.me/23233233620" target="_blank" rel="noopener noreferrer">
              Contact Sales
            </a>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#0f0d1e] border-t border-white/10 z-50">
          <nav className="px-4 py-6 space-y-4">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className="block hover:text-[#FFB547] font-medium font-serif py-2 border-b border-white/10 hover:bg-white/5 px-2 rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 flex justify-end">
              <Button asChild className="btn-signature-outline rounded-full px-6 py-2 font-serif font-semibold">
                <a href="https://wa.me/23233233620" target="_blank" rel="noopener noreferrer">
                  Contact Sales
                </a>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
