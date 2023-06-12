const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'rose' : colors.rose,
        'teal' : colors.teal
      }
    },
  },
  plugins: [],
}

