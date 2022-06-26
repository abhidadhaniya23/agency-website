/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    fontFamily: {
      'lato': ['Lato', 'sans-serif'],
      'quicksand': ['Quicksand', 'sans-serif'],
    },
    container: {
      center: true,
    },
    extend: {},
  },
  plugins: [
    require('preline/plugin')
  ]
}