/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // ── Paleta principal: themed via CSS custom properties ──
        metal: {
          50:  'rgb(var(--metal-50) / <alpha-value>)',
          100: 'rgb(var(--metal-100) / <alpha-value>)',
          200: 'rgb(var(--metal-200) / <alpha-value>)',
          300: 'rgb(var(--metal-300) / <alpha-value>)',
          400: 'rgb(var(--metal-400) / <alpha-value>)',
          500: 'rgb(var(--metal-500) / <alpha-value>)',
          600: 'rgb(var(--metal-600) / <alpha-value>)',
          700: 'rgb(var(--metal-700) / <alpha-value>)',
          800: 'rgb(var(--metal-800) / <alpha-value>)',
          900: 'rgb(var(--metal-900) / <alpha-value>)',
        },
      },
      fontFamily: {
        sans:  ['Inter', 'sans-serif'],
        mono:  ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'card':       '0 1px 3px rgba(43,61,79,0.08), 0 4px 16px rgba(74,92,120,0.07)',
        'card-hover': '0 4px 12px rgba(43,61,79,0.14), 0 8px 32px rgba(74,92,120,0.14)',
        'accent':     '0 4px 16px rgba(74,92,120,0.35)',
        'accent-sm':  '0 0 0 3px rgba(74,92,120,0.18)',
      },
      keyframes: {
        'fade-in': {
          from: { opacity: '0', transform: 'translateY(6px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        'theme-spin': {
          '0%':   { transform: 'rotate(0deg) scale(1)' },
          '50%':  { transform: 'rotate(180deg) scale(0.6)' },
          '100%': { transform: 'rotate(360deg) scale(1)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.4s ease forwards',
      },
    },
  },
  plugins: [],
};
