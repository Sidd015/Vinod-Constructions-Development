import React from 'react'
import { Star } from 'lucide-react'

const testimonials = [
  {name: 'Rajesh Kumar', role: 'Property Owner', text: 'Vinod Constructions made the approval process so smooth. What usually takes 6 months was done in 3!', rating: 5},
  {name: 'Priya Sharma', role: 'Developer', text: 'Best consultants for AP RERA registration. Very professional and knowledgeable team.', rating: 5},
  {name: 'Amit Patel', role: 'Business Owner', text: 'Got all my office building approvals done without any hassle. Highly recommended!', rating: 5},
  {name: 'Lakshmi Reddy', role: 'Real Estate Investor', text: 'Transparent pricing, quick service, and excellent support. A trustworthy team!', rating: 5}
]

export default function Testimonials(){
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-2">What Our Clients Say</h2>
          <p className="text-gray-600 text-lg">Trusted by 500+ property owners and developers across Andhra Pradesh</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, idx) => (
            <div key={t.name} className="card-premium p-6 rounded-lg animate-fade-in-up" style={{animationDelay: `${idx * 100}ms`}}>
              <div className="flex items-center gap-1 mb-3">
                {Array(t.rating).fill(0).map((_, i) => (
                  <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">"{t.text}"</p>
              <div className="border-t pt-4">
                <p className="font-semibold text-primary">{t.name}</p>
                <p className="text-sm text-gray-500">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
