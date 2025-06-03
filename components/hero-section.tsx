"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState, useEffect } from "react"

interface HeroSectionProps {
  title: string | React.ReactNode
  subtitle?: string
  description: string
  imageSrc: string
  imageAlt: string
  primaryButtonText?: string
  primaryButtonHref?: string
  secondaryButtonText?: string
  secondaryButtonHref?: string
  isAnimated?: boolean
}

export default function HeroSection({
  title,
  subtitle,
  description,
  imageSrc,
  imageAlt,
  primaryButtonText,
  primaryButtonHref,
  secondaryButtonText,
  secondaryButtonHref,
  isAnimated = false,
}: HeroSectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  useEffect(() => { setIsVisible(true) }, [])
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-sky-50 via-white to-blue-50/50 dark:bg-gradient-to-br dark:from-slate-900 dark:via-gray-900 dark:to-blue-950/50 z-0"></div>
      <div className="container max-w-8xl mx-auto px-4 md:px-6 relative z-10">
        <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
          <div className={`flex flex-col justify-center space-y-6 overflow-visible ${isAnimated ? 'transition-all duration-1000 transform ' + (isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0') : ''}`}>
            <div className="space-y-4 overflow-visible">
              <h1 
                className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl gradient-heading gradient-text-safe title-large overflow-visible"
                style={{
                  display: 'inline-block',
                  padding: '8px 4px 12px 4px',
                  lineHeight: '1.1',
                  WebkitTextStroke: '0.5px transparent',
                  textRendering: 'optimizeLegibility',
                  overflow: 'visible'
                }}
              >
                {title}
              </h1>
              {subtitle && (
                <p className="text-xl text-slate-700 dark:text-slate-300">{subtitle}</p>
              )}
            </div>
            {description && (
              <p className="max-w-[600px] text-slate-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed leading-relaxed">
                {description}
              </p>
            )}
            {(primaryButtonText || secondaryButtonText) && (
              <div className="flex flex-col gap-2 min-[400px]:flex-row mt-4">                {primaryButtonText && primaryButtonHref && (
                  <Link href={primaryButtonHref}>
                    <Button className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 shadow-lg transition-all hover:shadow-xl hover:shadow-blue-400/30 hover:scale-105 text-lg px-8 py-4 h-auto" size="lg">{primaryButtonText}</Button>
                  </Link>
                )}
                {secondaryButtonText && secondaryButtonHref && (
                  <Link href={secondaryButtonHref}>
                    <Button variant="outline" size="lg" className="hover:bg-blue-950/30 border-blue-400 text-blue-300 hover:scale-105 transition-all">
                      {secondaryButtonText}
                    </Button>
                  </Link>
                )}
              </div>
            )}
          </div>
          <div className="mx-auto aspect-video w-full max-w-[500px] overflow-hidden rounded-xl object-cover lg:order-last border border-blue-900 shadow-xl shadow-blue-400/20 group transition-all duration-300 hover:shadow-2xl hover:scale-105">
            <Image
              src={imageSrc || "/placeholder.svg"}
              alt={imageAlt}
              width={500}
              height={300}
              className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
