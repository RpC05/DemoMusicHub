import { supabase } from "./supabase"

export interface AdminUser {
  id: number
  username: string
  email: string
  nombre: string
  apellido: string
  activo: boolean
  ultimo_acceso: string | null
  created_at: string
}

export interface LoginCredentials {
  username: string
  password: string
}

// Verificar credenciales de admin usando la tabla pública de usuarios
export async function verificarCredencialesAdmin(credentials: LoginCredentials): Promise<AdminUser | null> {
  try {
    // Buscar en la tabla pública de usuarios
    const { data: user, error } = await supabase
      .from("usuarios") // Cambiar a tabla pública
      .select("*")
      .eq("email", credentials.username) // Usar email como username
      .single()

    if (error || !user) {
      return null
    }

    // Para demo, verificar contraseña simple (en producción usar hash)
    // Por ahora aceptamos cualquier contraseña para usuarios existentes
    const passwordValida = credentials.password.length > 0

    if (!passwordValida) {
      return null
    }

    // Retornar usuario adaptado al formato AdminUser
    return {
      id: user.id,
      username: user.email,
      email: user.email,
      nombre: user.nombre || "Usuario",
      apellido: user.apellido || "Admin",
      activo: true,
      ultimo_acceso: new Date().toISOString(),
      created_at: user.created_at || new Date().toISOString(),
    } as AdminUser
  } catch (error) {
    console.error("Error al verificar credenciales:", error)
    return null
  }
}
