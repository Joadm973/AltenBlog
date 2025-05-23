import { Card, CardContent } from "@/components/ui/card"
import { QuoteIcon } from "lucide-react"

interface QuoteCardProps {
  quote: string
  author?: string
  role?: string
}

export default function QuoteCard({ quote, author, role }: QuoteCardProps) {
  return (
    <Card className="overflow-hidden hover:-translate-y-1 transition-transform duration-300 border border-blue-100 bg-gradient-to-br from-white to-blue-50">
      <CardContent className="p-6 relative">
        <div className="absolute top-2 right-2 text-6xl opacity-10 text-primary">
          <QuoteIcon className="h-12 w-12" />
        </div>
        <div className="mb-4 flex justify-start">
          <QuoteIcon className="h-8 w-8 text-primary" />
        </div>
        <blockquote className="mb-6 text-xl font-medium italic">{quote}</blockquote>
        {(author || role) && (
          <div className="flex items-center gap-2 border-t pt-4 border-blue-100">
            <div className="h-8 w-1 bg-gradient-to-b from-blue-600 to-red-500 rounded-full mr-2"></div>
            <div>
              {author && <p className="font-semibold text-blue-800">{author}</p>}
              {role && <p className="text-sm text-muted-foreground">{role}</p>}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
