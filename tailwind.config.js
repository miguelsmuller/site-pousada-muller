const { guessProductionMode } = require('@ngneat/tailwind');
const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

process.env.TAILWIND_MODE = guessProductionMode() ? 'build' : 'watch';

module.exports = {
  prefix: '',
  mode: 'jit',
  purge: {
    content: ['./src/**/*.{html,ts,css,scss,sass,less,styl}'],
  },
  darkMode: false,
  theme: {
    screens: {
      ...defaultTheme.screens,
      md: '770px',
      lg: '1026px',
    },
    boxShadow: {
      ...defaultTheme.boxShadow,
      separator:
        '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 -20px 25px -5px rgba(0, 0, 0, 0.1), 0 -10px 10px -5px rgba(0, 0, 0, 0.04)',
    },
    extend: {
      colors: {
        brown: colors.trueGray,
        coffee: {
          50: '#f8f7f6',
          100: '#f1f0ee',
          200: '#ddd9d4',
          300: '#c8c3bb',
          400: '#9f9587',
          500: '#766854',
          600: '#6a5e4c',
          700: '#594e3f',
          800: '#473e32',
          900: '#3a3329',
        },
        'heavy-metal': {
          50: '#f5f5f4',
          100: '#ebeaea',
          200: '#ccccca',
          300: '#adada9',
          400: '#706f69',
          500: '#323129',
          600: '#2d2c25',
          700: '#26251f',
          800: '#1e1d19',
          900: '#191814',
        },
      },
    },
    fontFamily: {
      sans: ['"Open Sans"', ...defaultTheme.fontFamily.sans],
      display: ['"Montserrat Alternates"', ...defaultTheme.fontFamily.sans],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
  ],
};
