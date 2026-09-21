'use server'

import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'

export async function login(formData: FormData) {
  const email = formData.get('email') as string
  const password = formData.get('password') as string

  if (!email || !password) {
    return { error: 'Todos los campos son obligatorios.' }
  }

  const supabase = await createClient()

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error) {
    return { error: 'Credenciales inválidas o error de servidor.' }
  }

  redirect('/dashboard')
}

export async function signUp(formData: FormData) {
  const email = formData.get('email') as string
  const password = formData.get('password') as string

  if (!email || !password || password.length < 6) {
    return { error: 'La contraseña debe contener al menos 6 caracteres.' }
  }

  console.log('--- INTENTANDO CONEXIÓN A SUPABASE ---')
  console.log('URL:', process.env.NEXT_PUBLIC_SUPABASE_URL)

  try {
    const supabase = await createClient()

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/dashboard`,
      },
    })

    if (error) {
      console.error('Error devuelto por Supabase API:', error)
      return { error: error.message }
    }

    return { success: 'Registro completado. Verifica tu correo para activar la cuenta.' }
  } catch (err: any) {
    console.error('CAUSE/ERROR COMPLETO:', err.cause || err)
    return { 
      error: `Error de red: ${err?.cause?.code || err?.message || 'Fallo al conectar con Supabase'}` 
    }
  }
}

export async function signOut() {
  const supabase = await createClient()
  await supabase.auth.signOut()
  redirect('/login')
}

export async function resetPassword(formData: FormData) {
  const email = formData.get('email') as string
  if (!email) {
    return { error: 'Debes proporcionar un correo electrónico válido.' }
  }

  const supabase = await createClient()

  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/reset-password`,
  })

  if (error) {
    return { error: error.message }
  }

  return { success: 'Se ha enviado un correo con las instrucciones de recuperación.' }
}