/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#3eaf48', // Primary Color
        secondary: '#066738', // Secondary Color (if needed)
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'], // Set Montserrat as the default font
      },
    },
  },
  plugins: [],
}
