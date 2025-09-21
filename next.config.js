// Purpose: Next.js configuration for SIH ERP System
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost', 'images.unsplash.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },
  // Optimize for production
  swcMinify: true,
  // Enable compression
  compress: true,
  // Ensure proper trailing slash handling
  trailingSlash: false,
}

module.exports = nextConfig
