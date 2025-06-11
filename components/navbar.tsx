"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronRight } from "lucide-react"
import Image from "next/image"
import { getAssetPath } from "@/lib/assets"
import { useActiveRoute } from "@/hooks/use-active-route"

const navItems = [
  { name: "Accueil", href: "/" },
  { name: "ALTEN", href: "/about-alten" },
  { name: "Mon Rôle", href: "/my-role" },
  { name: "Technologies", href: "/technologies" },
  { name: "Apprentissages", href: "/learnings" },
  { name: "Et Après?", href: "/future" },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const { isActiveRoute } = useActiveRoute()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (    <header
      className={`sticky top-0 z-50 w-full transition-all duration-elegant ease-elegant navbar-glass-enhanced ${
        scrolled
          ? "bg-gray-900/95 backdrop-blur-md shadow-2xl shadow-blue-500/20 border-b border-blue-500/30"
          : "bg-gray-900/90 backdrop-blur-sm border-b border-gray-700/50"
      }`}
    >      {/* Gradient overlay subtil */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 via-transparent to-purple-900/10 pointer-events-none" />
      <div className="flex h-16 items-center justify-between px-6 lg:px-8 relative z-10 w-full">
        {/* Logo & Branding */}        <Link href="/" className="flex items-center gap-0.5 group transition-all duration-elegant ease-elegant hover:scale-105">
          {/* Logo ALTEN sans fond blanc, blend mode screen */}          <div className="relative h-8 w-20 md:h-10 md:w-24 transition-all duration-elegant ease-elegant">            <Image
              src={getAssetPath("ALTEN-Logo.wine.navbar.png")}
              alt="ALTEN Logo"
              fill
              sizes="(max-width: 768px) 80px, 96px"
              className="object-contain object-center transition-all duration-elegant ease-elegant group-hover:scale-110 opacity-90 group-hover:opacity-100"
              style={{
                filter: 'brightness(1.2) contrast(1.1)',
                mixBlendMode: 'screen'
              }}
              priority
              quality={100}
            />
          </div>
          {/* Texte avec contraste optimisé */}
          <div className="flex flex-col transition-all duration-elegant ease-elegant">
            <span className="text-base md:text-lg font-bold text-blue-200 leading-tight tracking-tight transition-all duration-elegant ease-elegant">
              Stage
            </span>
            <span className="text-base md:text-lg font-bold text-white leading-tight tracking-wide transition-all duration-elegant ease-elegant">
              ALTEN
            </span>
          </div>
        </Link>        {/* Navigation Desktop */}        <nav className="hidden md:flex md:gap-1 lg:gap-2 md:items-center ml-auto">
          {navItems.map((item) => {
            const isActive = isActiveRoute(item.href)
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`relative px-3 py-3 text-sm font-medium transition-all duration-gentle ease-elegant group rounded-lg hover-glow navbar-text-shadow ${
                  isActive
                    ? "text-white bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg shadow-blue-500/30"
                    : "text-gray-200 hover:text-white hover:bg-white/10 backdrop-blur-sm"
                }`}
                style={{ textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}
              >
                <span className="relative z-10">{item.name}</span>
                {/* Ligne indicateur pour la page active */}
                {isActive && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 w-12 bg-gradient-to-r from-blue-400 via-red-400 to-yellow-400 rounded-full animate-pulse active-indicator" />
                )}
                {/* Effet hover subtil */}
                <div className="absolute inset-0 scale-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg transition-transform duration-gentle ease-elegant group-hover:scale-100" />
              </Link>
            )
          })}
        </nav>
        {/* Bouton menu mobile */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden h-10 w-10 text-gray-200 hover:text-white hover:bg-white/10 focus:outline-none transition-all duration-gentle ease-elegant hover:scale-110"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="relative">            {mobileMenuOpen ? (
              <X className="h-6 w-6 transition-all duration-gentle ease-elegant rotate-90" />
            ) : (
              <Menu className="h-6 w-6 transition-all duration-gentle ease-elegant" />
            )}
            {/* Glow effect */}
            <div className="absolute inset-0 bg-blue-500/20 rounded-full scale-0 transition-transform duration-gentle ease-elegant hover:scale-150 blur-sm" />
          </div>
        </Button>
      </div>
      {/* Menu mobile animé */}
      <div        className={`absolute top-full left-0 w-full bg-gray-900/98 backdrop-blur-xl border-t border-blue-500/30 shadow-2xl transition-all duration-elegant ease-elegant md:hidden ${
          mobileMenuOpen
            ? "max-h-[600px] opacity-100 translate-y-0"
            : "max-h-0 opacity-0 -translate-y-4 overflow-hidden"
        }`}
      >        {/* Gradient top border */}
        <div className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
        <div className="py-6 px-6 w-full">          <div className="flex flex-col space-y-3">
            {navItems.map((item, index) => {
              const isActive = isActiveRoute(item.href)
              return (
                <Link
                  key={item.name}
                  href={item.href}                  className={`flex items-center px-5 py-4 text-base font-medium rounded-xl transition-all duration-gentle ease-elegant hover:scale-105 mobile-menu-item ${
                    isActive
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/30"
                      : "text-gray-200 hover:bg-white/10 hover:text-white backdrop-blur-sm"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    animationDelay: `${index * 50}ms`,
                    textShadow: '0 1px 2px rgba(0,0,0,0.3)'
                  }}
                >
                  <span className="flex-1">{item.name}</span>
                  {isActive && (
                    <div className="h-2 w-2 rounded-full bg-gradient-to-r from-yellow-400 to-red-400 animate-pulse" />
                  )}
                </Link>
              )
            })}
            {/* Séparateur avec gradient */}
            <div className="my-4 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent" />
          </div>
        </div>
      </div>
    </header>
  )
}
