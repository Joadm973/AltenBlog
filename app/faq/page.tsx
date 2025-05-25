import SectionHeader from "@/components/section-header"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { HelpCircle } from "lucide-react"

export default function FAQ() {
  return (
    <div className="container py-12 animate-fade-in">
      <SectionHeader
        title="Questions fréquentes"
        description="Retrouvez les réponses aux questions les plus courantes sur mon stage chez ALTEN."
        centered
      />

      <div className="mx-auto mt-12 max-w-3xl">
        <Accordion type="single" collapsible className="w-full space-y-4">
          <AccordionItem value="item-1" className="border border-blue-100 dark:border-blue-900/30 rounded-lg bg-white dark:bg-gray-800 px-6 shadow-sm">
            <AccordionTrigger className="py-4 text-left font-medium text-lg hover:no-underline hover:text-blue-700 dark:hover:text-blue-400 data-[state=open]:text-blue-700 dark:data-[state=open]:text-blue-400">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-blue-50 dark:bg-blue-900/50 p-2 flex-shrink-0">
                  <HelpCircle className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                </div>
                <span>Quelles étaient vos principales responsabilités chez ALTEN ?</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground dark:text-gray-300 pt-2 pb-4 pl-10">
              <p>En tant que Technicien Support Informatique N1/N2, mes principales responsabilités étaient :</p>
              <ul className="ml-6 mt-2 list-disc space-y-1">
                <li>La gestion des tickets d'assistance via l'outil ServiceNow (MySupport)</li>
                <li>La masterisation des postes de travail pour les nouveaux arrivants</li>
                <li>La participation au projet de transition vers Intune/Autopilot</li>
                <li>La gestion des retours matériels</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="border border-blue-100 dark:border-blue-900/30 rounded-lg bg-white dark:bg-gray-800 px-6 shadow-sm">
            <AccordionTrigger className="py-4 text-left font-medium text-lg hover:no-underline hover:text-blue-700 dark:hover:text-blue-400 data-[state=open]:text-blue-700 dark:data-[state=open]:text-blue-400">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-blue-50 dark:bg-blue-900/50 p-2 flex-shrink-0">
                  <HelpCircle className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                </div>
                <span>Qu'avez-vous appris durant ce stage ?</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground dark:text-gray-300 pt-2 pb-4 pl-10">
              <p>
                Ce stage m'a permis de développer de nombreuses compétences techniques comme la maîtrise de ServiceNow,
                SCCM, Active Directory et Intune. J'ai également renforcé mes compétences transversales comme la
                communication, la gestion des priorités et la résolution méthodique de problèmes. J'ai appris
                l'importance cruciale du support informatique dans le fonctionnement quotidien d'une entreprise et la
                nécessité d'être polyvalent face à la diversité des problématiques rencontrées.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className="border border-blue-100 dark:border-blue-900/30 rounded-lg bg-white dark:bg-gray-800 px-6 shadow-sm">
            <AccordionTrigger className="py-4 text-left font-medium text-lg hover:no-underline hover:text-blue-700 dark:hover:text-blue-400 data-[state=open]:text-blue-700 dark:data-[state=open]:text-blue-400">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-blue-50 dark:bg-blue-900/50 p-2 flex-shrink-0">
                  <HelpCircle className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                </div>
                <span>Quel a été votre plus grand défi durant ce stage ?</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground dark:text-gray-300 pt-2 pb-4 pl-10">
              <p>
                Mon plus grand défi a été la résolution d'un problème complexe lié à Intune qui bloquait le déploiement
                sur certains modèles d'ordinateurs. Après plusieurs jours d'investigation, j'ai identifié un conflit
                entre les pilotes préinstallés et ceux déployés par Intune. J'ai développé une solution qui a permis de
                débloquer le projet et d'accélérer la transition vers cette nouvelle technologie.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4" className="border border-blue-100 dark:border-blue-900/30 rounded-lg bg-white dark:bg-gray-800 px-6 shadow-sm">
            <AccordionTrigger className="py-4 text-left font-medium text-lg hover:no-underline hover:text-blue-700 dark:hover:text-blue-400 data-[state=open]:text-blue-700 dark:data-[state=open]:text-blue-400">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-blue-50 dark:bg-blue-900/50 p-2 flex-shrink-0">
                  <HelpCircle className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                </div>
                <span>Comment ce stage a-t-il influencé votre projet professionnel ?</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground dark:text-gray-300 pt-2 pb-4 pl-10">
              <p>
                Ce stage a été déterminant dans la construction de mon projet professionnel. Il m'a permis de confirmer
                mon intérêt pour le domaine du support informatique tout en m'ouvrant à de nouvelles perspectives,
                notamment dans la gestion des technologies cloud et la transformation numérique. J'ai pu identifier mes
                points forts et les domaines dans lesquels je souhaite me perfectionner. À terme, je souhaite évoluer
                vers des postes à responsabilité comme administrateur système ou chef de projet IT.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}
