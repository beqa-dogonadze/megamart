/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '440px', // Adjusted for smaller devices like phones
      md: '768px', // Standard tablet size
      lg: '1224px', // Standard laptop size
      xl: '1550px', // Standard desktop size
      '2xl': '1740px' // Larger desktops or high-resolution screens
    },
    extend: {
      fontFamily: {
        alice: ['Alice', 'serif']
      }
    }
  },
  plugins: []
}
