"use client"

const stats = [
  { value: '5+', label: 'Years of Excellence' },
  { value: '15+', label: 'Dedicated Staff' },
  { value: '24/7', label: 'Premium Support' },
]

export default function AboutUsSection() {
  return (
    <section className="py-24 sm:py-32 lg:py-40 min-h-screen flex items-center bg-[#0f0d1e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <div className="relative">
            <img
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/c4cdc1bb3_family-creating-digital-content.jpg"
              alt="Family enjoying internet connectivity"
              className="rounded-2xl w-full object-cover h-80 sm:h-96 lg:h-[550px]"
            />
            <div className="absolute -bottom-8 -right-8 bg-gradient-to-r from-[#FFB547] to-[#ffcc5c] rounded-2xl p-8 hidden sm:block">
              <div className="text-5xl font-bold text-[#0f0d1e] font-serif">99.99%</div>
              <div className="text-sm text-[#0f0d1e] font-medium">Network Uptime</div>
            </div>
          </div>

          {/* Content */}
          <div className="text-white">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif mb-8">
              About <span className="gradient-text">Signature Connect</span>
            </h2>
            <p className="text-[#bdb8d8] text-lg sm:text-xl leading-relaxed mb-10 font-sans">
              At Signature Connect, we are Sierra Leone&apos;s leading internet service provider, delivering cutting-edge connectivity solutions since 2022. Founded and owned by Ibrahim Misheal Kallon, an indigenous Sierra Leonean entrepreneur, we are committed to bridging the digital divide across our nation.
            </p>
            <p className="text-[#bdb8d8] text-lg sm:text-xl leading-relaxed mb-12 font-sans">
              We believe that fast, reliable internet access is no longer a luxury but a necessity. Our mission is to connect Sierra Leone to the world with enterprise-grade infrastructure and premium customer service.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 sm:gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-6 glass-card rounded-xl">
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text font-serif">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-[#bdb8d8] mt-2 font-sans">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
