import Image from "next/image"
import SectionHeader from "@/components/section-header"
import QuoteCard from "@/components/quote-card"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

export default function Future() {
  return (
    <div className="container mx-auto px-4 py-12 animate-fade-in">
      <SectionHeader
        title="De l'expérience au projet professionnel"
        description="Découvrez l'impact de ce stage sur mon orientation et mes objectifs futurs."
      />

      <div className="mt-12 grid gap-8 md:grid-cols-2">
        <div className="space-y-6">
          <p className="text-lg">
            Cette expérience chez ALTEN a été déterminante dans la construction de mon projet professionnel. Elle m'a
            permis de confirmer mon intérêt pour le domaine du support informatique tout en m'ouvrant à de nouvelles
            perspectives, notamment dans la gestion des technologies cloud et la transformation numérique.
          </p>
          <p>
            J'ai pu identifier mes points forts, comme ma capacité à résoudre méthodiquement des problèmes techniques et
            à communiquer efficacement avec les utilisateurs. J'ai également pris conscience des domaines dans lesquels
            je souhaite me perfectionner, comme les technologies de déploiement cloud et la sécurité informatique.
          </p>
          <p>
            Ce stage a renforcé ma conviction que je souhaite évoluer dans un environnement technique en constante
            évolution, où l'apprentissage continu est essentiel et où chaque jour apporte de nouveaux défis à relever.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <div className="relative h-[300px] w-full overflow-hidden rounded-xl">
            <Image
              src="/placeholder.svg?height=600&width=800"
              alt="Représentation de l'évolution professionnelle"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      <div className="mt-16">
        <h3 className="mb-6 text-2xl font-bold">Impact sur mon parcours</h3>
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Pour ma formation</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Cette expérience m'a permis d'identifier les modules de formation et de spécialisation qui me
                permettront de me perfectionner dans les domaines qui m'intéressent particulièrement, comme les
                technologies cloud et la gestion de parc informatique.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Pour mon prochain stage</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Cette première expérience significative enrichit considérablement mon CV et me permettra de postuler à
                des stages plus spécialisés, potentiellement orientés vers les technologies cloud ou la gestion de
                projets IT.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Pour mon insertion professionnelle</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                La maîtrise des outils Microsoft très répandus dans les entreprises (SCCM, Active Directory, Intune)
                représente un atout important sur le marché du travail. De plus, la compréhension des enjeux de
                transition numérique me permet désormais de mieux valoriser mon profil.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mt-16">
        <h3 className="mb-6 text-2xl font-bold">Ce que je recherche maintenant</h3>
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <ArrowRight className="h-5 w-5" />
            </div>
            <div>
              <h4 className="font-semibold">Approfondir mes connaissances en technologies cloud</h4>
              <p className="text-muted-foreground">
                Je souhaite me spécialiser davantage dans les solutions de gestion cloud comme Microsoft Intune, Azure
                AD et les technologies de déploiement modernes.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <ArrowRight className="h-5 w-5" />
            </div>
            <div>
              <h4 className="font-semibold">Développer des compétences en automatisation</h4>
              <p className="text-muted-foreground">
                L'automatisation des tâches répétitives est un enjeu majeur pour les équipes support. Je souhaite
                développer des compétences en scripting (PowerShell) et en automatisation des processus.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <ArrowRight className="h-5 w-5" />
            </div>
            <div>
              <h4 className="font-semibold">Évoluer vers des rôles à responsabilité</h4>
              <p className="text-muted-foreground">
                À terme, je souhaite évoluer vers des postes à responsabilité comme administrateur système ou chef de
                projet IT, où je pourrai mettre à profit à la fois mes compétences techniques et transversales.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <QuoteCard quote="Ce stage chez ALTEN m'a non seulement apporté des compétences techniques précieuses, mais m'a aussi aidé à affiner mon projet professionnel en me confrontant aux réalités du terrain. Je ressors de cette expérience avec une vision plus claire de mes objectifs et des étapes nécessaires pour les atteindre." />
      </div>
    </div>
  )
}
