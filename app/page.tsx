import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Projects } from "@/components/projects"
import { Podcast } from "@/components/podcast"
import { Clients } from "@/components/clients"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <Services />
      <Projects />
      <Podcast />
      <Clients />
      <Contact />
      <Footer />
    </main>
  )
}
