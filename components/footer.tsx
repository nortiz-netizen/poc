import Link from "next/link"
import { Linkedin, Twitter, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer id="contacto" className="py-24 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="text-2xl font-bold tracking-tight">
              Asimov Consultores
            </Link>
            <p className="mt-4 text-muted-foreground max-w-md text-pretty">
              Creamos soluciones digitales tan únicas como tu negocio. Transformamos ideas en productos de alto impacto.
            </p>
            
            <div className="flex gap-4 mt-6">
              <a 
                href="#" 
                className="w-10 h-10 border border-border flex items-center justify-center hover:border-foreground hover:text-foreground text-muted-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 border border-border flex items-center justify-center hover:border-foreground hover:text-foreground text-muted-foreground transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 border border-border flex items-center justify-center hover:border-foreground hover:text-foreground text-muted-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <p className="font-mono text-sm text-muted-foreground tracking-wider mb-4">
              NAVEGACIÓN
            </p>
            <nav className="flex flex-col gap-3">
              <Link href="#servicios" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Servicios
              </Link>
              <Link href="#proyectos" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Proyectos
              </Link>
              <Link href="#equipo" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Equipo
              </Link>
              <Link href="#podcast" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Podcast
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="font-mono text-sm text-muted-foreground tracking-wider mb-4">
              CONTACTO
            </p>
            <div className="flex flex-col gap-3">
              <a href="mailto:contacto@asimov.cl" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                contacto@asimov.cl
              </a>
              <p className="text-sm text-muted-foreground">
                Santiago, Chile
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Asimov Consultores. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Política de Privacidad
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Términos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
