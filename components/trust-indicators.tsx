"use client"

const partnerLogos = [
  { src: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/689536d778d0bd14e66d561d/baf5f44fd_image.png', alt: 'ZOODLABS' },
  { src: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/689536d778d0bd14e66d561d/4c15af5fb_image.png', alt: 'Metro' },
  { src: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/689536d778d0bd14e66d561d/2e8a6cf68_image.png', alt: 'Limkokwing University' },
  { src: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/689536d778d0bd14e66d561d/4a08edf33_image.png', alt: 'International Monetary Fund' },
]

export default function TrustIndicators() {
  return (
    <section className="bg-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-center text-xl sm:text-2xl font-semibold font-serif text-[#0f0d1e] mb-12">
          Trusted by Leading Organizations
        </h3>
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16 lg:gap-20">
          {partnerLogos.map((logo, index) => (
            <div
              key={index}
              className="h-16 sm:h-20 lg:h-24 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-h-full w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
