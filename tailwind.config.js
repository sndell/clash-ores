/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      supercellMagicText: ['supercell-magic-text', 'sans-serif'],
      supercellMagicNumbers: ['supercell-magic-numbers', 'sans-serif'],
    },
    extend: {
      height: {
        dscreen: '100dvh',
      },
      width: {
        dscreen: '100dvw',
      },
      backgroundColor: {
        primary: '#191919',
        secondary: '#000000',
        separator: '#2F2F2F',
        accent: '#ffffff',
      },
      borderColor: {
        primary: '#2F2F2F',
      },
      textColor: {
        primary: '#A8A8A8',
        primaryLight: '#FFFFFF',
        secondary: '#000000',
      },
    },
    backgroundImage: {
      background: "url('https://i.imgur.com/xbfWwdr.png')",
    },
  },
  plugins: [],
};
