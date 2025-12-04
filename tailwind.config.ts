import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        bg: {
          base: 'var(--bg-base)',
          elevated: 'var(--bg-elevated)',
          'elevated-2': 'var(--bg-elevated-2)',
          'elevated-3': 'var(--bg-elevated-3)',
        },
        brand: {
          primary: 'var(--brand-primary)',
          'primary-hover': 'var(--brand-primary-hover)',
          'primary-muted': 'var(--brand-primary-muted)',
        },
        accent: {
          agentic: 'var(--accent-agentic)',
          expository: 'var(--accent-expository)',
          autodidactic: 'var(--accent-autodidactic)',
        },
        text: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          tertiary: 'var(--text-tertiary)',
        },
        cta: {
          primary: 'var(--cta-primary)',
          'primary-hover': 'var(--cta-primary-hover)',
          'secondary-bg': 'var(--cta-secondary-bg)',
          'secondary-border': 'var(--cta-secondary-border)',
        },
        success: 'var(--success)',
        warning: 'var(--warning)',
        danger: 'var(--danger)',
        info: 'var(--info)',
      },
    },
  },
  plugins: [],
}
export default config