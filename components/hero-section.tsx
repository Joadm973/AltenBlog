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
  
  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 relative overflow-hidden">
      {/* Gradient background effect */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white via-blue-50 to-white opacity-50 z-0"></div>
      
      <div className="container max-w-8xl mx-auto px-4 md:px-6 relative z-10">
        <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
          <div className={`flex flex-col justify-center space-y-6 ${isAnimated ? 'transition-all duration-1000 transform ' + (isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0') : ''}`}>
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">{title}</h1>
              {subtitle && <p className="text-xl text-muted-foreground">{subtitle}</p>}
            </div>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {description}
            </p>
            {(primaryButtonText || secondaryButtonText) && (
              <div className="flex flex-col gap-2 min-[400px]:flex-row mt-4">
                {primaryButtonText && primaryButtonHref && (
                  <Link href={primaryButtonHref}>
                    <Button className="bg-gradient-to-r from-blue-700 to-indigo-800 hover:from-blue-800 hover:to-indigo-900 shadow-md transition-all hover:shadow-lg" size="lg">{primaryButtonText}</Button>
                  </Link>
                )}
                {secondaryButtonText && secondaryButtonHref && (
                  <Link href={secondaryButtonHref}>
                    <Button variant="outline" size="lg" className="hover:bg-blue-50">
                      {secondaryButtonText}
                    </Button>
                  </Link>
                )}
              </div>
            )}
          </div>
          <div className="mx-auto aspect-video w-full max-w-[500px] overflow-hidden rounded-xl object-cover lg:order-last">
            <Image
              src={imageSrc || "/placeholder.svg"}
              alt={imageAlt}
              width={500}
              height={300}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
