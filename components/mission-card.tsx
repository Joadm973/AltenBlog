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
    <Card className="h-full hover:-translate-y-1 transition-transform duration-300 overflow-hidden">
      <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-blue-600 via-red-500 to-yellow-400"></div>
      <CardHeader className="pb-2">
        <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 shadow-sm">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="ml-6 list-disc space-y-2 text-sm">
          {bulletPoints.map((point, index) => (
            <li key={index} className="transition-transform hover:translate-x-1">{point}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
