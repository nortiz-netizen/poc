import { Code, Palette, BarChart3, Smartphone, Wrench, Brain } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Code,
    title: "Desarrollo de Software",
    description: "Analizamos las últimas tendencias en tecnología y trabajamos con altos estándares para desarrollar plataformas confiables, escalables y seguras, que permiten generar resultados de alto impacto en tu organización."
  },
  {
    icon: Palette,
    title: "Diseño UX & UI",
    description: "Diseñamos y testeamos interfaces desde el primer punto de contacto hasta después de la última interacción del usuario. Creamos productos que generan una sensación satisfactoria en la experiencia de usuario."
  },
  {
    icon: BarChart3,
    title: "Business Intelligence y Data Visualization",
    description: "Analizamos y procesamos tus datos para darte una visión completa de tu negocio. Consolidamos la información en dashboards claros y accionables, permitiéndote tomar decisiones en tiempo real."
  },
  {
    icon: Smartphone,
    title: "Desarrollo de Aplicaciones",
    description: "Tus aplicaciones en todo lugar, la movilidad está dominando el mundo. Empresas y gobiernos que quieren estar cerca de sus usuarios, deben ofrecer aplicaciones móviles simples, intuitivas y útiles."
  },
  {
    icon: Wrench,
    title: "Soporte y Desarrollo Evolutivo",
    description: "El soporte y desarrollo evolutivo garantizan la mejora continua y la adaptación de sistemas o productos para satisfacer necesidades cambiantes, manteniendo la estabilidad y el rendimiento."
  },
  {
    icon: Brain,
    title: "Machine Learning & Generative AI",
    description: "Implementamos modelos avanzados de Machine Learning que aprenden, se adaptan y toman decisiones de forma autónoma. Nuestros sistemas identifican patrones y generan predicciones altamente precisas."
  }
]

export function Services() {
  return (
    <section id="servicios" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <p className="font-mono text-sm text-muted-foreground tracking-wider mb-12">
          NUESTROS_SERVICIOS
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group p-8 border border-border hover:border-foreground/50 transition-colors"
            >
              <service.icon className="w-8 h-8 text-muted-foreground group-hover:text-foreground transition-colors mb-6" />
              <h3 className="text-lg font-semibold mb-4">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6">
            ¿Sabes lo que necesitas para tu nuevo proyecto?
          </p>
          <Link 
            href="#contacto"
            className="inline-flex items-center gap-2 border border-foreground px-8 py-4 text-sm font-medium hover:bg-foreground hover:text-background transition-colors"
          >
            Escríbenos
          </Link>
        </div>
      </div>
    </section>
  )
}
