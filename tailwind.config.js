const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.red,
      // yellow: colors.yellow,
      yeleo: {
        light: '#ffea92',
        DEFAULT: '#fce14b',
        dark: '#d2b81d'
      }
    },
    extend: {
      theme: {
        boxShadow: {
          lg: '0 0 15px -3px rgba(0, 0, 0, 0.1)'
        }
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
