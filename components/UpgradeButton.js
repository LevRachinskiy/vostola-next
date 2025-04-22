import { addDoc, collection, onSnapshot } from 'firebase/firestore'
import { useUser }        from './AuthProvider'
import { db }             from '../lib/firebase'
import { stripePromise }  from '../lib/stripe'

export default function UpgradeButton() {
  const user = useUser()
  if (!user) return null

  const goPremium = async () => {
    const ref = await addDoc(
      collection(db, 'users', user.uid, 'checkout_sessions'),
      {
        price: 'price_1RGSjd02ma0b0RrUGAS1az8Q', // your Price ID
        success_url: window.location.origin + '/success',
        cancel_url:  window.location.origin,
      }
    )
    onSnapshot(ref, snap => {
      const id = snap.data()?.sessionId
      if (id) stripePromise.then(s => s.redirectToCheckout({ sessionId: id }))
    })
  }

  return <button onClick={goPremium}>Upgrade to Premium</button>
}
