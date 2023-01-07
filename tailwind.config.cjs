const defaultTheme = require('tailwindcss/defaultTheme');

const config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    colors: {
      black: '#000',
      white: '#fff',
      primary: '#329A68',
      secondary: '#A13C19',
      text: '#11130E'
    },
    fontFamily: {
      main: ['Rubik', 'sans-serif']
    },
  },

  plugins: [],
};

module.exports = config;
