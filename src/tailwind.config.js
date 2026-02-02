/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // 👈 THIS IS MANDATORY. If missing, nothing works.
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}