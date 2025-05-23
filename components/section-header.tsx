interface SectionHeaderProps {
  title: string
  description?: string
  centered?: boolean
}

export default function SectionHeader({ title, description, centered = false }: SectionHeaderProps) {
  return (
    <div className={`space-y-4 ${centered ? "text-center" : ""}`}>
      <div className="inline-block">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl relative z-10 gradient-heading">
          {title}
          <span className="absolute -bottom-2 left-0 h-1 w-1/3 bg-gradient-to-r from-blue-600 to-transparent rounded-full"></span>
        </h2>
      </div>
      {description && (
        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          {description}
        </p>
      )}
    </div>
  )
}
