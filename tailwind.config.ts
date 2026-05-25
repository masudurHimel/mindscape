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
        'navy-dark': '#0d2244',
        'navy-footer': '#080f1e',
        'brand-blue': '#1a56db',
        'brand-sky': '#93c5fd',
        'brand-border': '#dde8ff',
        'brand-surface': '#f8faff',
        'wa-green': '#25D366',
        'body-gray': '#4b5563',
      },
      fontFamily: {
        display: ['var(--font-jakarta)', 'system-ui', 'sans-serif'],
        body: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(160deg, #0d2244 0%, #1a3a6e 45%, #1a56db 100%)',
        'cta-gradient': 'linear-gradient(135deg, #0d2244 0%, #1a3a6e 50%, #1a56db 100%)',
        'admission-gradient': 'linear-gradient(135deg, #0d2244 0%, #1a56db 100%)',
      },
    },
  },
  plugins: [],
}

export default config
