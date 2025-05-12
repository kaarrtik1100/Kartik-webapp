/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  basePath: '/portfolio',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

module.exports = nextConfig 