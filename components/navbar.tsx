"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import { ThemeToggle } from "@/components/theme-toggle"

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

  // Détection du défilement pour ajouter un effet d'ombre
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-50 w-full border-b-2 border-b-blue-600 dark:border-b-blue-400 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm transition-all duration-300 ${scrolled ? "shadow-lg shadow-blue-500/10 dark:shadow-blue-400/20" : ""}`}>
      <div className="container max-w-8xl mx-auto flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center space-x-4">
          <div className="relative h-16 w-auto overflow-hidden">
            <Image 
              src="/alten-logo.jpg" 
              alt="ALTEN Logo" 
              width={120}
              height={80}
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold text-black dark:text-white">Stage</span>
            <span className="text-xl font-bold text-black dark:text-white" style={{letterSpacing: "0.05em"}}>ALTEN</span>
          </div>
        </Link>
        <nav className="hidden md:flex md:gap-6 md:items-center">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link 
                key={item.name} 
                href={item.href} 
                className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 group ${
                  isActive 
                    ? "text-blue-600 dark:text-blue-400 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-gradient-to-r after:from-blue-600 after:to-purple-600 dark:after:from-blue-400 dark:after:to-purple-400 after:content-['']" 
                    : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:transform hover:scale-105"
                }`}
              >
                {item.name}
              </Link>
            )
          })}
          <ThemeToggle />
        </nav>
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden focus:outline-none text-black hover:text-red-600" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>
      {/* Menu mobile avec animation */}
      <div 
        className={`absolute w-full bg-background border-b border-border shadow-lg transition-all duration-300 md:hidden ${
          mobileMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="container py-4">
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center px-2 py-2 text-sm font-medium rounded-md transition-colors ${
                    isActive 
                      ? "bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-400" 
                      : "hover:bg-yellow-50 dark:hover:bg-yellow-900/20 hover:text-blue-600 dark:hover:text-blue-400"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )
            })}
            <div className="flex justify-center pt-4 border-t border-border">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
