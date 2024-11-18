/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages: ['next-themes'],
  images: {
    domains: [], // 添加需要的图片域名
    unoptimized: true
  },
  typescript: {
    // 在生产构建时忽略类型检查错误
    ignoreBuildErrors: true,
  },
  eslint: {
    // 在生产构建时忽略 ESLint 错误
    ignoreDuringBuilds: true,
  },
  experimental: {
    // 启用 React Server Components
    serverComponents: true,
    // 启用 App Directory
    appDir: true,
  },
  compiler: {
    // 移除 console.log
    removeConsole: process.env.NODE_ENV === 'production',
  },
  env: {
    // 环境变量
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
  },
  poweredByHeader: false, // 移除 X-Powered-By header
  compress: true, // 启用 gzip 压缩
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig