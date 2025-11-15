import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import { Mail, Phone, MapPin, CheckCircle } from 'lucide-react'

export default function Contact(){
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  
  const handleSubmit = (e)=>{
    e.preventDefault()
    setLoading(true)
    setError('')
    const form = e.target
    const data = {
      from_name: form.name.value,
      phone: form.phone.value,
      email: form.email.value,
      message: form.message.value
    }
    emailjs.send('SERVICE_ID','TEMPLATE_ID', data, 'USER_ID')
      .then(()=> {
        setSent(true)
        setLoading(false)
        form.reset()
        setTimeout(()=> setSent(false), 5000)
      })
      .catch(()=> {
        setError('Failed to send. Please try again or call us directly.')
        setLoading(false)
      })
  }
  
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-primary mb-4">Get in Touch</h2>
        <p className="text-gray-700 text-lg mb-12">Have questions? Our expert teams are ready to assist you from our offices in Tirupati and Bangalore.</p>
        
        {/* Office Locations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Main Office - Tirupati */}
          <div className="bg-white card-premium p-8 rounded-xl border-l-4 border-primary">
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="text-primary" size={28} />
              <h3 className="text-2xl font-bold text-primary">Main Office</h3>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-semibold text-gray-600">Location</p>
                <p className="text-lg text-gray-800">Tirupati, Andhra Pradesh</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Phone className="text-primary" size={20} />
                </div>
                <p className="text-gray-700">+91 99631 55054</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Mail className="text-primary" size={20} />
                </div>
                <p className="text-gray-700">info@vinodconstructions.com</p>
              </div>
            </div>
          </div>
          
          {/* Bangalore Branch */}
          <div className="bg-white card-premium p-8 rounded-xl border-l-4 border-accent">
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="text-accent" size={28} />
              <h3 className="text-2xl font-bold text-accent">Bangalore Branch</h3>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-semibold text-gray-600">Location</p>
                <p className="text-lg text-gray-800">Bangalore, Karnataka</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Phone className="text-accent" size={20} />
                </div>
                <p className="text-gray-700">+91 99631 55054</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Mail className="text-accent" size={20} />
                </div>
                <p className="text-gray-700">bangalore@vinodconstructions.com</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Contact Form and Map */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="mt-8 rounded-lg overflow-hidden shadow-lg">
              <iframe title="office-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3824.2558892842207!2d79.4255358!3d13.641659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4d740b7b7b7b7b%3A0x3a4d740b7b7b7b7b!2sTirupati%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1234567890" className="w-full h-72 rounded border-0" allowFullScreen="" loading="lazy" />
            </div>
          </div>
          
          <div>
            <div className="bg-white card-premium p-8 rounded-xl">
              {sent ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="text-green-600" size={40} />
                  </div>
                  <p className="text-green-600 font-semibold text-lg">Thank you!</p>
                  <p className="text-gray-600 mt-2">We'll contact you within 2 hours</p>
                </div>
              ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Name</label>
                  <input name="name" required placeholder="Your full name" className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Phone</label>
                  <input name="phone" required placeholder="+91 XXXXX XXXXX" className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                  <input name="email" required type="email" placeholder="your@email.com" className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                  <textarea name="message" rows="4" placeholder="Tell us about your project..." className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
                </div>
                {error && <p className="text-red-600 text-sm">{error}</p>}
                <div className="flex items-center gap-3 pt-2">
                  <button type="submit" disabled={loading} className="flex-1 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition disabled:opacity-50">
                    {loading ? 'Sending...' : 'Send Message'}
                  </button>
                  <a href="https://wa.me/919963155054" className="flex-1 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold text-center hover:bg-green-700 transition">WhatsApp</a>
                </div>
              </form>) }
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

