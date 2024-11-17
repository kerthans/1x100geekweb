// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // 深邃基础色
        dark: {
          950: '#080B12', // 最深背景色
          900: '#0F1420', // 主背景色
          800: '#151B2B', // 卡片背景
          700: '#1C2438', // 高亮背景
          600: '#242D45', // 边框和分割线
          500: '#2D3754', // 次要文本
          400: '#3B4865', // 可交互元素
          300: '#4A5876', // 悬浮状态
          200: '#5B6B8C', // 禁用状态
          100: '#6F82A5', // 特殊强调
        },
        // 高光色彩
        neon: {
          blue: '#0FF4FF',    // 科技蓝
          purple: '#B72DFF',  // 迷幻紫
          pink: '#FF3DA8',    // 赛博粉
          green: '#0DFF8B',   // 矩阵绿
        },
        // 渐变色彩
        gradient: {
          'cyber-start': '#0FF4FF',
          'cyber-end': '#B72DFF',
          'matrix-start': '#0DFF8B',
          'matrix-end': '#0FF4FF',
          'neon-start': '#FF3DA8',
          'neon-end': '#B72DFF',
        },
        // 特殊效果色
        glow: {
          blue: 'rgba(15, 244, 255, 0.15)',
          purple: 'rgba(183, 45, 255, 0.15)',
          green: 'rgba(13, 255, 139, 0.15)',
          pink: 'rgba(255, 61, 168, 0.15)',
        },
      },
      backgroundImage: {
        'gradient-cyber': 'linear-gradient(135deg, var(--tw-gradient-stops))',
        'gradient-matrix': 'linear-gradient(45deg, var(--tw-gradient-stops))',
        'gradient-radial': 'radial-gradient(circle at center, var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 45deg, var(--tw-gradient-stops))',
        'mesh-pattern': 'url("data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M0 0h40v40H0V0zm20 20v20H0V20h20zm20 0v20H20V20h20zM20 0v20H0V0h20zm20 0v20H20V0h20z" fill="%23242D45" fill-opacity="0.1" fill-rule="evenodd"/%3E%3C/svg%3E")',
      },
      animation: {
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'gradient-flow': 'gradient-flow 8s linear infinite',
        'cyber-pulse': 'cyber-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'gradient-flow': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        'cyber-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px var(--glow-color)' },
          '50%': { boxShadow: '0 0 40px var(--glow-color)' },
        },
      },
      boxShadow: {
        'neon-blue': '0 0 20px rgba(15, 244, 255, 0.5)',
        'neon-purple': '0 0 20px rgba(183, 45, 255, 0.5)',
        'neon-green': '0 0 20px rgba(13, 255, 139, 0.5)',
        'neon-pink': '0 0 20px rgba(255, 61, 168, 0.5)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}

export default config