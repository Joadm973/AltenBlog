interface SectionHeaderProps {
  title: string
  description?: string
  centered?: boolean
}

export default function SectionHeader({ title, description, centered = false }: SectionHeaderProps) {
  return (
    <div className={`space-y-4 ${centered ? "text-center" : ""}`}>
      <div className="inline-block">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl relative z-10 bg-gradient-to-r from-blue-800 via-blue-700 to-blue-600 dark:from-blue-400 dark:via-red-400 dark:to-yellow-400 bg-clip-text text-transparent drop-shadow-sm">
          {title}
          <span className="absolute -bottom-3 left-0 h-1.5 w-1/2 bg-gradient-to-r from-blue-600 via-purple-500 to-red-500 dark:from-blue-400 dark:via-purple-400 dark:to-red-400 rounded-full shadow-lg"></span>
        </h2>
      </div>
      {description && (
        <p className="max-w-[900px] text-gray-700 dark:text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          {description}
        </p>
      )}
    </div>
  )
}
