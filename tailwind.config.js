/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        purple: '#55508c',
        lightPink: '#ffe8d2',
        orange: '#f36f3f',
        red: '#5c272f '
      }
    },
  },
  plugins: [],
};