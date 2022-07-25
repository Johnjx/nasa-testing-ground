const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  darkMode: 'class',
  theme: {
    screens: {
      'xs': '360px',
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        prim: '#FFF6DA',
        sec: '#84F2D6',
        ter: '#FC6B3F',
        quad: '#262525',
      },
      fontFamily: {
        heading: ['Orbitron', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
