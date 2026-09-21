'use client'

import { useState } from 'react'
import { resetPassword } from '@/app/actions/auth'
import Link from 'next/link'

export default function ForgotPasswordPage() {
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setLoading(true)
    setError(null)
    setSuccess(null)

    const formData = new FormData(event.currentTarget)
    const res = await resetPassword(formData)

    if (res?.error) {
      setError(res.error)
    } else if (res?.success) {
      setSuccess(res.success)
    }
    setLoading(false)
  }

  return (
    <div className="max-w-md mx-auto mt-12 p-6 bg-white dark:bg-zinc-900 rounded-lg shadow-md border border-zinc-200 dark:border-zinc-800">
      <h1 className="text-2xl font-bold mb-2 text-zinc-900 dark:text-zinc-100">Recuperar Contraseña</h1>
      <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-6">
        Ingresa tu correo para recibir un enlace de restablecimiento.
      </p>

      {error && (
        <div className="p-3 mb-4 text-sm text-red-500 bg-red-50 dark:bg-red-950/50 rounded border border-red-200 dark:border-red-800">
          {error}
        </div>
      )}

      {success && (
        <div className="p-3 mb-4 text-sm text-green-600 bg-green-50 dark:bg-green-950/50 rounded border border-green-200 dark:border-green-800">
          {success}
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label className="block text-sm font-medium mb-1 text-zinc-700 dark:text-zinc-300">Correo Electrónico</label>
          <input 
            name="email" 
            type="email" 
            placeholder="usuario@dominio.com" 
            required 
            className="w-full px-3 py-2 border rounded-md dark:bg-zinc-800 dark:border-zinc-700 dark:text-white"
          />
        </div>

        <button 
          type="submit" 
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-md transition duration-200 disabled:opacity-50"
        >
          {loading ? 'Enviando...' : 'Enviar Correo'}
        </button>
      </form>

      <p className="mt-4 text-sm text-center text-zinc-600 dark:text-zinc-400">
        <Link href="/login" className="text-blue-600 hover:underline">
          Volver a Iniciar Sesión
        </Link>
      </p>
    </div>
  )
}