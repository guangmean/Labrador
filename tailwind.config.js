/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    fontFamily: {
      'crimson': ['"Crimson Pro"', 'serif'],
    },
    extend: {
      'colors': {
        'labrador': {
          100: '#E8E1D6',
          150: '#E4D7C4',
          200: '#DAC9B4',
          250: '#CFA56A',
          300: '#B9946C',
          600: '#A26733',
          800: '#8A2E0F',
        },
        'labrador-txt': {
          500: '#523D31',
          900: '#090606',
        }
      },
      maxHeight: {
        '26': '6rem', // 26 对应的高度，比如 6.5rem
      },
    },
  },
  plugins: [],
}

