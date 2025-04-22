import { useEffect } from 'react'

export default function NewsletterForm() {
  useEffect(() => {
    const s = document.createElement('script')
    s.src = 'https://substack.com/embeds/YOUR-PUB.js'
    s.async = true
    document.getElementById('newsletter').appendChild(s)
  }, [])

  return <div id="newsletter"></div>
}
