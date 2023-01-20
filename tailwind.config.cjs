// noinspection JSUnusedLocalSymbols

const defaultTheme = require('tailwindcss/defaultTheme');

const config = {
  content: [ './src/**/*.{html,js,svelte,ts}' ],

  theme: {
    colors: {
      black: '#000',
      white: '#FFFFFF',
      primary: '#329A68',
      secondary: '#A13C19',
      'tertiary-90': '#F5EEE8',
      tertiary: '#EFE0D0',
      'tertiary-100': '#C4986B',
      heading: '#11130E',
      text: '#363636',
    },
    fontFamily: {
      main: [ 'Rubik', 'sans-serif' ],
    },
  },

  plugins: [],
};

module.exports = config;
