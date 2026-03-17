import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-balance">
          Creamos soluciones digitales tan únicas como tu negocio
        </h1>
        <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
          Transformamos ideas en productos digitales de alto impacto. Desarrollo de software, diseño UX/UI, inteligencia de datos y más.
        </p>
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            href="#servicios"
            className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-4 text-sm font-medium hover:bg-foreground/90 transition-colors"
          >
            Nuestros servicios
            <ArrowRight size={16} />
          </Link>
          <Link 
            href="#contacto"
            className="inline-flex items-center gap-2 border border-border px-8 py-4 text-sm font-medium hover:bg-secondary transition-colors"
          >
            Escríbenos
          </Link>
        </div>
      </div>
    </section>
  )
}
