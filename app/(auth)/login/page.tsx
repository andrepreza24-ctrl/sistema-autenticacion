'use client'

import { useState } from 'react'
import { login } from '@/app/actions/auth'
import Link from 'next/link'

export default function LoginPage() {
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setLoading(true)
    setError(null)

    const formData = new FormData(event.currentTarget)
    const res = await login(formData)

    if (res?.error) {
      setError(res.error)
      setLoading(false)
    }
  }

  return (
    <div className="max-w-md mx-auto mt-12 p-6 bg-white dark:bg-zinc-900 rounded-lg shadow-md border border-zinc-200 dark:border-zinc-800">
      <h1 className="text-2xl font-bold mb-6 text-zinc-900 dark:text-zinc-100">Iniciar Sesión</h1>
      
      {error && (
        <div className="p-3 mb-4 text-sm text-red-500 bg-red-50 dark:bg-red-950/50 rounded border border-red-200 dark:border-red-800">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label className="block text-sm font-medium mb-1 text-zinc-700 dark:text-zinc-300">
            Correo Electrónico
          </label>
          <input 
            name="email" 
            type="email" 
            placeholder="usuario@dominio.com" 
            required 
            className="w-full px-3 py-2 border border-zinc-300 rounded-md dark:bg-zinc-800 dark:border-zinc-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1 text-zinc-700 dark:text-zinc-300">
            Contraseña
          </label>
          <input 
            name="password" 
            type="password" 
            placeholder="••••••••" 
            required 
            className="w-full px-3 py-2 border border-zinc-300 rounded-md dark:bg-zinc-800 dark:border-zinc-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button 
          type="submit" 
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-md transition duration-200 disabled:opacity-50 mt-2"
        >
          {loading ? 'Ingresando...' : 'Ingresar'}
        </button>
      </form>

      <div className="mt-4 text-sm text-center flex flex-col gap-2 text-zinc-600 dark:text-zinc-400">
        <p>
          ¿No tienes cuenta?{' '}
          <Link href="/register" className="text-blue-600 hover:underline">
            Regístrate aquí
          </Link>
        </p>
        <Link href="/forgot-password" className="text-xs text-zinc-500 hover:underline">
          ¿Olvidaste tu contraseña?
        </Link>
      </div>
    </div>
  )
}