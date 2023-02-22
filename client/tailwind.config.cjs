/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      screens: {
        se: { max: '375px' },
        mobileSm: { min: '376px', max: '768px' },
        mobileMd: { min: '769px' },
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('tailwind-scrollbar-hide'),
  ],
};
