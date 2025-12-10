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
    ]
  },
}

module.exports = nextConfig