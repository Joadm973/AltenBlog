import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { LucideIcon } from "lucide-react"

interface InfoCardProps {
  title: string
  icon: LucideIcon
  children: React.ReactNode
}

export default function InfoCard({ title, icon: Icon, children }: InfoCardProps) {
  return (
    <Card className="h-full hover:-translate-y-1 transition-transform duration-300 border-2 border-blue-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-md">
      <CardHeader className="flex flex-row items-center gap-2 pb-2">
        <div className="rounded-full bg-blue-100 dark:bg-blue-900/30 p-2">
          <Icon className="h-5 w-5 text-blue-700 dark:text-blue-400" />
        </div>
        <CardTitle className="text-lg text-slate-900 dark:text-gray-100">{title}</CardTitle>
      </CardHeader>
      <CardContent className="text-slate-700 dark:text-gray-300">{children}</CardContent>
    </Card>
  )
}
