import React from 'react'
import { CheckCircle2, ArrowRight } from 'lucide-react'

export default function Hero({onQuote}){
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 pt-20 pb-16 md:py-32">
      {/* Animated background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-6 md:px-8">
        <div className="max-w-3xl">
          {/* Premium Badge */}
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-50/10 border border-yellow-400/30 backdrop-blur">
            <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
            <span className="text-sm font-semibold text-yellow-200">India's Trusted Construction Partner</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6 drop-shadow-lg">
            Vinod Constructions <span className="bg-gradient-to-r from-yellow-400 to-amber-300 bg-clip-text text-transparent">&amp; Development</span>
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-yellow-200 font-semibold mb-6">Your One‑Stop Partner for Construction & Government Approvals</p>

          {/* Service Descriptor */}
          <div className="flex flex-wrap gap-2 mb-8">
            <span className="px-3 py-1 rounded-full bg-white/10 text-white text-sm font-medium">Approvals</span>
            <span className="px-3 py-1 rounded-full bg-white/10 text-white text-sm font-medium">Construction</span>
            <span className="px-3 py-1 rounded-full bg-white/10 text-white text-sm font-medium">AP RERA</span>
            <span className="px-3 py-1 rounded-full bg-white/10 text-white text-sm font-medium">Documentation</span>
          </div>

          {/* Description */}
          <p className="text-lg text-white/90 leading-relaxed mb-10 max-w-2xl">
            Delivering compliant, on-time construction services with expert government approvals and comprehensive documentation support across Tirupati & Bangalore. Trusted by 500+ clients.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button onClick={onQuote} className="group relative px-8 py-4 bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 text-slate-900 font-bold rounded-lg shadow-xl transition transform hover:scale-105 flex items-center justify-center gap-2">
              Get a Free Quote
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
            </button>
            <button onClick={() => {
              const el = document.getElementById('contact')
              if(el) el.scrollIntoView({behavior: 'smooth'})
              else window.location.hash = '#contact'
            }} className="px-8 py-4 bg-white/15 hover:bg-white/25 text-white font-bold rounded-lg shadow-lg backdrop-blur border border-white/20 transition transform hover:scale-105">
              Schedule Consultation
            </button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-white/10">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-0.5" />
              <div>
                <div className="font-semibold text-white">500+ Projects</div>
                <div className="text-sm text-white/70">Completed successfully</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-0.5" />
              <div>
                <div className="font-semibold text-white">15+ Years</div>
                <div className="text-sm text-white/70">Industry expertise</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-0.5" />
              <div>
                <div className="font-semibold text-white">100% Compliance</div>
                <div className="text-sm text-white/70">Govt approvals guaranteed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
