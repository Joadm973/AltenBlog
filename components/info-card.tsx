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
    <Card className="h-full hover:-translate-y-1 transition-transform duration-300 border-l-4 border-l-primary">
      <CardHeader className="flex flex-row items-center gap-2 pb-2">
        <div className="rounded-full bg-primary/10 p-2">
          <Icon className="h-5 w-5 text-primary" />
        </div>
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  )
}
