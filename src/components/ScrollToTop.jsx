import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop(){
  const { pathname, search, hash } = useLocation()

  useEffect(() => {
    // If a section query param is present (e.g. ?section=services), scroll to that ID.
    const params = new URLSearchParams(search)
    const section = params.get('section')

    if(section){
      // small delay to ensure DOM elements are rendered
      setTimeout(() => {
        const el = document.getElementById(section)
        if(el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 150)
      return
    }

    // If there's a hash (e.g. #/about), ensure we scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname, search, hash])

  return null
}
