const { DOCS_URL } = process.env

/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      /**
       * Rewrites for Multi-Zones
       */
      {
        source: '/docs',
        destination: `${DOCS_URL}/docs`,
      },
      {
        source: '/docs/:path*',
        destination: `${DOCS_URL}/docs/:path*`,
      },
      {
        source: '/docs-static/:path*',
        destination: `${DOCS_URL}/docs-static/:path*`,
      },
      {
        source: '/_next/static/chunks/:path*',
        destination: `${DOCS_URL}/_next/static/chunks/:path*`,
      },
      {
        source: '/docs-static/_next/static/chunks/:path*',
        destination: `${DOCS_URL}/docs-static/_next/static/chunks/:path*`,
      },
    ]
  },
}

module.exports = nextConfig
