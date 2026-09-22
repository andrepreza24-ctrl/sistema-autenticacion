# Sistema de Autenticación Segura (Next.js 16 + Supabase SSR)

Proyecto desarrollado para la implementación de autenticación robusta mediante Server Actions, Cookies `httpOnly` y Middleware de protección en Next.js App Router.

---

## 🔑 Credenciales de Prueba para Evaluación

Para probar la ruta protegida (`/dashboard`) sin necesidad de registrar un nuevo correo:

* **Correo:** `demo@sistema.com` (o `andre.prueba@gmail.com`)
* **Contraseña:** `Demo123456!` (o la que hayas configurado)

---

## 🚀 Tecnologías Utilizadas

- **Next.js 16+** (App Router)
- **TypeScript**
- **Supabase Authentication & Database** (`@supabase/ssr`)
- **Tailwind CSS**

---

## 🛡️ Mecanismos de Seguridad Implementados

1. **Cookies httpOnly & SameSite:** Gestión de tokens delegada a `@supabase/ssr` en cookies no accesibles desde el cliente JavaScript (protección contra XSS).
2. **Middleware de Protección:** Interceptación de rutas privadas (`/dashboard`) y redirección de usuarios autenticados fuera del flujo de login/registro.
3. **Validación en Server Actions:** Procesamiento seguro de credenciales en el servidor sin exponer claves privadas en el navegador.

---

## 🛠️ Instalación y Configuración Local

1. Clonar el repositorio:
   ```bash
   git clone <https://github.com/andrepreza24-ctrl/sistema-autenticacion.git
   cd mi-sistema-autenticacion