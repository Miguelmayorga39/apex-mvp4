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
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>Login Apex</h1>
      <button onClick={login}>Entrar con Google</button>
    </div>
  )
}
