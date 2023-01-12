/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      maxWidth: {
        '1/4': '25%',
        '1/2': '300px',
        '3/4': '75%',
      }
    }
  },
  plugins: [],
}
