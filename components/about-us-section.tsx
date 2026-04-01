"use client"

const stats = [
  { value: '3+', label: 'Years of Excellence' },
  { value: '70+', label: 'Dedicated Staff' },
  { value: '24/7', label: 'Premium Support' },
]

export default function AboutUsSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#090040]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <img
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/c4cdc1bb3_family-creating-digital-content.jpg"
              alt="Family enjoying internet connectivity"
              className="rounded-2xl shadow-2xl w-full object-cover h-80 sm:h-96 lg:h-[500px]"
            />
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-[#FFCC00] to-[#FEA405] rounded-2xl p-6 shadow-xl hidden sm:block">
              <div className="text-4xl font-bold text-[#001BB7] font-serif">99.99%</div>
              <div className="text-sm text-[#001BB7] font-medium">Network Uptime</div>
            </div>
          </div>

          {/* Content */}
          <div className="text-white">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif mb-6">
              About <span className="gradient-text">Signature Connect</span>
            </h2>
            <p className="text-blue-100 text-base sm:text-lg leading-relaxed mb-8 font-sans">
              At Signature Connect, we are Sierra Leone&apos;s leading internet service provider, delivering cutting-edge connectivity solutions since 2022. Founded and owned by Ibrahim Misheal Kallon, an indigenous Sierra Leonean entrepreneur, we are committed to bridging the digital divide across our nation.
            </p>
            <p className="text-blue-100 text-base sm:text-lg leading-relaxed mb-8 font-sans">
              We believe that fast, reliable internet access is no longer a luxury but a necessity. Our mission is to connect Sierra Leone to the world with enterprise-grade infrastructure and premium customer service.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 glass-card rounded-xl">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold gradient-text font-serif">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-blue-100 mt-1 font-sans">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
