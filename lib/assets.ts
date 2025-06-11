// Utility to handle asset paths for GitHub Pages deployment
export const getAssetPath = (path: string): string => {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path
  
  // In production (GitHub Pages), prepend the basePath
  if (process.env.NODE_ENV === 'production') {
    return `/AltenBlog/${cleanPath}`
  }
  
  // In development, use the path as is
  return `/${cleanPath}`
}

export default getAssetPath
