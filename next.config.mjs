/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    loader: 'default',
  },
  output: 'export',
  trailingSlash: true,
  basePath: '/AltenBlog',
  assetPrefix: '/AltenBlog/',
}

export default nextConfig
