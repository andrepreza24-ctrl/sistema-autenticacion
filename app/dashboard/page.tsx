import { createClient } from '@/lib/supabase/server'
import { signOut } from '@/app/actions/auth'

export default async function DashboardPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Panel de Control (Ruta Protegida)</h1>
      <p>Bienvenido, <strong>{user?.email}</strong></p>
      <p>ID de usuario: <code>{user?.id}</code></p>
      
      <form action={signOut}>
        <button type="submit" style={{ padding: '8px 16px', cursor: 'pointer' }}>
          Cerrar Sesión
        </button>
      </form>
    </div>
  )
}