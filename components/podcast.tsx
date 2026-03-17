import Link from "next/link"
import { Play, Headphones } from "lucide-react"

export function Podcast() {
  return (
    <section id="podcast" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="font-mono text-sm text-muted-foreground tracking-wider mb-6">
              ESCUCHA NUESTRO PODCAST
            </p>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6 text-balance">
              Ponte cómod@ y escucha, donde y cuando quieras, en el podcast de Asimov.
            </h2>
            <p className="text-muted-foreground mb-8 text-pretty">
              Tenemos tus mismas preguntas y nos apasiona responderlas. Exploramos el futuro de la tecnología, la transformación digital y las tendencias que están cambiando el mundo.
            </p>
            <Link 
              href="#"
              className="inline-flex items-center gap-3 bg-foreground text-background px-8 py-4 text-sm font-medium hover:bg-foreground/90 transition-colors"
            >
              <Play size={18} />
              Dale play a todos los capítulos
            </Link>
          </div>
          
          <div className="relative">
            <div className="aspect-square bg-secondary flex items-center justify-center border border-border">
              <div className="text-center">
                <Headphones className="w-24 h-24 text-muted-foreground mx-auto mb-4" />
                <p className="font-mono text-sm text-muted-foreground">TECNO_FUTURO</p>
                <p className="text-xs text-muted-foreground mt-2">El podcast de Asimov</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
