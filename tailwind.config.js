/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#5865F2',
        'primary-dark': '#393C59',
        'white': '#C2C2C2',
        'dark-1': "#36393F",
        'dark-2': "#202225",
        'dark-highlight': "rgba(0, 0, 0, 0.336)"
      }
    },
  },
  plugins: [],
}