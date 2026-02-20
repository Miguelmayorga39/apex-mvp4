import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  'https://lrwlqqhchtfxpzobooqq.supabase.co',
  'sb_publishable_04snxuCxhEl_o8vZ7hdN_g_mMOYHwn0'
)

export default function Login() {
  const login = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'google'
    })
  }

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999,
        background: 'rgba(0,0,0,0.4)'
      }}
    >
      <div
        style={{
          background: 'white',
          padding: '40px',
          borderRadius: '12px',
          textAlign: 'center'
        }}
      >
        <h1 style={{ color: 'black' }}>Login Apex</h1>
        <button onClick={login}>Entrar con Google</button>
      </div>
    </div>
  )
}
