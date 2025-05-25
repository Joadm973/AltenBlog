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
    <Card className="h-full hover:-translate-y-1 transition-all duration-300 overflow-hidden group border-0 shadow-sm hover:shadow-md hover:shadow-blue-500/5 dark:hover:shadow-blue-400/10 bg-gradient-to-br from-white to-blue-50/20 dark:from-gray-800 dark:to-blue-900/10">
      <div className="absolute top-0 left-0 h-1.5 w-full bg-gradient-to-r from-blue-600 via-red-500 to-yellow-400 dark:from-blue-400 dark:via-red-400 dark:to-yellow-400 group-hover:h-2 transition-all duration-300"></div>
      <CardHeader className="pb-2">
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/40 dark:to-purple-900/40 shadow-sm group-hover:shadow-md group-hover:scale-105 transition-all duration-300">
          <Icon className="h-8 w-8 text-blue-600 dark:text-blue-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300" />
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
