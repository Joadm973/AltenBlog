import { usePathname } from "next/navigation"

export function useActiveRoute() {
  const pathname = usePathname()
  
  // Normalize pathname by removing basePath for GitHub Pages
  const normalizedPathname = pathname.replace('/AltenBlog', '') || '/'
  
  const isActiveRoute = (href: string) => {
    // Normalize href as well
    const normalizedHref = href.replace('/AltenBlog', '') || '/'
    
    // Exact match for home page
    if (normalizedHref === '/' && normalizedPathname === '/') {
      return true
    }
    
    // For other pages, check if pathname starts with href
    if (normalizedHref !== '/' && normalizedPathname.startsWith(normalizedHref)) {
      return true
    }
    
    return false
  }
  
  return {
    pathname: normalizedPathname,
    isActiveRoute
  }
}
