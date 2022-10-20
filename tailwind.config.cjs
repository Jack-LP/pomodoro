/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      kumbh: ['Kumbh Sans'],
      roboto: ['Roboto Slab'],
      space: ['Space Mono'],
    },
    extend: {
      colors: {
        plum: '#1e2240',
        midnight: '#141a31',
        fire: '#fc6e70',
        grape: '#d981f7',
        ice: '#6feff4',
      },
    },
  },
  plugins: [],
};
