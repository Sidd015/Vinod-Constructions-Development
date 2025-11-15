import React from 'react'
import { Linkedin, Instagram, MessageCircle } from 'lucide-react'

export default function Footer(){
  return (
    <footer className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white border-t mt-12">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <div className="font-bold text-2xl mb-2" style={{color: '#d4af37'}}>Vinod</div>
          <div className="text-sm text-gray-300 mb-6">Building excellence across Tirupati & Bangalore</div>
          <div className="space-y-3 text-sm">
            <div>
              <p className="font-semibold text-white">Main Office</p>
              <p className="text-gray-400">Tirupati, Andhra Pradesh</p>
            </div>
            <div>
              <p className="font-semibold text-white">Bangalore Branch</p>
              <p className="text-gray-400">Bangalore, Karnataka</p>
            </div>
          </div>
        </div>
        <div>
          <div className="font-semibold text-white mb-4 text-lg">Contact Info</div>
          <div className="space-y-3 text-sm text-gray-300">
            <div>
              <p className="font-semibold text-gray-200">Phone</p>
              <p className="text-gray-400 hover:text-white transition">+91 99631 55054</p>
            </div>
            <div>
              <p className="font-semibold text-gray-200">Email</p>
              <p className="text-gray-400 hover:text-white transition">info@vinodconstructions.com</p>
            </div>
          </div>
        </div>
        <div className="text-sm">
          <div className="font-semibold text-white mb-4 text-lg">Quick Links</div>
          <ul className="space-y-2 text-gray-300">
            <li><a href="/" className="hover:text-white transition">Home</a></li>
            <li><a href="/about" className="hover:text-white transition">About</a></li>
            <li><a href="#services" className="hover:text-white transition">Services</a></li>
            <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold text-white mb-4 text-lg">Follow Us</div>
          <div className="flex items-center gap-3 mb-6">
            <a href="https://www.linkedin.com/company/vinod-constructions" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition hover:scale-110" title="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href="https://www.instagram.com/vinodconstructions" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-pink-600 text-white hover:bg-pink-700 transition hover:scale-110" title="Instagram">
              <Instagram size={20} />
            </a>
            <a href="https://wa.me/919963155054" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-green-600 text-white hover:bg-green-700 transition hover:scale-110" title="WhatsApp">
              <MessageCircle size={20} />
            </a>
          </div>
          <p className="text-xs text-gray-400">Trusted consultants for government approvals & property development</p>
        </div>
      </div>
      <div className="border-t border-gray-700 text-center text-xs text-gray-500 py-4 mt-8" style={{background: 'rgba(0, 0, 0, 0.3)'}}>© {new Date().getFullYear()} Vinod Constructions and Development • Designed for Excellence</div>
    </footer>
  )
}
