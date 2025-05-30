import SectionHeader from "@/components/section-header"
import TimelineItem from "@/components/timeline-item"
import InfoCard from "@/components/info-card"
import QuoteCard from "@/components/quote-card"
import { Award, Lightbulb, Zap } from "lucide-react"

export default function Learnings() {
  return (
    <div className="container mx-auto px-4 py-12 animate-fade-in relative z-10">
      <SectionHeader
        title="Apprentissages et défis"
        description="Découvrez ce que j'ai appris durant mon stage et les défis que j'ai relevés."
      />

      <div className="mt-12">
        <h3 className="mb-6 text-2xl font-bold text-slate-900">Mon parcours d'apprentissage</h3>
        <div className="mt-8">
          <TimelineItem
            date="Semaine 1-2"
            title="Découverte et intégration"
            description="Prise en main des outils et découverte de l'environnement de travail. Formation sur ServiceNow et les procédures internes."
          />
          <TimelineItem
            date="Semaine 3-4"
            title="Autonomie progressive"
            description="Traitement autonome des tickets de niveau 1. Apprentissage des techniques de masterisation avec SCCM."
          />
          <TimelineItem
            date="Semaine 5-6"
            title="Montée en compétences"
            description="Gestion de tickets plus complexes (niveau 2). Participation active au projet de transition vers Intune/Autopilot."
          />
          <TimelineItem
            date="Semaine 7-8"
            title="Expertise et contribution"
            description="Résolution d'un problème majeur lié à Intune. Documentation des procédures pour faciliter la transition technologique."
          />
        </div>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-3">
        <InfoCard title="Ce qui m'a marqué" icon={Lightbulb}>
          <ul className="ml-6 list-disc space-y-2 text-slate-700">
            <li>L'importance cruciale du support informatique dans le fonctionnement quotidien de l'entreprise</li>
            <li>La diversité des problématiques rencontrées et la nécessité d'être polyvalent</li>
            <li>L'évolution constante des technologies et l'importance de la veille technologique</li>
          </ul>
        </InfoCard>
        <InfoCard title="Ma plus grande réussite" icon={Award}>
          <p className="mb-4 text-slate-700">
            La résolution d'un problème complexe lié à Intune qui bloquait le déploiement sur certains modèles
            d'ordinateurs.
          </p>
          <p className="text-slate-700">
            Après plusieurs jours d'investigation, j'ai identifié un conflit entre les pilotes préinstallés et ceux
            déployés par Intune. J'ai développé une solution qui a permis de débloquer le projet et d'accélérer la
            transition vers cette nouvelle technologie.
          </p>
        </InfoCard>
        <InfoCard title="Ce qui m'a surpris" icon={Zap}>
          <ul className="ml-6 list-disc space-y-2 text-slate-700">
            <li>La complexité de la gestion d'un parc informatique de grande taille</li>
            <li>L'importance des soft skills dans un métier technique comme le support informatique</li>
            <li>La rapidité avec laquelle j'ai pu monter en compétences grâce à l'accompagnement de l'équipe</li>
          </ul>
        </InfoCard>
      </div>
      <div className="mt-16">
        <h3 className="mb-6 text-2xl font-bold text-slate-900">Une anecdote représentative</h3>
        <div className="rounded-xl bg-white p-6 border-2 border-blue-200 shadow-md">
          <p className="italic text-slate-800">
            Lors de ma troisième semaine de stage, j'ai reçu un ticket urgent d'un manager qui ne pouvait plus accéder à
            ses présentations importantes juste avant une réunion client. Malgré la pression, j'ai gardé mon calme et
            méthodiquement identifié que le problème venait d'une corruption du profil utilisateur. En utilisant les
            outils à ma disposition et en suivant les procédures, j'ai pu restaurer l'accès à ses fichiers en moins de
            30 minutes, juste à temps pour sa présentation.
          </p>
          <p className="mt-4 italic text-slate-800">
            Cette expérience m'a montré l'importance de rester méthodique sous pression et la satisfaction que procure
            la résolution d'un problème critique pour un utilisateur. Le manager m'a personnellement remercié, ce qui a
            été très gratifiant.
          </p>
        </div>
      </div>
      <div className="mt-16">
        <h3 className="mb-6 text-2xl font-bold text-slate-900">Compétences développées</h3>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4 rounded-xl bg-white p-6 border-2 border-blue-200 shadow-md">
            <h4 className="font-semibold text-blue-800">Compétences techniques</h4>
            <ul className="ml-6 list-disc space-y-2 text-slate-700">
              <li>Maîtrise approfondie de ServiceNow pour la gestion des tickets</li>
              <li>Configuration et déploiement via SCCM</li>
              <li>Compréhension des mécanismes d'Intune et Autopilot</li>
              <li>Gestion des droits utilisateurs dans Active Directory</li>
              <li>Documentation technique claire et précise</li>
            </ul>
          </div>
          <div className="space-y-4 rounded-xl bg-white p-6 border-2 border-blue-200 shadow-md">
            <h4 className="font-semibold text-blue-800">Compétences transversales</h4>
            <ul className="ml-6 list-disc space-y-2 text-slate-700">
              <li>Communication adaptée aux différents profils d'utilisateurs</li>
              <li>Gestion efficace des priorités en situation de forte charge</li>
              <li>Résolution méthodique de problèmes complexes</li>
              <li>Autonomie dans la recherche de solutions</li>
              <li>Travail collaboratif au sein d'une équipe technique</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <QuoteCard quote="Ce stage m'a permis de confronter mes connaissances théoriques à la réalité du terrain. J'ai découvert que la technique n'est qu'une partie du métier, et que la communication et la méthodologie sont tout aussi importantes pour réussir dans le support informatique." />
      </div>
    </div>
  )
}
