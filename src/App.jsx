import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import QuoteModal from './components/QuoteModal'
import StickyCTA from './components/StickyCTA'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Home from './pages/Home'
import About from './pages/About'
import ScrollToTop from './components/ScrollToTop'

export default function App(){
  const [quoteOpen, setQuoteOpen] = useState(false)
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onQuote={()=>setQuoteOpen(true)} />
      <ScrollToTop />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home onQuote={()=>setQuoteOpen(true)} />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Testimonials />
        <FAQ />
      </div>
      <Footer />
      <StickyCTA onQuote={()=>setQuoteOpen(true)} />
      <QuoteModal open={quoteOpen} onClose={()=>setQuoteOpen(false)} />
    </div>
  )
}
