import Link from 'next/link'
import NewsletterForm from './NewsletterForm'

export default function Footer() {
  return (
    <footer style={{ padding: '2rem', textAlign: 'center' }}>
      <nav>
        <Link href="/market-access">Market Access</Link>
        <Link href="/about">About Us</Link>
        <Link href="/careers">Careers</Link>
        <Link href="/contact">Trade with us</Link>
      </nav>
      <div id="newsletter" style={{ margin: '1rem 0' }}>
        <NewsletterForm />
      </div>
      <p>© {new Date().getFullYear()} Vostola</p>
    </footer>
  )
}
