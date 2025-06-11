"use client"

import type React from "react"
import Image from "next/image"
import SectionHeader from "@/components/section-header"
import QuoteCard from "@/components/quote-card"
import { Card, CardContent } from "@/components/ui/card"
import { Building, Users, Globe, TrendingUp, Plane, Car, Phone, Landmark, Zap, Microscope } from "lucide-react"
import { getAssetPath } from "@/lib/assets"

export default function AboutAlten() {
  return (
    <div className="container mx-auto px-4 py-12 animate-fade-in relative z-10">
      <SectionHeader
        title="ALTEN: Leader mondial de l'ingénierie et des IT Services"
        description="Découvrez l'entreprise qui m'a accueilli pour cette expérience professionnelle enrichissante."
      />      <div className="mt-12 grid gap-8 md:grid-cols-2 md:items-stretch">        <div className="space-y-6 p-6 bg-gray-900 border-2 border-gray-700 rounded-xl shadow-md hover:shadow-xl transition-all duration-gentle ease-elegant hover:scale-[1.02] hover:-translate-y-1 text-gray-200 flex flex-col justify-between h-full">
          <div className="space-y-6">
            <p className="text-lg text-gray-200 transition-colors duration-gentle ease-elegant">
              Créé il y a plus de 37 ans et présent dans plus de 30 pays, le Groupe <span className="font-semibold text-blue-400 transition-colors duration-gentle ease-elegant">ALTEN</span> s'est imposé comme un leader
              mondial de l'Ingénierie et des IT Services. L'entreprise intervient auprès des grands acteurs dans divers
              secteurs industriels et technologiques, notamment l'Aéronautique, l'Automobile, les Télécoms, la Banque et
              l'Énergie.
            </p>            <p className="text-gray-300 transition-colors duration-gentle ease-elegant">
              En 2024, <span className="font-semibold text-blue-300 transition-colors duration-gentle ease-elegant">ALTEN</span> a réalisé un chiffre d'affaires de <span className="font-semibold">4,14 milliards d'euros</span> avec <span className="font-semibold">57 700 collaborateurs</span> dans le
              monde, dont 88% sont des ingénieurs-consultants. En France, l'entreprise compte 13 470 collaborateurs
              répartis sur une vingtaine de sites pour un chiffre d'affaires de 1 360 millions d'euros.
            </p>
            <p className="text-gray-300 transition-colors duration-gentle ease-elegant">
              <span className="font-semibold text-blue-300 transition-colors duration-gentle ease-elegant">ALTEN</span> a intégré le Développement Durable au cœur de sa stratégie depuis plus de 10 ans, avec un engagement
              structuré autour de trois piliers : l'innovation durable, l'environnement et l'humain.
            </p>
          </div>
        </div>        <div className="h-full flex items-stretch">
          <div className="relative w-full h-[450px] overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-gentle ease-elegant hover:scale-[1.03] hover:-translate-y-2 border-2 border-gray-700 bg-gray-900 flex items-end">
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10 rounded-xl transition-all duration-gentle ease-elegant"></div>            <Image 
              src={getAssetPath("alten-logo.png")} 
              alt="Logo ALTEN"
              className="object-contain rounded-xl transition-transform duration-elegant ease-elegant p-4"
              style={{ objectPosition: 'center' }}
              fill
            />
            <div className="absolute bottom-0 left-0 p-6 z-20 transition-all duration-gentle ease-elegant">
              <p className="text-white/80 transition-colors duration-gentle ease-elegant">Innovation et excellence</p>
            </div>
          </div>
        </div>
      </div>      <div className="mt-16">
        <h3 className="mb-6 text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Chiffres clés</h3>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <StatsCard icon={TrendingUp} title="4,14 Mds €" description="Chiffre d'affaires 2024" />
          <StatsCard icon={Globe} title="30+ pays" description="Présence internationale" />
          <StatsCard icon={Building} title="20+ sites" description="En France" />
          <StatsCard icon={Users} title="57 700" description="Collaborateurs dans le monde" />
        </div>
      </div><div className="mt-16">
        <h3 className="mb-6 text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Secteurs d'activité</h3>        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          <SectorCard name="Aéronautique" icon={Plane} url="https://www.alten.fr/secteurs-dactivite/aeronautique/" />
          <SectorCard name="Automobile" icon={Car} url="https://www.alten.fr/secteurs-dactivite/automobile/" />
          <SectorCard name="Télécoms" icon={Phone} url="https://www.alten.fr/secteurs-dactivite/telecoms-medias/" />
          <SectorCard name="Banque & Finance" icon={Landmark} url="https://www.alten.fr/secteurs-dactivite/banque-finance-assurance/" />
          <SectorCard name="Énergie" icon={Zap} url="https://www.alten.fr/secteurs-dactivite/energie-environnement/" />
          <SectorCard name="Sciences de la vie" icon={Microscope} url="https://www.alten.fr/secteurs-dactivite/sciences-de-la-vie-sante/" />
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

function StatsCard({ icon: Icon, title, description }: StatsCardProps) {
  return (    <Card className="overflow-hidden transition-all duration-gentle ease-elegant hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-2 hover:scale-[1.02] border-2 border-gray-700 bg-gray-900 group">
      <CardContent className="flex flex-col items-center p-6 text-center">
        <div className="mb-4 h-14 w-14 rounded-full bg-gradient-to-br from-blue-800/40 to-blue-700/40 flex items-center justify-center shadow-sm transition-all duration-gentle ease-elegant group-hover:scale-110 group-hover:rotate-6">
          <Icon className="h-7 w-7 text-blue-300 transition-all duration-gentle ease-elegant" />
        </div>
        <h4 className="text-2xl font-bold text-blue-300 transition-colors duration-gentle ease-elegant">{title}</h4>
        <p className="text-sm text-gray-300 transition-colors duration-gentle ease-elegant">{description}</p>
      </CardContent>
    </Card>
  )
}

interface SectorCardProps {
  name: string
  icon: React.ComponentType<any>
  url: string
}

function SectorCard({ name, icon: Icon, url }: SectorCardProps) {
  const handleClick = () => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (    <Card 
      className="overflow-hidden transition-all duration-gentle ease-elegant hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-2 hover:scale-[1.02] group border-2 border-gray-700 bg-gray-900 cursor-pointer hover:border-blue-500"
      onClick={handleClick}
    >
      <CardContent className="p-6">
        <div className="flex h-full flex-col items-center justify-center text-center">
          <div className="mb-4 h-16 w-16 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center transform transition-all duration-gentle ease-elegant group-hover:scale-110 group-hover:rotate-3 shadow-md">
            <Icon className="h-8 w-8 text-white transition-all duration-gentle ease-elegant" />
          </div>
          <h4 className="font-medium group-hover:text-blue-300 text-gray-100 transition-colors duration-gentle ease-elegant">{name}</h4>
          <p className="text-xs text-gray-400 mt-1 opacity-0 group-hover:opacity-100 transition-all duration-gentle ease-elegant">
            Cliquez pour en savoir plus
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
