import type React from "react"
import type { Metadata } from "next"
import { Mona_Sans as FontSans } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Mon Expérience en Support Informatique chez ALTEN",
  description: "Blog professionnel présentant mon stage en support informatique chez ALTEN",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" suppressHydrationWarning className="dark">
      <body className={cn("min-h-screen bg-gray-900 text-gray-100 font-sans antialiased", fontSans.variable)}>        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1 w-full px-4">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
