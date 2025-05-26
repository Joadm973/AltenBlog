import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type { LucideIcon } from "lucide-react"

interface MissionCardProps {
  title: string
  description: string
  icon: LucideIcon
  bulletPoints: string[]
}

export default function MissionCard({ title, description, icon: Icon, bulletPoints }: MissionCardProps) {
  return (
    <Card className="h-full hover:-translate-y-1 transition-all duration-300 overflow-hidden group border-2 border-blue-200 shadow-sm hover:shadow-md hover:shadow-blue-500/20 bg-white">
      <div className="absolute top-0 left-0 h-2 w-full bg-gradient-to-r from-blue-600 via-red-500 to-yellow-400 group-hover:h-3 transition-all duration-300"></div>
      <CardHeader className="pb-2">
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-blue-100 to-purple-100 shadow-sm group-hover:shadow-md group-hover:scale-105 transition-all duration-300">
          <Icon className="h-8 w-8 text-blue-600 group-hover:text-purple-600 transition-colors duration-300" />
        </div>
        <CardTitle className="text-xl text-slate-900">{title}</CardTitle>
        <CardDescription className="text-slate-600">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="ml-6 list-disc space-y-2 text-sm text-slate-700">
          {bulletPoints.map((point, index) => (
            <li key={index} className="transition-transform hover:translate-x-1">{point}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
