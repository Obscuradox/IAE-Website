/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'xs': '375px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1440px',
      '3xl': '1920px',
    },
    extend: {
      colors: {
        'primary-blue': '#3442AC',
        'info-blue': '#0054FD',
        'white': '#FFFFFF',
        'light-cream': '#FDF6E8',
        'text-gray': '#B8B8B8',
        'dark-bg': '#0D0D14',
      },
      fontFamily: {
        'euclid': ['Euclid Circular A', 'sans-serif'],
        'euclid-square': ['Euclid Square', 'sans-serif'],
        'euclid-circular-b': ['Euclid Circular B', 'sans-serif'],
        'noto': ['Noto Sans', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'ibm-plex': ['IBM Plex Sans', 'sans-serif'],
        'ibm-plex-mono': ['IBM Plex Mono', 'monospace'],
        'golos': ['Golos Text', 'sans-serif'],
      },
      fontSize: {
        'hero-main': ['120px', { lineHeight: '1.1' }],
        'hero-sub': ['32px', { lineHeight: '1.2' }],
        'section-title-desktop': ['96px', { lineHeight: '1.1' }],
        'button': ['20px', { lineHeight: '1.2' }],
        'stat-number': ['24px', { lineHeight: '1.2' }],
        'stat-label': ['16px', { lineHeight: '1.3' }],
        // Mobile responsive sizes
        'hero-main-mobile': '48px',
        'hero-sub-mobile': '18px',
        'stat-number-mobile': '20px',
        'stat-label-mobile': '14px',
        'button-mobile': '16px',
        'section-title-mobile': '32px',
        'section-title-tablet': '48px',
      },
      lineHeight: {
        'hero-main': '0.86',
        'hero-sub': '0.86',
        'stat-number': '1.2',
        'stat-label': '1.3',
        'button': '1.2',
        'mobile-tight': '1.1',
        'mobile-normal': '1.4',
      },
      spacing: {
        'mobile-section': '48px',
        'tablet-section': '64px',
        'desktop-section': '80px',
      },
      animation: {
        'scroll-right': 'scroll-right 40s linear infinite',
        'scroll-left': 'scroll-left 45s linear infinite',
      },
      keyframes: {
        'scroll-right': {
          '0%': { transform: 'translateX(-25%)' },
          '100%': { transform: 'translateX(-75%)' },
        },
        'scroll-left': {
          '0%': { transform: 'translateX(-75%)' },
          '100%': { transform: 'translateX(-25%)' },
        },
      },
    },
  },
  plugins: [
  ],
} 