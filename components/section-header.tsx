interface SectionHeaderProps {
  title: string
  description?: string
  centered?: boolean
}

export default function SectionHeader({ title, description, centered = false }: SectionHeaderProps) {
  return (
    <div className={`space-y-6 overflow-visible ${centered ? "text-center" : ""}`}> {/* overflow-visible sur le conteneur */}
      <div className="inline-block overflow-visible title-parent"> {/* overflow-visible sur le wrapper */}
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl relative z-10 title-container">
          <span 
            className="gradient-heading gradient-text-safe title-large"
            style={{
              display: 'inline-block',
              padding: '8px 4px 12px 4px',
              lineHeight: '1',
              WebkitTextStroke: '0.5px transparent',
              textRendering: 'optimizeLegibility',
              overflow: 'visible'
            }}
          >
            {title}
          </span>
          <span 
            className="absolute -bottom-1 left-0 h-1.5 w-1/2 bg-gradient-to-r from-blue-600 via-purple-500 to-red-500 dark:from-blue-400 dark:via-purple-400 dark:to-red-400 rounded-full shadow-lg"
            style={{ marginTop: '4px' }}
          />
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
