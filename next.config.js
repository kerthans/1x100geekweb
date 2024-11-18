const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages: ['next-themes'],
  images: {
    unoptimized: true,
    domains: [],
  },
  // 移除 NODE_ENV
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack: (config, { isServer }) => {
    // 添加路径别名
    config.resolve.alias = {
      ...config.resolve.alias, // 确保保留现有的别名
      '@': path.join(__dirname, 'src'), // 设置 '@' 别名指向 'src' 目录
    };

    return config;
  },
};

module.exports = nextConfig;
