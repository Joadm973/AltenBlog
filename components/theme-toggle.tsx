import { useEffect, useState } from "react"

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">(() =>
    typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
  )

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [theme])
  return (
    <button
      aria-label="Changer le thème"
      className="rounded-full p-2 transition-all duration-gentle ease-elegant bg-gradient-to-r from-blue-700 to-blue-800 dark:from-blue-600 dark:to-blue-800 text-white shadow hover:scale-110 hover:rotate-12 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 hover:shadow-lg hover:shadow-blue-500/30"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      type="button"
    >
      <div className="relative transition-all duration-gentle ease-elegant">
        {theme === "dark" ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transition-all duration-gentle ease-elegant rotate-0 scale-100" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m8.66-13.66l-.71.71M4.05 19.95l-.71.71M21 12h-1M4 12H3m16.66 5.66l-.71-.71M4.05 4.05l-.71-.71M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transition-all duration-gentle ease-elegant rotate-180 scale-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" /></svg>
        )}
      </div>
    </button>
  )
}
