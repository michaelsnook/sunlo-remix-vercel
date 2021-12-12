module.exports = {
  mode: 'jit',
  purge: ['./app/**/*.tsx', './app/**/*.jsx', './app/**/*.js', './app/**/*.ts'],
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
    extend: {
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
      minHeight: {
        '100vh': '100vh',
        '85vh': '85vh',
      },
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
    require('daisyui'),
  ],
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
  },
}
