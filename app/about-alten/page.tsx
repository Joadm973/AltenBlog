import type React from "react"
import Image from "next/image"
import SectionHeader from "@/components/section-header"
import QuoteCard from "@/components/quote-card"
import { Card, CardContent } from "@/components/ui/card"
import { Building, Users, Globe, TrendingUp } from "lucide-react"

export default function AboutAlten() {  return (
    <div className="container mx-auto px-4 py-12 animate-fade-in relative z-10">
      <SectionHeader
        title="ALTEN: Leader mondial de l'ingénierie et des IT Services"
        description="Découvrez l'entreprise qui m'a accueilli pour cette expérience professionnelle enrichissante."
      />

      <div className="mt-12 grid gap-8 md:grid-cols-2">        <div className="space-y-6 p-6 bg-gray-800 border-2 border-gray-700 rounded-xl shadow-md hover:shadow-lg transition-all text-gray-200">          <p className="text-lg text-gray-200">
            Créé il y a plus de 37 ans et présent dans plus de 30 pays, le Groupe <span className="font-semibold text-blue-400">ALTEN</span> s'est imposé comme un leader
            mondial de l'Ingénierie et des IT Services. L'entreprise intervient auprès des grands acteurs dans divers
            secteurs industriels et technologiques, notamment l'Aéronautique, l'Automobile, les Télécoms, la Banque et
            l'Énergie.
          </p>          <p className="text-gray-300">
            En 2024, <span className="font-semibold text-blue-400">ALTEN</span> a réalisé un chiffre d'affaires de <span className="font-semibold">4,14 milliards d'euros</span> avec <span className="font-semibold">57 700 collaborateurs</span> dans le
            monde, dont 88% sont des ingénieurs-consultants. En France, l'entreprise compte 13 470 collaborateurs
            répartis sur une vingtaine de sites pour un chiffre d'affaires de 1 360 millions d'euros.
          </p>          <p className="text-gray-300">
            <span className="font-semibold text-blue-400">ALTEN</span> a intégré le Développement Durable au cœur de sa stratégie depuis plus de 10 ans, avec un engagement
            structuré autour de trois piliers : l'innovation durable, l'environnement et l'humain.
          </p>
        </div>
        <div className="flex items-center justify-center">          <div className="relative h-[350px] w-full overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-transform hover:scale-[1.02] duration-300 border-2 border-gray-700 bg-gray-800 flex items-end">
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10 rounded-xl"></div>
            <Image src="/placeholder.svg?height=600&width=800" alt="Siège d'ALTEN" fill className="object-cover rounded-xl" />
            <div className="absolute bottom-0 left-0 p-6 z-20">
              <h3 className="text-2xl font-bold text-white text-shadow">Le siège d'ALTEN</h3>
              <p className="text-white/80">Innovation et excellence</p>
            </div>
          </div>
        </div>
      </div>      <div className="mt-16">
        <h3 className="mb-6 text-2xl font-bold bg-gradient-to-r from-blue-400 via-red-400 to-yellow-400 bg-clip-text text-transparent">Chiffres clés</h3>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <StatsCard icon={Globe} title="30+ pays" description="Présence internationale" />
          <StatsCard icon={Users} title="57 700" description="Collaborateurs dans le monde" />
          <StatsCard icon={TrendingUp} title="4,14 Mds €" description="Chiffre d'affaires 2024" />
          <StatsCard icon={Building} title="20+ sites" description="En France" />
        </div>
      </div>      <div className="mt-16">
        <h3 className="mb-6 text-2xl font-bold bg-gradient-to-r from-blue-400 via-red-400 to-yellow-400 bg-clip-text text-transparent">Secteurs d'activité</h3>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          <SectorCard name="Aéronautique" />
          <SectorCard name="Automobile" />
          <SectorCard name="Télécoms" />
          <SectorCard name="Banque & Finance" />
          <SectorCard name="Énergie" />
          <SectorCard name="Sciences de la vie" />
        </div>
      </div>

      <div className="mt-16">
        <QuoteCard
          quote="ALTEN accompagne la stratégie de développement de ses clients dans les domaines de l'innovation, de la R&D et des systèmes d'information technologiques."
          author="ALTEN Group"
          role="Valeurs d'entreprise"
        />
      </div>
    </div>
  )
}

interface StatsCardProps {
  icon: React.ComponentType<any>
  title: string
  description: string
}

function StatsCard({ icon: Icon, title, description }: StatsCardProps) {  return (    <Card className="overflow-hidden transition-all duration-300 hover:shadow-md hover:shadow-blue-400/20 hover:-translate-y-1 border-2 border-gray-700 bg-gray-800">
      <CardContent className="flex flex-col items-center p-6 text-center">
        <div className="mb-4 h-14 w-14 rounded-full bg-gradient-to-br from-blue-900/30 to-blue-800/30 flex items-center justify-center shadow-sm">
          <Icon className="h-7 w-7 text-blue-400" />
        </div>
        <h4 className="text-2xl font-bold text-blue-300">{title}</h4>
        <p className="text-sm text-gray-300">{description}</p>
      </CardContent>
    </Card>
  )
}

interface SectorCardProps {
  name: string
}

function SectorCard({ name }: SectorCardProps) {  return (    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-blue-400/20 hover:-translate-y-1 group border-2 border-gray-700 bg-gray-800">
      <CardContent className="p-6">
        <div className="flex h-full flex-col items-center justify-center text-center">
          <div className="mb-4 h-16 w-16 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center transform transition-transform group-hover:scale-110 shadow-md">
            <span className="text-xl font-bold text-white">{name.charAt(0)}</span>
          </div>
          <h4 className="font-medium group-hover:text-primary text-gray-100 transition-colors">{name}</h4>
        </div>
      </CardContent>
    </Card>
  )
}
