import Image from "next/image"
import SectionHeader from "@/components/section-header"
import QuoteCard from "@/components/quote-card"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

export default function Future() {
  return (
    <div className="container mx-auto px-4 py-12 animate-fade-in relative z-10">
      <SectionHeader
        title="De l'expérience au projet professionnel"
        description="Découvrez l'impact de ce stage sur mon orientation et mes objectifs futurs."
      />

      <div className="mt-12 grid gap-8 md:grid-cols-2">
        <div className="space-y-6">
          <p className="text-lg text-gray-800 dark:text-gray-200">
            Cette expérience chez ALTEN a été déterminante dans la construction de mon projet professionnel. Elle m'a
            permis de confirmer mon intérêt pour le domaine du support informatique tout en m'ouvrant à de nouvelles
            perspectives, notamment dans la gestion des technologies cloud et la transformation numérique.
          </p>
          <p className="text-gray-800 dark:text-gray-300">
            J'ai pu identifier mes points forts, comme ma capacité à résoudre méthodiquement des problèmes techniques et
            à communiquer efficacement avec les utilisateurs. J'ai également pris conscience des domaines dans lesquels
            je souhaite me perfectionner, comme les technologies de déploiement cloud et la sécurité informatique.
          </p>
          <p className="text-gray-800 dark:text-gray-300">
            Ce stage a renforcé ma conviction que je souhaite évoluer dans un environnement technique en constante
            évolution, où l'apprentissage continu est essentiel et où chaque jour apporte de nouveaux défis à relever.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <div className="relative h-[300px] w-full overflow-hidden rounded-xl shadow-md border border-blue-50 dark:border-blue-900/30">
            <Image
              src="/placeholder.svg?height=600&width=800"
              alt="Représentation de l'évolution professionnelle"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>
      </div>

      <div className="mt-16">
        <h3 className="mb-6 text-2xl font-bold bg-gradient-to-r from-blue-800 via-blue-700 to-blue-600 dark:from-blue-400 dark:via-red-400 dark:to-yellow-400 bg-clip-text text-transparent">Impact sur mon parcours</h3>
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
        <h3 className="mb-6 text-2xl font-bold gradient-heading">Ce que je recherche maintenant</h3>
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 text-white shadow-md">
              <ArrowRight className="h-5 w-5" />
            </div>
            <div>
              <h4 className="font-semibold text-blue-800 dark:text-blue-300">Approfondir mes connaissances en technologies cloud</h4>
              <p className="text-muted-foreground dark:text-gray-300">
                Je souhaite me spécialiser davantage dans les solutions de gestion cloud comme Microsoft Intune, Azure
                AD et les technologies de déploiement modernes.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 text-white shadow-md">
              <ArrowRight className="h-5 w-5" />
            </div>
            <div>
              <h4 className="font-semibold text-blue-800 dark:text-blue-300">Développer des compétences en automatisation</h4>
              <p className="text-muted-foreground dark:text-gray-300">
                L'automatisation des tâches répétitives est un enjeu majeur pour les équipes support. Je souhaite
                développer des compétences en scripting (PowerShell) et en automatisation des processus.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 text-white shadow-md">
              <ArrowRight className="h-5 w-5" />
            </div>
            <div>
              <h4 className="font-semibold text-blue-800 dark:text-blue-300">Évoluer vers des rôles à responsabilité</h4>
              <p className="text-muted-foreground dark:text-gray-300">
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
