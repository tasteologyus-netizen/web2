import { useEffect } from 'react'
import { buildJsonLd } from './seo'
import { faqs, services } from './data'

const SCRIPT_ID = 'tasteology-jsonld'

/** Injects Organization / LocalBusiness / FAQ / Service JSON-LD for SEO + AEO. */
export default function SeoJsonLd() {
  useEffect(() => {
    const graph = buildJsonLd({ services, faqs })
    let el = document.getElementById(SCRIPT_ID)
    if (!el) {
      el = document.createElement('script')
      el.type = 'application/ld+json'
      el.id = SCRIPT_ID
      document.head.appendChild(el)
    }
    el.textContent = JSON.stringify(graph)
  }, [])

  return null
}
