/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'card': '0px 8px 20px rgba(126, 136, 158, 0.1)',
      },
      letterSpacing: {
        'new-widest': '.2em'
      },
      minWidth: {
        'main-width': '1280px'
      }
    },
  },
  plugins: [],
}