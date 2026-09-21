import type { Metadata } from 'next'
import { createClient } from '@/lib/supabase/server'
import { signOut } from '@/app/actions/auth'
import Link from 'next/link'
import './globals.css'

export const metadata: Metadata = {
  title: 'Sistema de Autenticación Segura',
  description: 'Next.js 16 + Supabase SSR + httpOnly Cookies',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  return (
    <html lang="es">
      <body className="bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 min-h-screen flex flex-col">
        <header className="border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
          <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
            <Link href="/" className="font-bold text-lg">
              AuthApp
            </Link>

            <div className="flex items-center gap-4 text-sm">
              {user ? (
                <>
                  <span>{user.email}</span>
                  <Link href="/dashboard" className="hover:underline">
                    Dashboard
                  </Link>
                  <form action={signOut}>
                    <button type="submit" className="bg-red-600 hover:bg-red-700 text-white px-3 py-1.5 rounded-md transition">
                      Cerrar Sesión
                    </button>
                  </form>
                </>
              ) : (
                <>
                  <Link href="/login" className="hover:underline">
                    Iniciar Sesión
                  </Link>
                  <Link href="/register" className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded-md transition">
                    Registrarse
                  </Link>
                </>
              )}
            </div>
          </nav>
        </header>

        <main className="flex-1 max-w-6xl mx-auto px-4 py-8 w-full">
          {children}
        </main>
      </body>
    </html>
  )
}