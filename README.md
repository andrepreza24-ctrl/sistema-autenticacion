# Sistema de Autenticación Segura (Next.js 16 + Supabase SSR)

Proyecto desarrollado para implementar autenticación robusta mediante Server Actions, Cookies `httpOnly` y Middleware en Next.js App Router.

## 🚀 Tecnologías utilizadas

- **Next.js 16+** (App Router)
- **TypeScript**
- **Supabase Authentication & Database** (`@supabase/ssr`)
- **Tailwind CSS**

## 🛡️ Características de Seguridad

1. **Cookies httpOnly & SameSite:** Gestión de tokens delegada completamente a `@supabase/ssr` con cookies no accesibles desde JavaScript client-side.
2. **Middleware de Protección:** Interceptación y redefinición de rutas privadas (`/dashboard`) y redirección de usuarios autenticados fuera del flujo de autenticación.
3. **Validación en Server Actions:** Procesamiento seguro de credenciales en el servidor sin exponer secretos en el cliente.

## 🛠️ Instalación y Configuración

1. Clonar el repositorio:
   ```bash
   git clone <URL_DE_TU_REPOSITTORIO>
   cd mi-sistema-autenticacion