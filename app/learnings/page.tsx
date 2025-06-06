import SectionHeader from "@/components/section-header"
import TimelineItem from "@/components/timeline-item"
import InfoCard from "@/components/info-card"
import QuoteCard from "@/components/quote-card"
import { Lightbulb, Zap } from "lucide-react"

export default function Learnings() {
  return (
    <div className="container mx-auto px-4 py-12 animate-fade-in relative z-10">
      <SectionHeader
        title="Apprentissages et défis"
        description="Découvrez ce que j'ai appris durant mon stage et les défis que j'ai relevés."
      />

      <div className="mt-12">
        <h3 className="mb-6 text-2xl font-bold text-slate-900 dark:text-gray-100 transition-colors duration-elegant">Mon parcours d'apprentissage</h3>
        <div className="mt-8">
          <TimelineItem
            date="Semaine 1-2"
            title="Découverte et intégration"
            description="Prise en main des outils et découverte de l'environnement de travail. Formation sur ServiceNow et les procédures internes."
          />
          <TimelineItem
            date="Semaine 3-4"
            title="Autonomie progressive"
            description="Traitement autonome des tickets de niveau 1. Apprentissage des techniques de masterisation."
          />
          <TimelineItem
            date="Semaine 5-6"
            title="Montée en compétences"
            description="Gestion de tickets plus complexes (niveau 2). Participation active au projet de transition vers Intune/Autopilot."
          />          <TimelineItem
            date="Semaine 7-8"
            title="Autonomie complète"
            description="Gestion autonome des incidents critiques sans supervision. Mise en place de procédures personnalisées pour optimiser la résolution des problèmes récurrents."
          />
        </div>
      </div>      <div className="mt-16 grid gap-8 md:grid-cols-2">
        <InfoCard title="Ce qui m'a marqué" icon={Lightbulb}>          <ul className="ml-6 list-disc space-y-2 text-slate-700 dark:text-gray-300">
            <li>L'importance cruciale du support informatique dans le fonctionnement quotidien de l'entreprise</li>
            <li>La diversité des problématiques rencontrées et la nécessité d'être polyvalent</li>
            <li>L'évolution constante des technologies et l'importance de la veille technologique</li>
          </ul>
        </InfoCard>
        <InfoCard title="Ce qui m'a surpris" icon={Zap}>          <ul className="ml-6 list-disc space-y-2 text-slate-700 dark:text-gray-300">
            <li>La complexité de la gestion d'un parc informatique de grande taille</li>
            <li>L'importance des soft skills dans un métier technique comme le support informatique</li>
            <li>La rapidité avec laquelle j'ai pu monter en compétences grâce à l'accompagnement de l'équipe</li>
          </ul>
        </InfoCard>
      </div>      <div className="mt-16">        <h3 className="mb-6 text-2xl font-bold text-slate-900 dark:text-gray-100 transition-colors duration-elegant">Une anecdote représentative</h3>
        <div className="rounded-xl bg-white dark:bg-gray-800 p-6 border-2 border-blue-200 dark:border-gray-700 shadow-md transition-all duration-elegant hover:shadow-xl hover:shadow-blue-500/20 dark:hover:shadow-blue-400/20 hover:scale-[1.01] hover:-translate-y-1">
          <p className="italic text-slate-800 dark:text-gray-200">
            Lors d'une journée particulièrement chargée, notre équipe a été confrontée à un afflux massif de tickets urgents 
            avec des problèmes de connexion pour plusieurs départements. 
            Face à cette situation critique, nous avons immédiatement mis en place une stratégie de répartition des tâches 
            basée sur les compétences de chacun.
          </p>
          <p className="mt-4 italic text-slate-800 dark:text-gray-200">
            Grâce à l'esprit d'équipe et une communication fluide entre les membres, nous avons pu traiter méthodiquement 
            chaque ticket par ordre de priorité. J'ai été impressionné par notre capacité collective à rester calmes sous pression 
            et à nous entraider lorsque l'un d'entre nous rencontrait une difficulté technique particulière.
          </p>
          <p className="mt-4 italic text-slate-800 dark:text-gray-200">
            Cette expérience m'a démontré que grâce à l'esprit d'équipe, nous pouvions gérer efficacement un grand nombre de 
            tickets urgents et les traiter à temps, même dans les situations les plus tendues. La satisfaction des utilisateurs 
            et les remerciements de notre responsable ont confirmé l'importance de cette collaboration.
          </p>
        </div>
      </div><div className="mt-16">
        <QuoteCard quote="Ce stage m'a permis de confronter mes connaissances théoriques à la réalité du terrain. J'ai découvert que la technique n'est qu'une partie du métier, et que la communication et la méthodologie sont tout aussi importantes pour réussir dans le support informatique." />
      </div>
    </div>
  )
}
