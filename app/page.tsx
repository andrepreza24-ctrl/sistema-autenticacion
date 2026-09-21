import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="text-center py-16">
      <h1 className="text-4xl font-extrabold mb-4">Sistema de Autenticación con Next.js & Supabase</h1>
      <p className="text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto mb-8">
        Implementación segura con Cookies httpOnly, Server Actions, Middleware de protección de rutas y Next.js 16.
      </p>
      <div className="flex gap-4 justify-center">
        <Link 
          href="/dashboard" 
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-md transition"
        >
          Ir al Dashboard Protegido
        </Link>
      </div>
    </div>
  )
}