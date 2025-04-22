import { createContext, useContext, useEffect, useState } from 'react'
import { onAuthStateChanged }      from 'firebase/auth'
import { setDoc, doc }             from 'firebase/firestore'
import { auth, db }                from '../lib/firebase'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)

  useEffect(() => {
    return onAuthStateChanged(auth, async u => {
      setUser(u)
      if (u) {
        await setDoc(doc(db, 'users', u.uid), {
          email: u.email,
          plan:  'free'
        }, { merge: true })
      }
    })
  }, [])

  return (
    <AuthContext.Provider value={user}>
      {children}
    </AuthContext.Provider>
  )
}

export const useUser = () => useContext(AuthContext)
