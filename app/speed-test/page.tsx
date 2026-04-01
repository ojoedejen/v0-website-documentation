import TopBanner from '@/components/top-banner'
import Header from '@/components/header'
import Footer from '@/components/footer'

export default function SpeedTestPage() {
  return (
    <div className="min-h-screen bg-white">
      <TopBanner />
      <Header />

      {/* Hero */}
      <section className="py-20 lg:py-32 min-h-[50vh] flex items-center relative z-0 premium-gradient">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative text-center w-full">
          <h1 className="max-w-2xl mx-auto font-serif font-bold text-5xl text-white mb-8 md:text-6xl md:leading-normal">
            Internet <span className="gradient-text">Speed Test</span>
          </h1>
          <p className="max-w-xl mx-auto text-lg font-normal leading-7 text-[#bdb8d8] font-sans">
            Check your internet speed directly from your browser to see how fast your connection is right now.
          </p>
        </div>
      </section>

      {/* Speed Test Widget */}
      <section className="py-20 lg:py-32 bg-[#f8f7ff] flex justify-center">
        <div className="w-full max-w-4xl mx-auto px-4">
          <iframe
            width="100%"
            height="650px"
            frameBorder="0"
            src="//openspeedtest.com/Get-widget.php"
            className="rounded-xl"
            title="Speed Test"
          />
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl text-center text-[#0f0d1e] font-bold mb-16">
            Tips for Accurate Results
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Close Other Applications',
                desc: 'Close any apps or browser tabs that might be using your internet connection.',
              },
              {
                title: 'Use a Wired Connection',
                desc: 'For the most accurate results, connect directly to your router with an ethernet cable.',
              },
              {
                title: 'Test Multiple Times',
                desc: 'Run the test several times at different times of day to get an average speed.',
              },
              {
                title: 'Check Device Limits',
                desc: 'Older devices may not support the full speeds of your internet plan.',
              },
            ].map((tip, index) => (
              <div key={index} className="bg-[#f8f7ff] p-8 rounded-xl border border-[#e8e5f5]">
                <h3 className="font-bold font-serif text-[#0f0d1e] mb-3 text-lg">{tip.title}</h3>
                <p className="text-[#6d6888] font-sans">{tip.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
