/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // ── Paleta principal: #b0c4e8 → #2b3d4f ──
        metal: {
          50:  '#eef3fb',  // muy claro, fondos
          100: '#d8e4f5',
          200: '#b0c4e8',  // color-1
          300: '#8a9bb7',  // color-2
          400: '#697a9b',  // color-3
          500: '#4a5c78',  // color-4  ← acento principal
          600: '#3d4e68',
          700: '#2b3d4f',  // color-5  ← texto oscuro
          800: '#1e2d3b',
          900: '#111d27',
        },
        steel: {
          50:  '#f5f8fc',
          100: '#dce8f2',
          200: '#b0c4e8',  // color-1
          300: '#8a9bb7',  // color-2
          400: '#697a9b',  // color-3
          500: '#4a5c78',  // color-4
          600: '#3d4e68',
          700: '#2b3d4f',  // color-5
          800: '#1e2d3b',
          900: '#111d27',
        },
      },
      fontFamily: {
        sans:  ['Inter', 'sans-serif'],
        mono:  ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'metal-grad':   'linear-gradient(135deg, #b0c4e8 0%, #8a9bb7 50%, #4a5c78 100%)',
        'metal-grad-r': 'linear-gradient(90deg,  #b0c4e8 0%, #8a9bb7 50%, #697a9b 100%)',
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
      },
      animation: {
        'fade-in': 'fade-in 0.4s ease forwards',
      },
    },
  },
  plugins: [],
};
