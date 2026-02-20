import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";

export default function Home() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user);
    });
  }, []);

  if (!user) {
    return (
      <button onClick={() => supabase.auth.signInWithOAuth({ provider: "google" })}>
        Entrar con Google
      </button>
    );
  }

  return <h1>Hola Miguel ya funciona</h1>;
  <button onClick={async () => {
  await supabase.auth.signOut()
  location.reload()
}}>
  Cerrar sesión
</button>
}
