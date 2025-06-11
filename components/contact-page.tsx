"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Clock, MessageSquare, Headphones, Users, Zap } from "lucide-react"
import { Header } from "@/components/header"

export function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simular envío
    setTimeout(() => {
      setIsSubmitting(false)
      alert("¡Mensaje enviado! Te responderemos pronto.")
    }, 2000)
  }

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      description: "Respuesta en 24 horas",
      value: "hola@melodichub.com",
      action: "Enviar Email",
    },
    {
      icon: Phone,
      title: "Teléfono",
      description: "Lun-Vie 9:00-18:00",
      value: "+1 (555) 123-4567",
      action: "Llamar Ahora",
    },
    {
      icon: MessageSquare,
      title: "Chat en Vivo",
      description: "Respuesta inmediata",
      value: "Disponible 24/7",
      action: "Iniciar Chat",
    },
  ]

  const supportTypes = [
    {
      icon: Headphones,
      title: "Soporte Técnico",
      description: "Problemas con la plataforma, bugs, errores",
    },
    {
      icon: Users,
      title: "Ventas",
      description: "Información sobre planes, precios, demos",
    },
    {
      icon: Zap,
      title: "Partnerships",
      description: "Colaboraciones, integraciones, alianzas",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge className="mb-4">
            <MessageSquare className="w-4 h-4 mr-2" />
            Estamos aquí para ayudarte
          </Badge>
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Contacta con Nosotros
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            ¿Tienes preguntas? ¿Necesitas ayuda? Nuestro equipo está listo para asistirte
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Envíanos un Mensaje</CardTitle>
                <CardDescription>Completa el formulario y te responderemos lo antes posible</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">Nombre</Label>
                      <Input id="firstName" placeholder="Tu nombre" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Apellido</Label>
                      <Input id="lastName" placeholder="Tu apellido" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="tu@email.com" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Empresa (Opcional)</Label>
                    <Input id="company" placeholder="Tu empresa o organización" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Tipo de Consulta</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona el tipo de consulta" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="support">Soporte Técnico</SelectItem>
                        <SelectItem value="sales">Ventas y Precios</SelectItem>
                        <SelectItem value="partnership">Partnerships</SelectItem>
                        <SelectItem value="demo">Demo Personalizada</SelectItem>
                        <SelectItem value="feedback">Feedback</SelectItem>
                        <SelectItem value="other">Otro</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Mensaje</Label>
                    <Textarea id="message" placeholder="Cuéntanos cómo podemos ayudarte..." rows={6} required />
                  </div>

                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {/* Contact Methods */}
            <Card>
              <CardHeader>
                <CardTitle>Métodos de Contacto</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactMethods.map((method, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <method.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold">{method.title}</h3>
                      <p className="text-sm text-muted-foreground">{method.description}</p>
                      <p className="text-sm font-medium">{method.value}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Support Types */}
            <Card>
              <CardHeader>
                <CardTitle>Tipos de Soporte</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {supportTypes.map((type, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <type.icon className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-sm">{type.title}</h3>
                      <p className="text-xs text-muted-foreground">{type.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Office Info */}
            <Card>
              <CardHeader>
                <CardTitle>Nuestra Oficina</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium">San Francisco, CA</p>
                    <p className="text-sm text-muted-foreground">
                      123 Music Street
                      <br />
                      San Francisco, CA 94102
                      <br />
                      Estados Unidos
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium">Horarios</p>
                    <p className="text-sm text-muted-foreground">
                      Lun-Vie: 9:00 - 18:00 PST
                      <br />
                      Sáb-Dom: 10:00 - 16:00 PST
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8">Preguntas Frecuentes</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                question: "¿Cuánto tiempo toma recibir una respuesta?",
                answer: "Respondemos emails en menos de 24 horas. Para consultas urgentes, usa nuestro chat en vivo.",
              },
              {
                question: "¿Ofrecen soporte en español?",
                answer: "Sí, nuestro equipo de soporte habla español, inglés y otros idiomas.",
              },
              {
                question: "¿Puedo agendar una demo personalizada?",
                answer: "Absolutamente. Contáctanos y agendaremos una demo adaptada a tus necesidades.",
              },
              {
                question: "¿Hay soporte técnico 24/7?",
                answer:
                  "El chat en vivo está disponible 24/7. El soporte por email y teléfono sigue horarios de oficina.",
              },
            ].map((faq, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
