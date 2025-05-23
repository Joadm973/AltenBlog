import { Progress } from "@/components/ui/progress"
import type { LucideIcon } from "lucide-react"

interface SkillProgressProps {
  name: string
  level: number
  icon: LucideIcon
}

export default function SkillProgress({ name, level, icon: Icon }: SkillProgressProps) {
  return (
    <div className="space-y-2 p-3 border border-blue-50 rounded-lg transition-all duration-300 hover:shadow-md hover:border-blue-100">
      <div className="flex items-center gap-2">
        <div className="bg-primary/10 p-1.5 rounded-md">
          <Icon className="h-5 w-5 text-primary" />
        </div>
        <span className="font-medium">{name}</span>
        <span className="ml-auto text-sm font-semibold">{level}%</span>
      </div>
      <Progress 
        value={level} 
        className="h-2.5 bg-blue-100" 
        indicatorClassName="bg-gradient-to-r from-blue-600 to-blue-400" 
      />
    </div>
  )
}
