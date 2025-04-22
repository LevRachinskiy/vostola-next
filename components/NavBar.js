import Link from 'next/link'
export default function NavBar() {
  return (
    <nav>
      <Link href="/market-access">Market Access</Link>
      <Link href="/about">About</Link>
      <Link href="/careers">Careers</Link>
      <Link href="/contact">Trade with us</Link>
    </nav>
  )
}
