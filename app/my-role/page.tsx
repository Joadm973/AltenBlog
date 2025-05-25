import SectionHeader from "@/components/section-header"
import MissionCard from "@/components/mission-card"
import QuoteCard from "@/components/quote-card"
import { Ticket, Monitor, Cloud, Package } from "lucide-react"

export default function MyRole() {
  return (
    <div className="container mx-auto px-4 py-12 animate-fade-in relative z-10">
      <SectionHeader
        title="Dans les coulisses du Support Informatique"
        description="Découvrez mon rôle et mes missions principales au sein du service Support Informatique d'ALTEN."
      />

      <div className="mt-12 space-y-6 p-6 rounded-xl bg-gradient-to-br from-blue-600/80 to-indigo-700/80 dark:from-blue-600/80 dark:to-indigo-800/80 shadow-lg">
        <h3 className="text-2xl font-bold text-white dark:text-white">Description de mon rôle</h3>
        <p className="text-lg text-white dark:text-white">
          Durant ce stage au sein du service Support Informatique d'ALTEN, j'ai occupé le poste de Technicien Support
          Informatique N1/N2. Ma mission principale consistait à assurer un support technique de qualité aux
          collaborateurs de l'entreprise, afin de garantir la continuité de service et de minimiser l'impact des
          incidents informatiques sur leur productivité.
        </p>
      </div>

      <div className="mt-12">
        <h3 className="mb-6 text-2xl font-bold text-white dark:text-white bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-blue-500 dark:to-indigo-600 p-4 rounded-xl inline-block">Mes missions principales</h3>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <MissionCard
            title="Gestion des tickets MySupport"
            description="Traitement des demandes d'assistance via ServiceNow"
            icon={Ticket}
            bulletPoints={[
              "Réception et analyse des tickets selon leur nature (incidents, problèmes, demandes, changements)",
              "Priorisation selon le niveau d'urgence (low, mid, high)",
              "Traitement des incidents selon une méthodologie ITIL",
              "Documentation des solutions dans la base de connaissances",
            ]}
          />
          <MissionCard
            title="Masterisation des postes"
            description="Déploiement d'images système standardisées"
            icon={Monitor}
            bulletPoints={[
              "Préparation des postes de travail pour les nouveaux arrivants",
              "Configuration des images système via SCCM",
              "Installation et paramétrage des logiciels métiers",
              "Tests de fonctionnement avant livraison",
            ]}
          />
          <MissionCard
            title="Transition vers Intune/Autopilot"
            description="Participation au projet de modernisation du déploiement"
            icon={Cloud}
            bulletPoints={[
              "Étude des fonctionnalités d'Intune et Autopilot",
              "Tests de déploiement sur des machines pilotes",
              "Documentation des problèmes rencontrés et des solutions",
              "Collaboration avec l'équipe projet pour l'amélioration du processus",
            ]}
          />
          <MissionCard
            title="Gestion des retours matériels"
            description="Traitement du matériel en fin de cycle"
            icon={Package}
            bulletPoints={[
              "Réception et inventaire du matériel retourné",
              "Effacement sécurisé des données",
              "Diagnostic de l'état du matériel",
              "Préparation pour reconditionnement ou recyclage",
            ]}
          />
        </div>
      </div>

      <div className="mt-16">
        <h3 className="mb-6 text-2xl font-bold text-white dark:text-white bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-blue-500 dark:to-indigo-600 p-4 rounded-xl inline-block">Outils, méthodes et savoir-faire utilisés</h3>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4 rounded-xl bg-gradient-to-br from-blue-600/80 to-indigo-700/80 dark:from-blue-600/80 dark:to-indigo-800/80 p-6 shadow-lg">
            <h4 className="font-semibold text-white dark:text-white">Outils techniques</h4>
            <ul className="ml-6 list-disc space-y-2 text-white dark:text-white">
              <li>ServiceNow (MySupport) : Outil de ticketing pour la gestion des incidents</li>
              <li>Microsoft SCCM : Pour le déploiement des images système</li>
              <li>Microsoft Intune et Autopilot : Pour la gestion des appareils via le cloud</li>
              <li>Active Directory : Pour la gestion des droits utilisateurs</li>
              <li>Office 365 : Pour la gestion des licences et la documentation</li>
              <li>McAfee : Pour la mise à jour et la vérification des solutions antivirus</li>
            </ul>
          </div>
          <div className="space-y-4 rounded-xl bg-gradient-to-br from-blue-600/80 to-indigo-700/80 dark:from-blue-600/80 dark:to-indigo-800/80 p-6 shadow-lg">
            <h4 className="font-semibold text-white dark:text-white">Méthodologies et processus</h4>
            <ul className="ml-6 list-disc space-y-2 text-white dark:text-white">
              <li>Méthodologie ITIL : Pour la gestion des incidents et des demandes</li>
              <li>Processus de déploiement : Préparation, configuration, test, livraison</li>
              <li>Gestion des priorités : Traitement des tickets selon leur niveau d'urgence</li>
              <li>Documentation technique : Rédaction de procédures et solutions</li>
              <li>Communication utilisateur : Explications claires et adaptées</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <QuoteCard quote="Mon intégration au sein de l'équipe Support Informatique m'a permis de comprendre l'importance cruciale de ce service dans le bon fonctionnement quotidien de l'entreprise. Chaque incident résolu contribue directement à la productivité des collaborateurs." />
      </div>
    </div>
  )
}
