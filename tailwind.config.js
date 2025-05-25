/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#2D3896',
        'info-blue': '#0054FD',
        'white': '#FFFFFF',
        'light-cream': '#FEFDF8',
        'text-gray': '#878787',
      },
      fontFamily: {
        'euclid': ['Euclid Circular A', 'sans-serif'],
        'euclid-square': ['Euclid Square', 'sans-serif'],
        'euclid-circular-b': ['Euclid Circular B', 'sans-serif'],
        'noto': ['Noto Sans', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'ibm-plex': ['IBM Plex Sans', 'sans-serif'],
        'ibm-plex-mono': ['IBM Plex Mono', 'monospace'],
        'golos': ['Golos', 'sans-serif'],
      },
      fontSize: {
        'hero-main': '98.37px',
        'hero-sub': '29.62px',
        'stat-number': '24px',
        'stat-label': '18px',
        'button': '18px',
      },
      lineHeight: {
        'hero-main': '0.86',
        'hero-sub': '0.86',
        'stat-number': '1.36',
        'stat-label': '1.21',
        'button': '1.25',
      },
    },
  },
  plugins: [],
} 