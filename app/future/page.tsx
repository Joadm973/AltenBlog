import Image from "next/image"
import SectionHeader from "@/components/section-header"
import QuoteCard from "@/components/quote-card"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Database, BarChart3, Brain, Users } from "lucide-react"
import { getAssetPath } from "@/lib/assets"

export default function Future() {
  return (
    <div className="container mx-auto px-4 py-12 animate-fade-in relative z-10">
      <SectionHeader
        title="Une expérience fondatrice vers mes ambitions"
      />

      <div className="mt-12 grid gap-8 md:grid-cols-2">
        <div className="space-y-6">          <p className="text-lg text-gray-800 dark:text-gray-200">
            Cette expérience chez ALTEN a été particulièrement formatrice et enrichissante. Bien que mes aspirations 
            se tournent principalement vers la <span className="font-semibold text-blue-700 dark:text-blue-400">data science et l'analyse de données</span>, 
            ce stage m'a apporté une base solide et des compétences précieuses pour la suite de mon parcours.
          </p>
          <p className="text-lg text-gray-800 dark:text-gray-300">
            J'ai découvert l'importance cruciale du support informatique dans l'écosystème technologique d'une entreprise, 
            et j'ai développé une rigueur méthodologique et des compétences en résolution de problèmes qui seront 
            directement valorisables dans mes futurs projets data.
          </p>
          <p className="text-lg text-gray-800 dark:text-gray-300">
            Étant ma première expérience professionnelle significative, ce stage m'a permis de découvrir 
            concrètement le fonctionnement d'une entreprise : les processus internes, la collaboration entre équipes, 
            les enjeux organisationnels et la culture d'entreprise. Cette immersion dans le monde professionnel 
            sera précieuse quelle que soit la direction que prendra ma carrière.
          </p>
        </div>        <div className="flex items-center justify-center">
          <div className="relative h-[350px] w-full overflow-hidden rounded-xl shadow-md border border-blue-50 dark:border-blue-900/30">
            <Image
              src={getAssetPath("futur.jpg")}
              alt="Pont entre l'IT et la data science"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>
      </div>

      <div className="mt-16">
        <h3 className="mb-6 text-2xl font-bold bg-gradient-to-r from-blue-800 via-blue-700 to-blue-600 dark:from-blue-400 dark:via-red-400 dark:to-yellow-400 bg-clip-text text-transparent">
          Les apports de cette expérience pour mon projet data
        </h3>
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="border-2 border-blue-200 dark:border-gray-700 bg-white dark:bg-gray-800">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-blue-100 dark:bg-blue-900/30 p-2">
                  <Brain className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <CardTitle className="text-gray-800 dark:text-gray-200">Méthologie et rigueur</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300">
                L'approche structurée ITIL et la résolution méthodique de problèmes techniques sont directement 
                transférables à l'analyse de données et à la résolution de problématiques business.
              </p>
            </CardContent>
          </Card>
          <Card className="border-2 border-blue-200 dark:border-gray-700 bg-white dark:bg-gray-800">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-blue-100 dark:bg-blue-900/30 p-2">
                  <Users className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <CardTitle className="text-gray-800 dark:text-gray-200">Communication technique</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300">
                Savoir vulgariser des concepts techniques complexes et s'adapter à différents interlocuteurs 
                est essentiel pour présenter des insights data aux métiers.
              </p>
            </CardContent>
          </Card>
          <Card className="border-2 border-blue-200 dark:border-gray-700 bg-white dark:bg-gray-800">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-blue-100 dark:bg-blue-900/30 p-2">
                  <Database className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <CardTitle className="text-gray-800 dark:text-gray-200">Vision IT globale</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300">
                Comprendre l'architecture informatique d'entreprise me permettra de concevoir des solutions data 
                plus robustes et mieux intégrées aux systèmes existants.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>


      <div className="mt-16">
        <h3 className="mb-6 text-2xl font-bold gradient-heading">Un tremplin vers mes ambitions</h3>
        <div className="grid gap-6 md:grid-cols-2">          <div className="space-y-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 rounded-xl shadow-sm">
            <h4 className="font-semibold text-gray-800 dark:text-gray-200">Compétences techniques valorisables</h4>
            <ul className="ml-6 list-disc space-y-2 text-gray-700 dark:text-gray-300">
              <li>Maîtrise des environnements Windows et des bases de données</li>
              <li>Expérience des outils Microsoft (Excel avancé, Power Platform)</li>
              <li>Compréhension des architectures cloud (Azure, Office 365)</li>
              <li>Gestion de projets techniques et documentation</li>
            </ul>
          </div>          <div className="space-y-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 rounded-xl shadow-sm">
            <h4 className="font-semibold text-gray-800 dark:text-gray-200">Soft skills développées</h4>
            <ul className="ml-6 list-disc space-y-2 text-gray-700 dark:text-gray-300">
              <li>Communication claire avec des profils non-techniques</li>
              <li>Résolution de problèmes sous pression</li>
              <li>Gestion des priorités et organisation du travail</li>
              <li>Travail en équipe et esprit de service</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="mt-16">
        <h3 className="mb-6 text-2xl font-bold text-gray-800 dark:text-gray-200">Remerciements à ALTEN</h3>        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 shadow-sm">
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            Je tiens à exprimer ma profonde gratitude envers ALTEN pour m'avoir offert cette opportunité exceptionnelle. 
            Cette première expérience professionnelle a dépassé toutes mes attentes et m'a permis de grandir tant 
            sur le plan personnel que professionnel.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            Un grand merci à mon tuteur et à toute l'équipe du support informatique qui m'ont accueilli avec bienveillance, 
            partagé leurs connaissances et fait confiance à mes capacités. Leur accompagnement et leur patience ont été 
            déterminants dans la réussite de ce stage.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            ALTEN a su me donner l'autonomie nécessaire pour m'épanouir tout en m'offrant un cadre structuré et formateur. 
            Cette expérience restera un jalon important de mon parcours professionnel et je recommande vivement 
            cette entreprise à tout étudiant souhaitant découvrir le monde de l'entreprise dans d'excellentes conditions.
          </p>
        </div>
      </div>

      <div className="mt-16">
        <QuoteCard 
          quote="Ce stage chez ALTEN a été une expérience formatrice exceptionnelle qui enrichit considérablement mon profil. Les compétences techniques et humaines acquises en support informatique constituent une base solide pour mes ambitions en data science. Je me dirige maintenant vers mes objectifs futurs avec une vision plus complète du monde professionnel et des atouts différenciants."
        />
      </div>
    </div>
  )
}