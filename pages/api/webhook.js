export default async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body

    console.log('Webhook recibido:', data)

    // aquí puedes guardar en Supabase
    // mandar correo
    // activar algo

    return res.status(200).json({ ok: true })
  }

  res.status(405).end()
}
