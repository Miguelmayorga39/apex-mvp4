import { useEffect, useState } from 'react'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  'https://lrwlqqhchtfxpzobooqq.supabase.co',
  'sb_publishable_04snxuCxhEl_o8vZ7hdN_g_mMOYHwn0'
)

export default function Login() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // 1. Revisar si ya hay sesión
    supabase.auth.getSession().then(({ data }) => {
      setUser(data.session?.user ?? null)
      setLoading(false)
    })

    // 2. Escuchar cuando cambia la sesión (cuando regresas de Google)
    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user ?? null)
        setLoading(false)
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

  if (loading) {
    return <p style={{ textAlign: 'center' }}>Cargando...</p>
  }

  if (user) {
    return (
      <div style={{ textAlign: 'center', marginTop: '100px' }}>
        <h1>Bienvenido {user.email}</h1>
        <button onClick={logout}>Cerrar sesión</button>
      </div>
    )
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>Login Apex</h1>
      <button onClick={login}>Entrar con Google</button>
    </div>
  )
}
