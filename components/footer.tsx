import Link from "next/link"
import Image from "next/image"
import { Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full border-t border-blue-100 bg-gradient-to-b from-white to-blue-50 py-8">
      <div className="container max-w-8xl mx-auto px-4 flex flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex items-center gap-4">
          <Image
            src="/alten-logo.jpg"
            alt="ALTEN Logo"
            width={80}
            height={53}
            className="object-contain"
          />
          <div className="h-10 w-px bg-gradient-to-b from-blue-200 to-red-200 mx-2"></div>
          <div className="text-sm">
            <p className="font-medium text-blue-800">Stage effectué de juin à août 2024</p>
            <p className="text-muted-foreground">
              Un grand merci à ALTEN et à mon tuteur pour cette opportunité enrichissante.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-end gap-2">
          <div className="flex items-center gap-4">
            <Link
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-md bg-blue-50 px-3 py-1.5 text-blue-600 hover:bg-blue-100 transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span className="text-sm font-medium">LinkedIn</span>
            </Link>
            <Link 
              href="https://www.alten.fr/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-blue-600 transition-colors"
            >
              www.alten.fr
            </Link>
          </div>
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} - Créé dans le cadre d'un stage ALTEN</p>
        </div>
      </div>
    </footer>
  )
}
