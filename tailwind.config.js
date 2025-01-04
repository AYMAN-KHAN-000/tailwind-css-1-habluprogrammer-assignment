
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["*"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        inter: ['"Inter"', 'serif'], // Added Inter font here
      },
    },
  },
  plugins: [],
}