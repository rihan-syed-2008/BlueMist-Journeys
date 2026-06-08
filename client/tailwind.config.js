/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],

  theme: {
    extend: {
      colors: {
        navy: '#1E3A5F',
        teal: '#5BC0BE',
        cream: '#F8F6F2',
      },

      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['DM Sans', 'sans-serif'],
      },

      boxShadow: {
        luxury: '0 20px 60px rgba(0,0,0,0.12)',
      },

      letterSpacing: {
        luxury: '0.3em',
      },

      transitionTimingFunction: {
        luxury: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },

  plugins: [],
}