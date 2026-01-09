/** @type {import('next').NextConfig} */
const nextConfig = {
  // App directory is stable in Next.js 14
  async redirects() {
    return [
      {
        source: '/why-aeao',
        destination: '/why-sematryx',
        permanent: true, // 301 redirect
      },
      {
        source: '/docs/api/tetrad-config',
        destination: '/docs/api/intelligence-config',
        permanent: true, // 301 redirect
      },
      {
        source: '/domain-libraries',
        destination: '/domains',
        permanent: true, // 308 redirect
      },
      {
        source: '/agents',
        destination: '/mcp',
        permanent: true, // 308 redirect
      },
    ]
  },
  // Skip static generation for pages that use Clerk
  // This prevents build errors when Clerk keys aren't available during build
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
}

module.exports = nextConfig