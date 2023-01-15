const defaultTheme = require('tailwindcss/defaultTheme');

const config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    colors: {
      black: '#000',
      white: '#FFFFFF',
      primary: '#329A68',
      secondary: '#A13C19',
      heading: '#11130E',
      text: '#363636',
    },
    fontFamily: {
      main: ['Rubik', 'sans-serif']
    },
  },

  plugins: [],
};

module.exports = config;
