import React from 'react'
import { CheckCircle, Building2, FileCheck, DollarSign, Briefcase, Award } from 'lucide-react'

const services = [
  {title: 'Government Approvals', desc: 'Complete approval solutions', icon: Award, color: 'from-blue-600 to-blue-400', items: ['Building Plan Approval (BBMP/BDA)','Khata Transfer & Certificate','Property Tax & NOC','AP RERA Registration','Environmental & Zoning Clearances'], featured: true},
  {title: 'Construction & Development', desc: 'Quality construction services', icon: Building2, color: 'from-orange-600 to-orange-400', items: ['Residential & Commercial','Layout Development','Renovation & Turnkey Projects']},
  {title: 'Loan Assistance', desc: 'Finance made simple', icon: DollarSign, color: 'from-green-600 to-green-400', items: ['Home Loans','Construction Finance','Bank Tie-ups & Faster Approvals']},
  {title: 'Documentation Support', desc: 'Complete paperwork handled', icon: FileCheck, color: 'from-purple-600 to-purple-400', items: ['Title Deed & Survey Report','Occupancy Certificate','Building License','Completion Certificate']}
]

export default function Services(){
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold text-primary mb-2">Our Expert Services</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">Complete end-to-end solutions for construction, approvals, documentation, and finance</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => {
            const Icon = s.icon
            return (
              <div key={s.title} className="relative group transition-all duration-300">
                <div className={`h-full bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden group-hover:scale-105 ${s.featured ? 'ring-2 ring-primary' : ''}`}>
                  <div className={`h-32 bg-gradient-to-br ${s.color} flex items-end justify-start p-6`}>
                    <Icon className="text-white" size={40} />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="font-bold text-xl text-primary mb-1">{s.title}</h3>
                    <p className="text-sm text-gray-500 mb-4">{s.desc}</p>
                    {s.featured && <div className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-4">Most Popular</div>}
                    <ul className="space-y-2">
                      {s.items.map(i => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                          <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                          <span>{i}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {s.featured && <div className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-2 py-1 rounded">★ TOP</div>}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

