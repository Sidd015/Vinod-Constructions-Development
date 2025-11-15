import React from 'react'

export default function StickyCTA({onQuote}){
  return (
    <div className="fixed right-4 bottom-6 z-50 flex flex-col gap-3">
      <a href="https://wa.me/919963155054" className="bg-green-500 text-white px-4 py-3 rounded shadow">WhatsApp</a>
      <button onClick={onQuote} className="bg-gold text-white px-4 py-3 rounded shadow" style={{backgroundColor:'#c9a74a'}}>Get a Free Consultation</button>
    </div>
  )
}
