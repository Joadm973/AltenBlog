import type { LucideIcon } from "lucide-react"

interface SkillProgressProps {
  name: string
  description: string
  icon: LucideIcon
}

export default function SkillProgress({ name, description, icon: Icon }: SkillProgressProps) {
  return (
    <div className="p-4 border border-blue-100 dark:border-gray-600 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
      <div className="flex items-start gap-3">
        <div className="bg-blue-100 dark:bg-blue-900/40 p-2 rounded-lg flex-shrink-0 mt-0.5">
          <Icon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
            {name}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
            {description}
          </div>
        </div>
      </div>
    </div>
  )
}
