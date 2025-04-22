import { useState, useEffect } from 'react'
import { doc, getDoc }          from 'firebase/firestore'
import { useUser }             from './AuthProvider'
import { db }                  from '../lib/firebase'
import UpgradeButton           from './UpgradeButton'

export default function PremiumContent({ children }) {
  const user = useUser()
  const [premium, setPremium] = useState(false)

  useEffect(() => {
    if (!user) return
    getDoc(doc(db, 'users', user.uid)).then(snap => {
      setPremium(snap.data()?.plan === 'premium')
    })
  }, [user])

  if (!user)      return <p>Please sign in to access this.</p>
  if (!premium)   return <UpgradeButton />
  return <>{children}</>
}
