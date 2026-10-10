import type { Config } from 'next'

const config: Config = {
  reactStrictMode: true,
  compress: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.supabase.co'
      }
    ]
  }
}

export default config
