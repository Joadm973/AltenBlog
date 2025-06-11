import { usePathname } from "next/navigation"

export function useActiveRoute() {
  const pathname = usePathname()
  
  // Normalize pathname by removing basePath for GitHub Pages
  const normalizedPathname = pathname.replace('/AltenBlog', '') || '/'
  
  const isActiveRoute = (href: string) => {
    return normalizedPathname === href
  }
  
  return {
    pathname: normalizedPathname,
    isActiveRoute
  }
}
