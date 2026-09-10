/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'header': "url('src\assets\Judah-Deane-2026.jpg')",
        'Marc': "url('src\assets\thumbnail.jpeg')",
      }
    }
  },
  plugins: [],
}