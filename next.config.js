/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  swcMinify: true,
  compress: true,
  async rewrites() {
    // Proxy to Express API during local dev if running on 5000
    return process.env.NODE_ENV === 'development'
      ? [
          {
            source: '/api/:path*',
            destination: 'http://localhost:5000/api/:path*',
          },
          {
            source: '/health',
            destination: 'http://localhost:5000/health',
          },
        ]
      : [];
  },
};

module.exports = nextConfig;


