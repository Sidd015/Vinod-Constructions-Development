import React from 'react'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Steps from '../components/Steps'
import Projects from '../components/Projects'
import Contact from '../components/Contact'

export default function Home({onQuote}){
  return (
    <main>
      <Hero onQuote={onQuote} />
      <Services />
      <Steps />
      <Projects />
      <Contact />
    </main>
  )
}
