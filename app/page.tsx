import Image from "next/image"
import Link from "next/link"
import HeroSection from "@/components/hero-section"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection
        title={<span className="gradient-heading">Mon expérience en Support Informatique chez ALTEN</span>}
        description="Découvrez mon parcours de 8 semaines en tant que Technicien Support Informatique N1/N2 au sein d'ALTEN, leader mondial de l'ingénierie et des IT Services."
        imageSrc="/placeholder.svg?height=600&width=800"
        imageAlt="Bureau moderne avec des écrans d'ordinateur représentant le support informatique"
        primaryButtonText="Découvrir mon expérience"
        primaryButtonHref="/about-alten"
        isAnimated={true}
      />

      <section className="w-full py-12 md:py-24 bg-sky-50 dark:bg-gradient-to-b dark:from-gray-900 dark:via-blue-900/10 dark:to-gray-900 relative overflow-hidden flex items-center justify-center">
        <div className="container max-w-8xl mx-auto px-4 md:px-6 flex flex-col items-center relative z-10">
          <div className="flex flex-col items-center justify-center space-y-4 text-center max-w-4xl mx-auto">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-slate-900 dark:text-slate-100">Explorez mon parcours</h2>
              <p className="max-w-[900px] text-slate-700 dark:text-slate-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Découvrez les différentes facettes de mon stage chez ALTEN à travers ces sections
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
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
            />
            <Card className="flex h-full flex-col justify-between overflow-hidden border border-slate-200 dark:border-blue-900/40 bg-blue-50/80 dark:bg-gradient-to-br dark:from-gray-800 dark:to-blue-900/10 hover:shadow-lg hover:shadow-blue-500/20 dark:hover:shadow-blue-400/30 hover:scale-[1.02] transition-all">
              <CardContent className="flex flex-col items-center justify-center p-6">
                <div className="aspect-square w-16 rounded-full bg-gradient-to-r p-1 from-blue-600 via-red-500 to-yellow-400 dark:from-blue-400 dark:via-red-400 dark:to-yellow-400">
                  <Image
                    src="/placeholder.svg?height=64&width=64"
                    alt="Photo de profil"
                    width={64}
                    height={64}
                    className="rounded-full object-cover"
                  />
                </div>
                <div className="mt-4 text-center">
                  <p className="font-medium text-slate-900 dark:text-blue-300">Stage effectué de juin à août 2024</p>
                  <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
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
    <Card className="flex h-full flex-col justify-between overflow-hidden transition-all hover:shadow-lg hover:shadow-blue-500/20 dark:hover:shadow-blue-400/30 border border-slate-200 dark:border-blue-900/40 bg-blue-50 dark:bg-gradient-to-br dark:from-gray-800 dark:to-blue-900/10 hover:scale-[1.02]">
      <CardContent className="flex flex-col justify-between p-6">
        <div className="space-y-3">
          <h3 className="font-bold text-lg text-slate-900 dark:text-blue-300">{title}</h3>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{description}</p>
        </div>
        <div className="pt-4">
          <Link href={href}>
            <Button variant="ghost" className="gap-1 p-0 font-medium text-blue-700 dark:text-blue-400 hover:text-blue-900 dark:hover:text-blue-300 transition-colors">
              En savoir plus
              <ChevronRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
