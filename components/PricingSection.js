import Link from 'next/link'
import UpgradeButton from './UpgradeButton'

export default function PricingSection() {
  return (
    <div className="pricing-grid">
      <div className="tier-card">
        <h2>Core (Free)</h2>
        <p><strong>/bin/zsh/month</strong></p>
        <ul>
          <li>3 model runs per day</li>
          <li>Standard crypto charts</li>
          <li>Community Q&A feed</li>
        </ul>
        <Link href="/dashboard" className="btn">
          Get Started Free
        </Link>
      </div>

      <div className="tier-card premium">
        <h2>Vostola Premium</h2>
        <p><strong>.99/month</strong></p>
        <ul>
          <li>Unlimited model runs</li>
          <li>AI-driven fraud-detection agent</li>
          <li>Deep on-chain analytics</li>
          <li>Priority email support</li>
        </ul>
        <UpgradeButton />
      </div>
    </div>
  )
}
