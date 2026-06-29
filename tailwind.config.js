/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        metal: {
          50:  '#F0F5FA',
          100: '#E2EAF4',
          200: '#C4D4E8',
          300: '#8BA3C7',
          400: '#6B8DB8',
          500: '#4A7FC1',
          600: '#3A6FB1',
          700: '#2A5A9B',
          800: '#1D3D6B',
          900: '#1A1F2E',
        },
        steel: {
          50:  '#F8FAFC',
          100: '#D1DCE8',
          200: '#B8C9DC',
          300: '#9EB5CC',
          400: '#8899AA',
          500: '#6B7C8E',
          600: '#4A5568',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
      },
      fontFamily: {
        sans:  ['Inter', 'sans-serif'],
        mono:  ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'metal-grad': 'linear-gradient(135deg, #8BA3C7 0%, #C4D4E8 50%, #7A9AB8 100%)',
        'metal-grad-r': 'linear-gradient(90deg, #8BA3C7 0%, #C4D4E8 50%, #6B8DB8 100%)',
      },
      boxShadow: {
        'card':  '0 1px 3px rgba(26,31,46,0.08), 0 4px 16px rgba(74,127,193,0.06)',
        'card-hover': '0 4px 12px rgba(26,31,46,0.12), 0 8px 32px rgba(74,127,193,0.12)',
        'accent': '0 4px 16px rgba(74,127,193,0.35)',
        'accent-sm': '0 0 0 3px rgba(74,127,193,0.15)',
      },
      keyframes: {
        'fade-in': {
          from: { opacity: '0', transform: 'translateY(6px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.4s ease forwards',
      },
    },
  },
  plugins: [],
};
