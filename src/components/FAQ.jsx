import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {q: 'How long does the approval process take?', a: 'Typically 3-6 months depending on the project type. We can expedite for urgent cases. Our team works directly with BBMP/BDA to fast-track approvals.'},
  {q: 'What documents do I need to submit?', a: 'Essential docs: Title Deed, Khata, Survey Report, Property Tax receipts. Our checklist PDF covers everything — download from the hero section.'},
  {q: 'Do you handle AP RERA registration?', a: 'Yes, we are authorized AP RERA consultants. We handle complete registration, compliance, and updates for residential projects.'},
  {q: 'What is your success rate?', a: 'We have a 98% approval success rate with zero rejections due to documentation errors. Our consultants have direct relationships with officials.'},
  {q: 'Do you provide loan assistance?', a: 'Yes, we tie up with major banks for home loans and construction finance. We fast-track bank approvals for our clients.'},
  {q: 'Can you handle commercial projects?', a: 'Absolutely. We have extensive experience with commercial buildings, office blocks, and industrial projects.'}
]

export default function FAQ(){
  const [open, setOpen] = useState(0)
  
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-2">Frequently Asked Questions</h2>
          <p className="text-gray-600 text-lg">Find answers to common questions about our services</p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="card-premium rounded-lg overflow-hidden">
              <button
                onClick={() => setOpen(open === idx ? -1 : idx)}
                className="w-full p-6 flex items-center justify-between hover:bg-primary/5 transition"
              >
                <h3 className="font-semibold text-lg text-left text-primary">{faq.q}</h3>
                <ChevronDown 
                  size={24} 
                  className={`text-primary flex-shrink-0 transition-transform ${open === idx ? 'rotate-180' : ''}`}
                />
              </button>
              {open === idx && (
                <div className="px-6 pb-6 pt-2 border-t bg-white/50">
                  <p className="text-gray-700 leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
