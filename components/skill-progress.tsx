import { Progress } from "@/components/ui/progress"
import type { LucideIcon } from "lucide-react"

interface SkillProgressProps {
  name: string
  level: number
  icon: LucideIcon
}

export default function SkillProgress({ name, level, icon: Icon }: SkillProgressProps) {
  return (
    <div className="space-y-2 p-3 border border-blue-100 dark:border-gray-700 bg-white dark:bg-gray-800/50 rounded-lg transition-all duration-300 hover:shadow-md hover:border-blue-200 dark:hover:border-gray-600">
      <div className="flex items-center gap-2">
        <div className="bg-blue-100 dark:bg-blue-900/40 p-1.5 rounded-md">
          <Icon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
        </div>
        <span className="font-medium text-gray-800 dark:text-gray-200">{name}</span>
        <span className="ml-auto text-sm font-semibold text-blue-700 dark:text-blue-300">{level}%</span>
      </div>
      <Progress 
        value={level} 
        className="h-2.5 bg-blue-100 dark:bg-gray-700" 
        indicatorClassName="bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-500 dark:to-blue-300" 
      />
    </div>
  )
}
