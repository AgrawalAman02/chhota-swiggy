/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./learning/index.html",
    "./learning/src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '-10px 10px 10px 5px rgba(84, 82, 82, 0.2)',
        'custom2' : '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
      },
    },
  },
  plugins: [],
}
