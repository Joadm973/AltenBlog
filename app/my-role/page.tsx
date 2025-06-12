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
      />      <div className="mt-12 space-y-6 p-6 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-lg transition-all duration-elegant hover:shadow-xl hover:shadow-blue-500/10 dark:hover:shadow-blue-500/10 hover:-translate-y-1">
        <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Description de mon rôle</h3>        <p className="text-lg text-gray-800 dark:text-gray-200">
          Durant ce stage de 3 mois au sein du service Support Informatique d'ALTEN, j'ai occupé le poste de Technicien Support
          Informatique. Ma mission principale consistait à assurer un support technique de qualité aux
          collaborateurs de l'entreprise, afin de garantir la continuité de service et de minimiser l'impact des
          incidents informatiques sur leur productivité.
        </p></div>      <div className="mt-12 p-0 rounded-xl bg-gray-900 border border-gray-700 shadow-lg transition-all duration-elegant hover:shadow-xl hover:shadow-blue-500/20 overflow-hidden">
        <div className="border-b border-gray-700 bg-gray-800 p-5">
          <h3 className="text-2xl font-bold text-gray-100">Mon intégration dans l'équipe</h3>
        </div>
        
        <div className="p-6">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 shadow-sm">
              <div className="flex items-start">
                <div className="bg-gray-700 rounded-md p-2 mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-md font-bold text-gray-100 mb-1">Rattachement hiérarchique</h4>
                  <p className="text-gray-300">
                    Sous la supervision directe de <span className="font-medium text-gray-100">Naser AMARA</span>, Coordinateur Support technique
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 shadow-sm">
              <div className="flex items-start">
                <div className="bg-gray-700 rounded-md p-2 mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-md font-bold text-gray-100 mb-1">Équipe de travail</h4>
                  <p className="text-gray-300">
                    Intégré dans une équipe de <span className="font-medium text-gray-100">6 techniciens</span> spécialisés dans le support informatique
                  </p>
                </div>
              </div>
            </div>
          </div>
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700 shadow-sm mb-6">
            <div className="flex items-start mb-3">
              <div className="bg-gray-700 rounded-md p-2 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h4 className="text-md font-bold text-gray-100">Organisation des tâches</h4>
            </div>
            
            <ul className="space-y-2 pl-10">
              <li className="flex items-center">
                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></div>
                <span className="text-gray-300">Collaboration avec l'équipe : Déploiement pour les masterisations</span>
              </li>
              <li className="flex items-center">
                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></div>
                <span className="text-gray-300">Gestion des stocks : mise en armoire des postes masterisés pour optimiser les livraisons</span>
              </li>
              <li className="flex items-center">
                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></div>
                <span className="text-gray-300">Coordination avec les autres techniciens pour la répartition des tickets selon les spécialités</span>
              </li>
            </ul>
          </div>        </div>
        
        <div className="border-t border-gray-700 bg-gray-850 p-5">
          <h4 className="text-xl font-bold text-gray-100 mb-4">Exemples d'interactions quotidiennes</h4>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-700 rounded-lg p-3 border border-gray-600 shadow-sm">
              <h5 className="font-medium text-gray-100 mb-2 flex items-center">
                <div className="h-6 w-6 rounded-full bg-gray-600 flex items-center justify-center mr-2 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
                Résolution des tickets
              </h5>
              <p className="text-gray-300 ml-8">Priorisation et traitement des tickets critiques en premier, puis escalade vers les tickets moins importants</p>
            </div>
            
            <div className="bg-gray-700 rounded-lg p-3 border border-gray-600 shadow-sm">
              <h5 className="font-medium text-gray-100 mb-2 flex items-center">
                <div className="h-6 w-6 rounded-full bg-gray-600 flex items-center justify-center mr-2 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                Durée moyenne de résolution
              </h5>
              <p className="text-gray-300 ml-8">Entre 20-30 minutes par ticket selon la complexité</p>
            </div>
            
            <div className="bg-gray-700 rounded-lg p-3 border border-gray-600 shadow-sm">
              <h5 className="font-medium text-gray-100 mb-2 flex items-center">
                <div className="h-6 w-6 rounded-full bg-gray-600 flex items-center justify-center mr-2 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                Communication utilisateurs
              </h5>
              <p className="text-gray-300 ml-8">Via ServiceNow pour le suivi, téléphone pour les incidents critiques, et interventions directes sur site quand nécessaire</p>
            </div>
  
          </div>
        </div>
      </div><div className="mt-12">
        <h3 className="mb-6 text-2xl font-bold text-gray-800 dark:text-gray-100">Mes missions principales</h3>
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
        <h3 className="mb-6 text-2xl font-bold text-gray-800 dark:text-gray-100">Outils, méthodes et savoir-faire utilisés</h3>        <div className="grid gap-6 md:grid-cols-2">          <div className="space-y-4 rounded-xl bg-gradient-to-br from-blue-700/80 to-blue-800/80 dark:from-blue-700/80 dark:to-blue-800/80 p-6 shadow-lg transition-all duration-elegant hover:shadow-xl hover:shadow-blue-500/30 dark:hover:shadow-blue-400/30 hover:scale-[1.02] hover:-translate-y-2">
            <h4 className="font-semibold text-gray-100">Outils techniques</h4>
            <ul className="ml-6 list-disc space-y-2 text-gray-200">
              <li>ServiceNow (MySupport) : Outil de ticketing pour la gestion des incidents</li>
              <li>Microsoft SCCM : Pour le déploiement des images système</li>
              <li>Microsoft Intune et Autopilot : Pour la gestion des appareils via le cloud</li>
              <li>Active Directory : Pour la gestion des droits utilisateurs</li>
              <li>Office 365 : Pour la gestion des licences et la documentation</li>
            </ul>
          </div>          <div className="space-y-4 rounded-xl bg-gradient-to-br from-blue-700/80 to-blue-800/80 dark:from-blue-700/80 dark:to-blue-800/80 p-6 shadow-lg transition-all duration-elegant hover:shadow-xl hover:shadow-blue-500/30 dark:hover:shadow-blue-400/30 hover:scale-[1.02] hover:-translate-y-2">
            <h4 className="font-semibold text-gray-100">Méthodologies et processus</h4>
            <ul className="ml-6 list-disc space-y-2 text-gray-200">
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
