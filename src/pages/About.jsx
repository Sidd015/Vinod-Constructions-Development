import React from 'react'
import { CheckCircle, Award, Users, Zap } from 'lucide-react'

export default function About(){
  const values = [
    {icon: Award, title: 'Excellence', desc: 'Top-quality approvals and construction standards'},
    {icon: Users, title: 'Transparency', desc: 'Clear communication at every step'},
    {icon: Zap, title: 'Efficiency', desc: 'Fast-track approvals and document processing'},
    {icon: CheckCircle, title: 'Compliance', desc: 'Full government regulation adherence'}
  ]
  
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl font-bold text-primary mb-6">About Vinod Constructions and Development</h2>
            <p className="text-gray-700 text-lg mb-4">Vinod Constructions and Development has been helping property owners navigate approvals and construction projects smoothly. We specialise in government approvals (BBMP, BDA, AP RERA), documentation, and end-to-end construction management.</p>
            <p className="text-gray-700 text-lg">With years of expertise in the property development sector, we've successfully handled hundreds of projects, making us the trusted partner for all your construction and approval needs.</p>
          </div>
          <div className="rounded-xl p-8 shadow-2xl animate-float" style={{background: 'linear-gradient(135deg, rgba(15,76,129,0.95) 0%, rgba(5,102,141,0.95) 100%)'}}>
            <h3 className="text-2xl font-bold mb-6" style={{color: '#f6e8c7'}}>Why Choose Us?</h3>
            <ul className="space-y-4 text-gray-100">
              <li className="flex items-start gap-3">
                <CheckCircle size={20} className="mt-1 flex-shrink-0 text-yellow-300" />
                <span>10+ years of experience in approvals & construction</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle size={20} className="mt-1 flex-shrink-0 text-yellow-300" />
                <span>500+ successful projects delivered</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle size={20} className="mt-1 flex-shrink-0 text-yellow-300" />
                <span>Expert team with government liaison contacts</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle size={20} className="mt-1 flex-shrink-0 text-yellow-300" />
                <span>Fastest approval turnaround in the region</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mb-20">
          <h3 className="text-3xl font-bold text-primary mb-12 text-center">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, idx) => {
              const Icon = v.icon
              return (
                <div key={v.title} className="card-premium p-6 rounded-lg text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-primary" size={32} />
                  </div>
                  <h4 className="font-bold text-lg text-primary mb-2">{v.title}</h4>
                  <p className="text-gray-600 text-sm">{v.desc}</p>
                </div>
              )
            })}
          </div>
        </div>

        <div className="bg-primary text-white rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-3">Ready to Start Your Project?</h3>
          <p className="text-white/90 mb-6">Contact us today for a free consultation and approvals checklist</p>
          <div className="flex gap-3 justify-center flex-wrap">
            <button className="bg-white text-primary px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition">Get a Quote</button>
            <a href="https://wa.me/919963155054" className="bg-green-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-green-600 transition">WhatsApp Us</a>
          </div>
        </div>
      </div>
    </section>
  )
}
