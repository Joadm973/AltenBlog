import type { LucideIcon } from "lucide-react"

interface SkillProgressProps {
  name: string
  description: string
  icon: LucideIcon
}

export default function SkillProgress({ name, description, icon: Icon }: SkillProgressProps) {
  return (
    <div className="p-4 border border-blue-100 dark:border-gray-600 bg-white dark:bg-gray-800 rounded-lg shadow-sm group hover:shadow-md hover:border-blue-300 dark:hover:border-blue-500 transition-all duration-500 ease-in-out hover:scale-[1.02] hover:-translate-y-0.5">
      <div className="flex items-start gap-3">
        <div className="bg-blue-100 dark:bg-blue-900/40 p-2 rounded-lg flex-shrink-0 mt-0.5 group-hover:bg-blue-200 dark:group-hover:bg-blue-800/60 transition-all duration-500 ease-in-out group-hover:scale-110">
          <Icon className="h-5 w-5 text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-all duration-500 ease-in-out" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="font-semibold text-gray-800 dark:text-gray-200 mb-2 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-all duration-500 ease-in-out">
            {name}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out transform translate-y-2 group-hover:translate-y-0">
            {description}
          </div>
        </div>
      </div>
    </div>
  )
}
