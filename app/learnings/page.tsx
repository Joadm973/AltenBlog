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

      <div className="mt-12">        <h3 className="mb-6 text-2xl font-bold text-slate-900 dark:text-gray-100 transition-colors duration-elegant">Mon parcours d'apprentissage (3 mois)</h3>
        <div className="mt-8">
          <TimelineItem
            date="Semaines 1-2"
            title="Découverte et intégration"
            description="Prise en main des outils et découverte de l'environnement de travail. Formation sur ServiceNow et les procédures internes."
          />
          <TimelineItem
            date="Semaines 3-4"
            title="Autonomie progressive"
            description="Traitement autonome des tickets de niveau 1. Apprentissage des techniques de masterisation."
          />
          <TimelineItem
            date="Semaines 5-7"
            title="Montée en compétences"
            description="Gestion de tickets plus complexes (niveau 2). Participation active au projet de transition vers Intune/Autopilot."
          />
          <TimelineItem
            date="Semaines 8-10"
            title="Expertise technique"
            description="Intervention sur site (Brive-la-Gaillarde). Gestion autonome des incidents critiques sans supervision."
          />
          <TimelineItem
            date="Semaines 11-12"
            title="Autonomie complète et bilan"
            description="Mise en place de procédures personnalisées pour optimiser la résolution des problèmes récurrents. Transmission des connaissances."
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
      </div>      <div className="mt-16">
        <h2 className="mb-6 text-2xl font-bold text-slate-900 dark:text-gray-100 transition-colors duration-elegant">Une anecdote représentative</h2>
        <div className="rounded-xl bg-white dark:bg-gray-800 p-6 border-2 border-blue-200 dark:border-gray-700 shadow-md transition-all duration-elegant hover:shadow-xl hover:shadow-blue-500/20 dark:hover:shadow-blue-400/20 hover:scale-[1.01] hover:-translate-y-1">
          <p className="italic text-slate-800 dark:text-gray-200">
            Lors d'une journée particulière de mon stage, le site ALTEN de Brive-la-Gaillarde a rencontré des problèmes de connexion réseau qui limitaient le nombre de postes pouvant se connecter simultanément. Face à cette situation critique, mon tuteur de stage et moi avons pris la voiture de société pour nous rendre sur place et installer un switch réseau au serveur pour pouvoir augmenter le nombre de connexions possibles.
          </p>
          <p className="mt-4 italic text-slate-800 dark:text-gray-200">
            Cette mission m'a permis de découvrir une facette différente du métier de support informatique : l'intervention directe sur site. J'ai pu observer concrètement l'installation matérielle et comprendre que le support technique ne se limite pas au traitement de tickets à distance.
          </p>
          <p className="mt-4 italic text-slate-800 dark:text-gray-200">
            Cette expérience a été particulièrement enrichissante car elle m'a montré l'importance du contact direct avec les utilisateurs finaux. Voir l'impact immédiat de notre intervention sur leur productivité quotidienne a renforcé ma compréhension du rôle crucial du service support dans l'écosystème d'une entreprise.
          </p>
        </div>
      </div><div className="mt-16">
        <QuoteCard quote="Ce stage m'a permis de confronter mes connaissances théoriques à la réalité du terrain. J'ai découvert que la technique n'est qu'une partie du métier, et que la communication et la méthodologie sont tout aussi importantes pour réussir dans le support informatique." />
      </div>
    </div>
  )
}
