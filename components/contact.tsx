"use client"

import { useState } from "react"
import { Send } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("[v0] Form submitted:", formData)
  }

  return (
    <section id="hablemos" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="font-mono text-sm text-muted-foreground tracking-wider mb-6 text-center">
          HABLEMOS
        </p>
        <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6 text-center text-balance">
          ¿Tienes un proyecto en mente?
        </h2>
        <p className="text-muted-foreground mb-12 text-center text-pretty">
          Cuéntanos sobre tu idea y trabajemos juntos para hacerla realidad.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-background border border-border focus:border-foreground focus:outline-none transition-colors"
                placeholder="Tu nombre"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-background border border-border focus:border-foreground focus:outline-none transition-colors"
                placeholder="tu@email.com"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="company" className="block text-sm font-medium mb-2">
              Empresa
            </label>
            <input
              type="text"
              id="company"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              className="w-full px-4 py-3 bg-background border border-border focus:border-foreground focus:outline-none transition-colors"
              placeholder="Nombre de tu empresa"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Mensaje
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={5}
              className="w-full px-4 py-3 bg-background border border-border focus:border-foreground focus:outline-none transition-colors resize-none"
              placeholder="Cuéntanos sobre tu proyecto..."
              required
            />
          </div>

          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 bg-foreground text-background px-8 py-4 text-sm font-medium hover:bg-foreground/90 transition-colors"
          >
            Enviar mensaje
            <Send size={16} />
          </button>
        </form>
      </div>
    </section>
  )
}
