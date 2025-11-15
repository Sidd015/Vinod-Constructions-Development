import React from 'react'
import { FileText, Users, Send, CreditCard, Search, CheckCircle, Award } from 'lucide-react'

const steps = [
  {title: 'Prepare Documents', desc: 'Title deed, survey report, Khata, tax receipts', icon: FileText},
  {title: 'Hire Architect', desc: 'Zoning, setback and approved plan preparation', icon: Users},
  {title: 'Submit Application', desc: 'Online via BBMP/BDA/AP RERA portals', icon: Send},
  {title: 'Pay Fees', desc: 'Application and processing charges', icon: CreditCard},
  {title: 'Site Inspection', desc: 'Government inspection and verification', icon: Search},
  {title: 'Receive Approval', desc: 'Download license and approved plan', icon: CheckCircle},
  {title: 'Completion Certificate', desc: 'Post-construction compliance and CC', icon: Award}
]

export default function Steps(){
  return (
    <section id="steps" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-primary">Government Approval Process</h2>
          <p className="text-gray-600 mt-2">Follow our proven 7-step process to get your project approved</p>
        </div>
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-gold transform -translate-x-1/2" />
          
          {/* Steps */}
          <div className="space-y-8">
            {steps.map((s, idx) => {
              const Icon = s.icon
              const isEven = idx % 2 === 0
              return (
                <div key={s.title} className="relative">
                  {/* Timeline dot */}
                  <div className="hidden lg:flex absolute left-1/2 top-6 w-16 h-16 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-full h-full rounded-full bg-white border-4 border-primary flex items-center justify-center shadow-lg">
                      <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white">
                        <Icon size={20} />
                      </div>
                    </div>
                  </div>
                  
                  {/* Card */}
                  <div className={`lg:w-5/12 ${isEven ? 'lg:ml-0 lg:pr-12' : 'lg:ml-auto lg:pl-12'} bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow`}>
                    <div className="flex lg:hidden items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white">
                        <Icon size={18} />
                      </div>
                      <span className="text-sm font-semibold text-gray-500">Step {idx + 1}</span>
                    </div>
                    <div className="hidden lg:block text-sm font-semibold text-gray-500 mb-2">Step {idx + 1}</div>
                    <h3 className="text-lg font-semibold text-primary mb-2">{s.title}</h3>
                    <p className="text-gray-600 text-sm">{s.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
