import SectionHeader from "@/components/section-header"
import SkillProgress from "@/components/skill-progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Server, Database, Shield, Cloud, FileText, Users, Brain, Clock, MessageSquare, Zap } from "lucide-react"

export default function Technologies() {
  return (
    <div className="container mx-auto px-4 py-12 animate-fade-in">
      <SectionHeader
        title="Boîte à outils technique et humaine"
        description="Découvrez les compétences techniques et transversales que j'ai mobilisées durant mon stage."
      />

      <div className="mt-12">
        <Tabs defaultValue="technical" className="w-full">
          <TabsList className="grid w-full grid-cols-2 p-1 bg-blue-50 rounded-xl">
            <TabsTrigger value="technical" className="rounded-lg data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-blue-700 data-[state=active]:text-white">
              Compétences techniques
            </TabsTrigger>
            <TabsTrigger value="soft" className="rounded-lg data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-blue-700 data-[state=active]:text-white">
              Compétences transversales
            </TabsTrigger>
          </TabsList>
          <TabsContent value="technical" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-t-4 border-t-blue-600">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-white">
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-blue-100 p-2">
                      <Server className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <CardTitle>Administration système</CardTitle>
                      <CardDescription>
                        Configuration et maintenance de systèmes Windows, gestion des mises à jour
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 pt-4">
                  <SkillProgress name="Windows 10/11" level={85} icon={Server} />
                  <SkillProgress name="Active Directory" level={75} icon={Database} />
                  <SkillProgress name="SCCM" level={70} icon={Server} />
                  <SkillProgress name="Office 365" level={80} icon={FileText} />
                </CardContent>
              </Card>
              <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-t-4 border-t-blue-600">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-white">
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-blue-100 p-2">
                      <Database className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <CardTitle>Gestion de parc informatique</CardTitle>
                      <CardDescription>
                        Déploiement et maintien d'un parc homogène via des outils spécialisés
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 pt-4">
                  <SkillProgress name="Masterisation" level={80} icon={Server} />
                  <SkillProgress name="Intune/Autopilot" level={65} icon={Cloud} />
                  <SkillProgress name="Inventaire matériel" level={90} icon={Database} />
                  <SkillProgress name="Gestion des licences" level={75} icon={FileText} />
                </CardContent>
              </Card>
              <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-t-4 border-t-blue-600">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-white">
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-blue-100 p-2">
                      <MessageSquare className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <CardTitle>Support utilisateur</CardTitle>
                      <CardDescription>Diagnostic et résolution de problèmes techniques variés</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 pt-4">
                  <SkillProgress name="ServiceNow (MySupport)" level={85} icon={MessageSquare} />
                  <SkillProgress name="Méthodologie ITIL" level={70} icon={FileText} />
                  <SkillProgress name="Résolution d'incidents" level={80} icon={Zap} />
                  <SkillProgress name="Documentation technique" level={75} icon={FileText} />
                </CardContent>
              </Card>
              <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-t-4 border-t-blue-600">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-white">
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-blue-100 p-2">
                      <Shield className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <CardTitle>Sécurité informatique</CardTitle>
                      <CardDescription>Application des règles de base en matière de sécurité</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 pt-4">
                  <SkillProgress name="Gestion des droits d'accès" level={75} icon={Shield} />
                  <SkillProgress name="Solutions antivirus" level={70} icon={Shield} />
                  <SkillProgress name="Effacement sécurisé" level={85} icon={Shield} />
                  <SkillProgress name="Bonnes pratiques" level={80} icon={Shield} />
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="soft" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-t-4 border-t-yellow-500">
                <CardHeader className="bg-gradient-to-r from-yellow-50 to-white">
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-yellow-100 p-2">
                      <Users className="h-5 w-5 text-yellow-600" />
                    </div>
                    <div>
                      <CardTitle>Compétences relationnelles</CardTitle>
                      <CardDescription>Interactions avec les utilisateurs et l'équipe</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 pt-4">
                  <SkillProgress name="Communication claire" level={85} icon={MessageSquare} />
                  <SkillProgress name="Écoute active" level={90} icon={Users} />
                  <SkillProgress name="Travail en équipe" level={85} icon={Users} />
                  <SkillProgress name="Pédagogie" level={80} icon={Brain} />
                </CardContent>
              </Card>
              <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-t-4 border-t-yellow-500">
                <CardHeader className="bg-gradient-to-r from-yellow-50 to-white">
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-yellow-100 p-2">
                      <Clock className="h-5 w-5 text-yellow-600" />
                    </div>
                    <div>
                      <CardTitle>Compétences organisationnelles</CardTitle>
                      <CardDescription>Gestion du temps et des priorités</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 pt-4">
                  <SkillProgress name="Gestion des priorités" level={85} icon={Clock} />
                  <SkillProgress name="Organisation du travail" level={80} icon={Clock} />
                  <SkillProgress name="Autonomie" level={75} icon={Brain} />
                  <SkillProgress name="Rigueur" level={85} icon={FileText} />
                </CardContent>
              </Card>
              <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-t-4 border-t-yellow-500">
                <CardHeader className="bg-gradient-to-r from-yellow-50 to-white">
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-yellow-100 p-2">
                      <Brain className="h-5 w-5 text-yellow-600" />
                    </div>
                    <div>
                      <CardTitle>Adaptabilité</CardTitle>
                      <CardDescription>Capacité à s'adapter aux situations et aux évolutions</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 pt-4">
                  <SkillProgress name="Apprentissage rapide" level={85} icon={Brain} />
                  <SkillProgress name="Gestion du stress" level={75} icon={Brain} />
                  <SkillProgress name="Résolution de problèmes" level={80} icon={Zap} />
                  <SkillProgress name="Curiosité technique" level={90} icon={Brain} />
                </CardContent>
              </Card>
              <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-t-4 border-t-yellow-500">
                <CardHeader className="bg-gradient-to-r from-yellow-50 to-white">
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-yellow-100 p-2">
                      <Zap className="h-5 w-5 text-yellow-600" />
                    </div>
                    <div>
                      <CardTitle>Qualités personnelles</CardTitle>
                      <CardDescription>Traits de caractère mobilisés durant le stage</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 pt-4">
                  <SkillProgress name="Ponctualité" level={95} icon={Clock} />
                  <SkillProgress name="Motivation" level={90} icon={Zap} />
                  <SkillProgress name="Sérieux" level={90} icon={FileText} />
                  <SkillProgress name="Implication" level={85} icon={Users} />
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <div className="mt-16">
        <h3 className="mb-6 text-2xl font-bold gradient-heading">Langues</h3>
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-blue-100">
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold text-xl text-blue-800">Français</h4>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Natif</span>
                </div>
                <p className="text-muted-foreground">Langue maternelle</p>
                <div className="h-3 w-full rounded-full bg-blue-100 mt-2">
                  <div className="h-3 w-full rounded-full bg-gradient-to-r from-blue-500 to-blue-700" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-blue-100">
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold text-xl text-blue-800">Anglais</h4>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">B2</span>
                </div>
                <p className="text-muted-foreground">Niveau B2 (lu, écrit, parlé)</p>
                <div className="h-3 w-full rounded-full bg-blue-100 mt-2">
                  <div className="h-3 w-[75%] rounded-full bg-gradient-to-r from-blue-500 to-blue-700" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
