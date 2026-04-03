import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './data/**/*.json',
  ],
  theme: {
    extend: {
      colors: {
        obsidian: '#0a0a0b',
        steel: '#27272a',
        silver: {
          light: '#f4f4f5',
          DEFAULT: '#d4d4d8',
          dark: '#71717a'
        },
        slate: {
          950: '#020617',
        },
        edge: 'hsl(var(--border) / 0.1)',
        input: 'hsl(var(--input) / 0.1)',
        ring: 'hsl(var(--ring) / 0.1)',
        background: 'hsl(var(--background) / 1)',
        foreground: 'hsl(var(--foreground) / 1)',
      },
      fontFamily: {
        sans: ['var(--font-outfit)', 'ui-sans-serif', 'system-ui'],
        display: ['var(--font-outfit)', 'sans-serif'],
      },
      backgroundImage: {
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
      }
    },
  },
  plugins: [],
}

export default config
