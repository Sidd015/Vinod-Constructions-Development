import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar({onQuote}){
  const scrollToId = (id) => {
    // First, try to scroll on current page
    const el = document.getElementById(id)
    if(el){
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else {
      // If element not found (on different route), navigate to home with section parameter
      window.location.href = `/?section=${id}`
    }
  }

  // Handle scroll-to-section when page loads with section query param
  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const section = params.get('section')
    if(section){
      // Small delay to ensure DOM is ready
      const timeout = setTimeout(() => {
        const el = document.getElementById(section)
        if(el){
          el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }, 200)
      return () => clearTimeout(timeout)
    }
  }, [])

  return (
    <header className="bg-white/98 backdrop-blur-md sticky top-0 z-50 border-b border-slate-200/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
        {/* Logo & Brand */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-yellow-500 via-yellow-600 to-amber-700 flex items-center justify-center text-white font-bold text-sm shadow-lg">VC</div>
          <div className="hidden sm:block">
            <div className="font-bold text-slate-900 leading-tight text-sm">Vinod Constructions</div>
            <div className="text-xs text-amber-600 font-semibold">& Development</div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          <Link to="/" className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-primary rounded-md transition">Home</Link>
          <Link to="/about" className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-primary rounded-md transition">About</Link>
          <button onClick={() => scrollToId('services')} className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-primary rounded-md transition">Services</button>
          <button onClick={() => scrollToId('steps')} className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-primary rounded-md transition">Approvals</button>
          <button onClick={() => scrollToId('projects')} className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-primary rounded-md transition">Projects</button>
          <button onClick={() => scrollToId('contact')} className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-primary rounded-md transition">Contact</button>
        </nav>

        {/* CTA Button */}
        <button onClick={onQuote} className="hidden sm:block bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 text-white px-5 py-2 rounded-lg font-semibold text-sm shadow-lg transition transform hover:shadow-xl hover:scale-105">Get Quote</button>
      </div>
    </header>
  )
}
