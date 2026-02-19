import { useState } from 'react'
import { supabase } from '../lib/supabaseClient'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async () => {
    const { user, error } = await supabase.auth.signIn({
      email,
      password
    })
    if (error) alert(error.message)
    else window.location.href = '/'
  }

  const handleFacebookLogin = async () => {
    const { user, session, error } = await supabase.auth.signIn({
      provider: 'facebook'
    })
    if (error) alert(error.message)
    // Redirige automáticamente a Facebook para login
  }

  return (
    <div>
      <h1>Login</h1>
      <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <input placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Iniciar sesión</button>
      <button onClick={handleFacebookLogin}>Login con Facebook</button>
    </div>
  )
}
