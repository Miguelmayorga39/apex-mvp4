import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";

export default function Home() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user);
    });
  }, []);

  const login = async () => {
    await supabase.auth.signInWithOAuth({ provider: "google" });
  };

  const logout = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  if (!user) {
    return (
      <div style={{ textAlign: "center", marginTop: "100px" }}>
        <button onClick={login}>Entrar con Google</button>
      </div>
    );
  }

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Hola Miguel</h1>
      <button onClick={logout}>Cerrar sesión</button>
    </div>
  );
}
