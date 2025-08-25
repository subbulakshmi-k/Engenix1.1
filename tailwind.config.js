/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          900: '#1e3a8a',
        },
        electric: {
          yellow: '#fbbf24',
          orange: '#f97316',
          blue: '#1e40af',
        },
        light: {
          bg: '#ffffff',
          surface: '#f8fafc',
          muted: '#f1f5f9',
          border: '#e2e8f0',
          text: '#1e293b',
          textMuted: '#64748b',
          primary: '#3b82f6',
          secondary: '#8b5cf6',
          accent: '#06b6d4',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
