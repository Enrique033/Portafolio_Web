/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './data/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        lightBg: '#FFFFFF',
        lightSoft: '#F8FAFC',
        ink: '#0F172A',
        accentIndigo: '#4F46E5',
        accentViolet: '#7C3AED',
      },
      boxShadow: {
        soft: '0 1px 2px rgba(15, 23, 42, 0.04), 0 12px 32px -12px rgba(15, 23, 42, 0.10)',
        lift: '0 2px 4px rgba(15, 23, 42, 0.05), 0 24px 48px -16px rgba(15, 23, 42, 0.18)',
        'glow-indigo': '0 8px 30px -8px rgba(79, 70, 229, 0.45)',
        'glow-violet': '0 8px 30px -8px rgba(124, 58, 237, 0.40)',
        'glow-cyan': '0 8px 30px -8px rgba(8, 145, 178, 0.40)',
        'glow-amber': '0 8px 30px -8px rgba(217, 119, 6, 0.40)',
        'glow-blue': '0 8px 30px -8px rgba(37, 99, 235, 0.40)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float-y': 'float-y 5s ease-in-out infinite',
      },
      keyframes: {
        'float-y': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};
