import Image from "next/image"
import Link from "next/link"
import HeroSection from "@/components/hero-section"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight, Calendar } from "lucide-react"
import { getAssetPath } from "@/lib/assets"

export default function Home() {
  return (
    <div className="flex flex-col">      <HeroSection
        title={<span className="gradient-heading">Mon expérience au Support Informatique chez ALTEN</span>}
        description="Découvrez mon parcours de 8 semaines en tant que Technicien Support Informatique au sein d'ALTEN, leader mondial de l'ingénierie et des IT Services."
        imageSrc={getAssetPath("support-informatique.jpg")}
        imageAlt="Bureau moderne avec des écrans d'ordinateur représentant le support informatique"
        primaryButtonText="Découvrir mon expérience"
        primaryButtonHref="/my-role"
        isAnimated={true}
      />      <section className="w-full py-12 md:py-24 bg-gradient-to-b from-gray-900 via-blue-900/10 to-gray-900 relative overflow-hidden flex items-center justify-center">
        <div className="container w-full mx-auto px-4 md:px-6 flex flex-col items-center relative z-10">
          <div className="flex flex-col items-center justify-center space-y-4 text-center max-w-4xl mx-auto">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-slate-100">Explorez mon parcours</h2>
              <p className="max-w-[900px] text-slate-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Découvrez les différentes facettes de mon stage chez ALTEN à travers ces sections
              </p>
            </div>
          </div>
          <div className="mx-auto grid w-full max-w-none grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
            <SectionCard
              title="ALTEN"
              description="Découvrez ce leader mondial de l'ingénierie et des IT Services"
              href="/about-alten"
            />
            <SectionCard
              title="Mon Rôle"
              description="Mes missions et responsabilités au sein du Support Informatique"
              href="/my-role"
            />
            <SectionCard
              title="Technologies"
              description="Les outils et compétences techniques et humaines mobilisés"
              href="/technologies"
            />
            <SectionCard
              title="Apprentissages"
              description="Ce que j'ai appris et les défis que j'ai relevés"
              href="/learnings"
            />
            <SectionCard
              title="Et Après?"
              description="L'impact de cette expérience sur mon projet professionnel"
              href="/future"
            />            <Card className="flex h-full flex-col justify-between overflow-hidden border border-blue-900/40 bg-gradient-to-br from-gray-800 to-blue-900/10 hover:shadow-xl hover:shadow-blue-400/30 hover:scale-[1.03] hover:-translate-y-2 transition-all duration-gentle ease-elegant card-ultra-smooth">
              <CardContent className="flex flex-col items-center justify-center p-10">
                <div className="aspect-square w-40 rounded-full bg-gradient-to-r p-3 from-blue-400 via-red-400 to-yellow-400 shadow-2xl flex items-center justify-center transition-all duration-gentle ease-elegant hover:scale-110 hover:rotate-3">
                  <Calendar className="w-20 h-20 text-white transition-all duration-gentle ease-elegant" />
                </div>                <div className="mt-8 text-center">
                  <p className="font-medium text-blue-300 text-xl transition-colors duration-gentle ease-elegant">Stage effectué de mars à juin 2025</p>
                  <p className="text-lg text-slate-300 mt-3 transition-colors duration-gentle ease-elegant">
                    Une expérience enrichissante dans le domaine du support informatique
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

interface SectionCardProps {
  title: string
  description: string
  href: string
}

function SectionCard({ title, description, href }: SectionCardProps) {
  return (
    <Card className="flex h-full flex-col justify-between overflow-hidden transition-all duration-gentle ease-elegant hover:shadow-xl hover:shadow-blue-400/30 border border-blue-900/40 bg-gradient-to-br from-gray-800 to-blue-900/10 hover:scale-[1.03] hover:-translate-y-3 card-ultra-smooth">
      <CardContent className="flex flex-col justify-between p-6">
        <div className="space-y-3">
          <h3 className="font-bold text-lg text-blue-300 transition-colors duration-gentle ease-elegant">{title}</h3>
          <p className="text-sm text-slate-300 leading-relaxed transition-colors duration-gentle ease-elegant">{description}</p>
        </div>
        <div className="pt-4">
          <Link href={href}>
            <Button variant="ghost" className="gap-1 p-0 font-medium text-blue-400 hover:text-blue-300 transition-all duration-gentle ease-elegant hover:gap-3 hover:translate-x-2">
              En savoir plus
              <ChevronRight className="h-4 w-4 transition-transform duration-gentle ease-elegant group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
