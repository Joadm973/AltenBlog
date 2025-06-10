import Link from "next/link"
import Image from "next/image"
import { Linkedin } from "lucide-react"

export default function Footer() {  return (    <footer className="w-full border-t border-gray-700 bg-gradient-to-b from-gray-900 to-gray-800 py-8">
      <div className="container w-full mx-auto px-4 flex flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex items-center gap-4">
          <Image
            src="/alten-logo.png"
            alt="ALTEN Logo"
            width={56}
            height={37}
            className="object-contain"
          />
          <div className="h-10 w-px bg-gradient-to-b from-blue-200 to-red-200 mx-2"></div>          <div className="text-sm">
            <p className="font-medium text-blue-400">Stage effectué de mars à juin 2025</p>            <p className="text-gray-400">
              Un grand merci à ALTEN, l'équipe du support technique et à mon tuteur pour cette opportunité enrichissante.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-end gap-2">
          <div className="flex items-center gap-4">
            <Link
              href="https://www.linkedin.com/in/josué-adami-441082169/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-md bg-blue-900/30 px-3 py-1.5 text-blue-400 hover:bg-blue-900/50 transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span className="text-sm font-medium">LinkedIn</span>
            </Link>            <Link 
              href="https://www.alten.fr/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
            >
              www.alten.fr
            </Link>
          </div>
          <p className="text-xs text-gray-400">© {new Date().getFullYear()} - Créé dans le cadre d'un stage ALTEN</p>
        </div>
      </div>
    </footer>
  )
}
