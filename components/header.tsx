"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tight text-foreground">
          Asimov Consultores
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#servicios" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            —Qué hacemos
          </Link>
          <Link href="#proyectos" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            —Casos de éxito
          </Link>
          <Link href="#equipo" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            —Asimovers
          </Link>
          <Link href="#podcast" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            —Tecno-Futuro
          </Link>
          <Link 
            href="#contacto" 
            className="text-sm bg-foreground text-background px-4 py-2 hover:bg-foreground/90 transition-colors"
          >
            —Hablemos
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-foreground"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <nav className="flex flex-col px-6 py-4 gap-4">
            <Link 
              href="#servicios" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              —Qué hacemos
            </Link>
            <Link 
              href="#proyectos" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              —Casos de éxito
            </Link>
            <Link 
              href="#equipo" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              —Asimovers
            </Link>
            <Link 
              href="#podcast" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              —Tecno-Futuro
            </Link>
            <Link 
              href="#contacto" 
              className="text-sm bg-foreground text-background px-4 py-2 w-fit hover:bg-foreground/90 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              —Hablemos
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
