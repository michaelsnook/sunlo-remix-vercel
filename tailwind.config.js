const colors = require('tailwindcss/colors')
const production = process.env.NODE_ENV === 'production'

module.exports = {
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
  purge: [
    './app/**/*.tsx',
    './main.css',
  ],
  //darkMode: 'media', // or 'class'
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
    },
    container: {
      center: true,
      padding: '1.25rem',
    },
    fontFamily: {
      sans: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        '"Helvetica Neue"',
        'Roboto',
        'Oxygen-Sans',
        'Ubuntu',
        'Cantarell',
        'sans-serif',
      ],
      //display: ['"Exo 2"', 'ui-serif'],
    },
    extend: {
      colors: {
        //gray: colors.coolGray,
        //cyan: colors.cyan,
      },
      maxHeight: {},
      minHeight: {
        '100vh': '100vh',
        '90vh': '90vh'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}