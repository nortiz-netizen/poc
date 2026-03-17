"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    tags: ["Desarrollo de Software"],
    title: "Presupuesto Abierto",
    client: "Ministerio de Hacienda",
    description: "Asumir la Transparencia en el Estado y rendición de cuentas como un componente transversal en el diseño e implementación de políticas públicas."
  },
  {
    tags: ["Desarrollo de Software", "Business Intelligence"],
    title: "Observatorio Laboral",
    client: "SENCE",
    description: "El Observatorio Laboral es un espacio para que los trabajadores del país, estudiantes y empresas encuentren información de la situación productiva y de ocupaciones."
  },
  {
    tags: ["Diseño UX & UI", "Desarrollo de Aplicaciones"],
    title: "Fiscalización en Terreno",
    client: "Servicio de Impuestos Internos - SII",
    description: "Apoyamos al SII en digitalizar el proceso de Control de Contribuyentes en terreno, dotándolo de una herramienta tecnológica para ejecutar el proceso de fiscalización."
  },
  {
    tags: ["Desarrollo de Aplicaciones"],
    title: "App e-Honorarios",
    client: "Servicio de Impuestos Internos - SII",
    description: "Esta aplicación digitaliza un proceso que tradicionalmente se realizaba en papel, aportando ahorros de tiempo y permitiendo una mejor trazabilidad."
  },
  {
    tags: ["Desarrollo de Software"],
    title: "Bono Clase Media",
    client: "Servicio de Impuestos Internos - SII",
    description: "Implementación del Bono Clase Media y el Préstamo Solidario, entregando a la ciudadanía una aplicación web donde realizar una solicitud online de manera clara y eficiente."
  },
  {
    tags: ["Diseño UX & UI", "Desarrollo de Software"],
    title: "Defensoría del Contribuyente",
    client: "Defensoría del Contribuyente",
    description: "Desarrollo del portal que entrega ayuda gratuita y especializada para recibir orientación y enfrentar discrepancias con el Servicio de Impuestos Internos."
  },
  {
    tags: ["Diseño UX & UI", "Desarrollo de Software"],
    title: "Ciudades Amigables",
    client: "Ministerio de Desarrollo Social",
    description: "Plataforma web para SENAMA que permite aportar y visualizar iniciativas de mejoramiento de comunas chilenas para ofrecer entornos más amigables para personas mayores."
  },
  {
    tags: ["Desarrollo de Software"],
    title: "API para Partners no Aéreos",
    client: "Latam Airlines",
    description: "Ayudamos a LATAM a mejorar la comunicación e integración con partners FFP de todo el mundo mediante el desarrollo de su API REST con estándares de seguridad clase mundial."
  },
  {
    tags: ["Diseño UX & UI", "Desarrollo de Software"],
    title: "Portal Municipal de Trámites",
    client: "Municipalidad Peñalolén",
    description: "Rediseñamos y digitalizamos los principales trámites desde un modelo de atención multicanal que permite dar un mejor servicio a los ciudadanos."
  },
  {
    tags: ["Desarrollo de Software", "Machine Learning"],
    title: "Emprende Banco Estado",
    client: "Banco Estado",
    description: "Portal que ofrece a emprendedoras y emprendedores consejos, herramientas, información de financiamiento y capacitación para lograr los objetivos de sus proyectos."
  },
  {
    tags: ["Diseño UX & UI", "Desarrollo de Software"],
    title: "Kit Digital UC",
    client: "Pontificia Universidad Católica",
    description: "Creación del Kit Digital UC, un sistema de diseño y una librería de componentes con el que diseñadores y desarrolladores crean experiencias digitales consistentes."
  },
  {
    tags: ["Diseño UX & UI", "Desarrollo de Software"],
    title: "Mercado Pyme",
    client: "Banco Estado",
    description: "Catálogo que permite visibilizar y acceder a la oferta de productos y servicios de las más de 15.000 pequeñas y medianas empresas que participan en la plataforma."
  }
]

export function Projects() {
  const [visibleProjects, setVisibleProjects] = useState(6)

  const showMore = () => {
    setVisibleProjects(prev => Math.min(prev + 6, projects.length))
  }

  return (
    <section id="proyectos" className="py-24 px-6 bg-card">
      <div className="max-w-7xl mx-auto">
        <p className="font-mono text-sm text-muted-foreground tracking-wider mb-12">
          PROYECTOS_DESTACADOS
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.slice(0, visibleProjects).map((project, index) => (
            <article 
              key={index}
              className="group p-8 border border-border bg-background hover:border-foreground/50 transition-colors"
            >
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex}
                    className="font-mono text-xs text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                {project.title}
                <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              
              <p className="text-sm text-muted-foreground mb-4">
                {project.client}
              </p>
              
              <p className="text-sm text-muted-foreground leading-relaxed">
                {project.description}
              </p>
            </article>
          ))}
        </div>

        {visibleProjects < projects.length && (
          <div className="mt-12 text-center">
            <button 
              onClick={showMore}
              className="inline-flex items-center gap-2 border border-foreground px-8 py-4 text-sm font-medium hover:bg-foreground hover:text-background transition-colors"
            >
              VER MÁS PROYECTOS
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
