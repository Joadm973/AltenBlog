interface TimelineItemProps {
  date: string
  title: string
  description: string
}

export default function TimelineItem({ date, title, description }: TimelineItemProps) {
  return (
    <div className="relative pl-8 pb-8 before:absolute before:left-0 before:top-0 before:h-full before:w-[2px] before:bg-gradient-to-b before:from-blue-600 before:to-blue-200 dark:before:from-blue-400 dark:before:to-blue-700 before:content-[''] last:pb-0 transition-all duration-300 hover:pl-10">
      <div className="absolute left-0 top-0 flex h-7 w-7 -translate-x-1/2 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-500 dark:to-blue-300 text-primary-foreground shadow-md transition-transform duration-300 hover:scale-110">
        <span className="h-2 w-2 rounded-full bg-primary-foreground" />
      </div>
      <div className="space-y-1 p-4 border-l-2 border-blue-100 dark:border-blue-400 bg-white/50 dark:bg-gray-800/50 rounded-r-lg transition-all duration-300 hover:shadow-md">
        <div className="text-sm font-medium text-blue-600 dark:text-blue-400">{date}</div>
        <h3 className="font-semibold text-blue-800 dark:text-blue-300">{title}</h3>
        <p className="text-muted-foreground dark:text-gray-300">{description}</p>
      </div>
    </div>
  )
}
