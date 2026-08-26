import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#07090e',
          surface: '#0e121b',
          elevated: '#151b27',
          border: 'rgba(255, 255, 255, 0.08)',
        },
        primary: {
          DEFAULT: '#6366f1',
          hover: '#4f46e5',
          glow: 'rgba(99, 102, 241, 0.5)',
        },
        secondary: {
          DEFAULT: '#a855f7',
          hover: '#9333ea',
          glow: 'rgba(168, 85, 247, 0.5)',
        },
        coral: '#f43f5e',
        emerald: '#10b981',
        amber: '#f59e0b',
        cyan: '#06b6d4',
      },
      fontFamily: {
        sans: ['var(--font-jakarta)', 'sans-serif'],
        display: ['var(--font-space)', 'sans-serif'],
        accent: ['var(--font-syne)', 'sans-serif'],
      },
      animation: {
        'orb-float': 'orbFloat 20s infinite alternate ease-in-out',
        'badge-float': 'badgeFloat 4s ease-in-out infinite alternate',
      },
      keyframes: {
        orbFloat: {
          '0%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(50px, 30px) scale(1.08)' },
          '100%': { transform: 'translate(-30px, 60px) scale(0.95)' },
        },
        badgeFloat: {
          '0%': { transform: 'translateY(-3px)' },
          '100%': { transform: 'translateY(4px)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
