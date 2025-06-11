"use client"

import type { AdminUser } from "./admin-auth"

const ADMIN_SESSION_KEY = "melodichub_admin_session"

export function guardarSesionAdmin(user: AdminUser): void {
  if (typeof window !== "undefined") {
    localStorage.setItem(ADMIN_SESSION_KEY, JSON.stringify(user))
  }
}

export function obtenerSesionAdmin(): AdminUser | null {
  if (typeof window !== "undefined") {
    const session = localStorage.getItem(ADMIN_SESSION_KEY)
    if (session) {
      try {
        return JSON.parse(session)
      } catch {
        return null
      }
    }
  }
  return null
}

export function cerrarSesionAdmin(): void {
  if (typeof window !== "undefined") {
    localStorage.removeItem(ADMIN_SESSION_KEY)
  }
}

export function estaAutenticadoAdmin(): boolean {
  return obtenerSesionAdmin() !== null
}
