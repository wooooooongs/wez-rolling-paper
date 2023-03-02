/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      screens: {
        se: { max: '375px' },
        mobileSm: { min: '376px', max: '768px' },
        mobileMd: { min: '769px' },
        pc: { min: '1024px' },
      },
      aspectRatio: {
        '9/10': '9 / 10',
      },
      backgroundImage: {
        paper: "url('./src/assets/cover/background-1.png')",
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('tailwind-scrollbar-hide'),
  ],
};
