import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type { LucideIcon } from "lucide-react"

interface MissionCardProps {
  title: string
  description: string
  icon: LucideIcon
  bulletPoints: string[]
}

export default function MissionCard({ title, description, icon: Icon, bulletPoints }: MissionCardProps) {  return (    <Card className="h-full hover:-translate-y-1 transition-all duration-300 overflow-hidden group border-2 dark:border-gray-700 shadow-sm hover:shadow-md hover:shadow-blue-500/20 dark:hover:shadow-blue-400/20 bg-white dark:bg-gray-800">
      <div className="absolute top-0 left-0 h-2 w-full bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-700 dark:to-blue-800 group-hover:h-3 transition-all duration-300"></div>
      <CardHeader className="pb-2">
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-blue-100 to-gray-100 dark:from-blue-800/40 dark:to-gray-900/40 shadow-sm group-hover:shadow-md group-hover:scale-105 transition-all duration-300">
          <Icon className="h-8 w-8 text-blue-600 dark:text-blue-300 group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors duration-300" />
        </div>        <CardTitle className="text-xl text-slate-900 dark:text-gray-100">{title}</CardTitle>
        <CardDescription className="text-slate-600 dark:text-gray-300">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="ml-6 list-disc space-y-2 text-sm text-slate-700 dark:text-gray-200">
          {bulletPoints.map((point, index) => (
            <li key={index} className="transition-transform hover:translate-x-1">{point}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
