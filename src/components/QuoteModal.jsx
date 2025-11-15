import React, { useState } from 'react'
import emailjs from '@emailjs/browser'

export default function QuoteModal({open, onClose}){
  const [sent, setSent] = useState(false)
  if(!open) return null
  const handle = (e)=>{
    e.preventDefault()
    const form = e.target
    const data = {from_name: form.name.value, phone: form.phone.value, details: form.details.value}
    emailjs.send('SERVICE_ID','TEMPLATE_ID', data, 'USER_ID')
      .then(()=> setSent(true))
      .catch(()=> alert('Configure EmailJS keys'))
    form.reset()
  }
  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg w-full max-w-lg p-6">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold">Get a Quote</h3>
          <button onClick={onClose} className="text-gray-600">Close</button>
        </div>
        <div className="mt-4">
          {sent ? <div className="text-green-600">Request sent. We'll contact you soon.</div> : (
            <form onSubmit={handle} className="space-y-3">
              <input name="name" required placeholder="Your name" className="w-full border p-2 rounded" />
              <input name="phone" required placeholder="Phone" className="w-full border p-2 rounded" />
              <textarea name="details" placeholder="Project details" className="w-full border p-2 rounded" />
              <div className="flex justify-end gap-3">
                <button type="button" onClick={onClose} className="px-4 py-2 border rounded">Cancel</button>
                <button type="submit" className="px-4 py-2 bg-primary text-white rounded">Send</button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
