import { useEffect, useState } from 'react'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  'https://lrwlqqhchtfxpzobooqq.supabase.co',
  'sb_publishable_04snxuCxhEl_o8vZ7hdN_g_mMOYHwn0',
  {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: true
    }
  }
)

export default function Login() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const getSession = async () => {
      const { data } = await supabase.auth.getSession()
      setUser(data.session?.user ?? null)
    }

    getSession()

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user ?? null)
      }
    )

    return () => {
      listener.subscription.unsubscribe()
    }
  }, [])

  const login = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'google'
    })
  }

  const logout = async () => {
    await supabase.auth.signOut()
    setUser(null)
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      {user ? (
        <>
          <h1>Hola {user.email}</h1>
          <button onClick={logout}>Cerrar sesión</button>
        </>
      ) : (
        <>
          <h1>Login Apex</h1>
          <button onClick={login}>Entrar con Google</button>
        </>
      )}
    </div>
  )
}
