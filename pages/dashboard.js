import { useUser } from '../components/AuthProvider'
import CoreInsightsWidget from '../components/CoreInsightsWidget'
import FraudAgentWidget from '../components/FraudAgentWidget'
import PremiumContent from '../components/PremiumContent'

export default function Dashboard() {
  const user = useUser()
  if (!user) return <p>Please <a href="/">sign in</a>.</p>

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Welcome, {user.email}</h1>

      <section>
        <h2>Core Insights (Free)</h2>
        <CoreInsightsWidget />
      </section>

      <PremiumContent>
        <section>
          <h2>AI Fraud‑Detection Agent</h2>
          <FraudAgentWidget />
        </section>
      </PremiumContent>
    </div>
  )
}
