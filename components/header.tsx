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
    <header className="text-white py-2 sm:py-2.5 px-3 sm:px-4 relative" style={{ backgroundColor: '#09004c' }}>
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 to-transparent" />
      <div className="max-w-7xl mx-auto flex items-center justify-between relative z-10">
        <div className="flex items-center">
          <Link href="/">
            <img
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/689536d778d0bd14e66d561d/93ce435ab_Artboard115x.png"
              alt="Signature Connect Logo"
              className="h-12 sm:h-16 lg:h-20 w-auto hover:scale-105 transition-transform"
            />
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-6">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className="text-sm lg:text-base hover:text-yellow-300 transition-colors font-medium font-serif relative group"
            >
              {item.name}
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-300 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-2 lg:gap-3">
          <Globe className="w-4 h-4 lg:w-5 lg:h-5 text-yellow-300 cursor-pointer" />
          <HelpCircle className="w-4 h-4 lg:w-5 lg:h-5 text-yellow-300 cursor-pointer" />
          <Button asChild className="bg-yellow-400 text-blue-600 hover:bg-yellow-300 rounded-full px-4 sm:px-5 lg:px-6 py-1.5 sm:py-2 font-serif font-semibold text-xs sm:text-sm">
            <a href="https://wa.me/23233233620" target="_blank" rel="noopener noreferrer">
              Contact Sales
            </a>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-1.5 hover:bg-white/10 rounded-lg transition-colors"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 border-t border-white/10 z-50" style={{ backgroundColor: '#09004c' }}>
          <nav className="px-3 sm:px-4 py-4 space-y-2">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className="block text-sm hover:text-yellow-300 font-medium font-serif py-2 border-b border-white/10 hover:bg-white/5 px-2 rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-3 flex justify-end">
              <Button asChild className="bg-yellow-400 text-blue-600 hover:bg-yellow-300 rounded-full px-4 py-1.5 font-serif font-semibold text-xs">
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
