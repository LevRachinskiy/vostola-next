import { useState } from 'react'
export default function Hero() {
  const [email, setEmail] = useState('')
  return (
    <section className="hero">
      <h1>Algorithms meet digital asset markets</h1>
      <p>
        Vostola utilizes sophisticated algorithms to trade digital assets globally. We provide liquidity to multiple global exchanges and venues.
      </p>
      <div className="cta">
        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <button onClick={() => {/* TODO: wire up newsletter API */}}>
          Subscribe
        </button>
      </div>
      <small>✌ Sign up to stay in touch with us</small>
    </section>
  )
}
