const clients = [
  "Ministerio de Hacienda",
  "SENCE",
  "Servicio de Impuestos Internos",
  "Latam Airlines",
  "Banco Estado",
  "Pontificia Universidad Católica",
  "GTD",
  "Ministerio de Desarrollo Social",
  "Biblioteca Nacional",
  "Municipalidad Peñalolén",
  "Universidad Adolfo Ibáñez",
  "Ñuble Alimentos"
]

export function Clients() {
  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-7xl mx-auto">
        <p className="font-mono text-sm text-muted-foreground tracking-wider mb-12 text-center">
          NUESTROS_CLIENTES
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {clients.map((client, index) => (
            <div 
              key={index}
              className="flex items-center justify-center p-6 border border-border bg-background hover:border-foreground/30 transition-colors"
            >
              <span className="text-sm text-muted-foreground text-center font-medium">
                {client}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
