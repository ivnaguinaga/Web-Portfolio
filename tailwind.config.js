/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#D97757',
          dark: '#E8895C',
        },
        background: {
          light: '#F5F1E8',
          dark: '#0A0A0A',
        },
        surface: {
          light: '#FFFFFF',
          dark: '#1A1A1A',
        },
        text: {
          light: '#2A2A2A',
          dark: '#F5F1E8',
        },
        accent: {
          cyan: '#00CFC1',
          'cyan-dark': '#00F5E4',
        },
        neutral: {
          light: '#E8E4D9',
          dark: '#3A3A3A',
          gray: '#6B6B6B',
          'gray-light': '#A8A8A8',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
