/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./_includes/**/*.html",             
    "./_layouts/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto Slab', 'serif'], // Set Roboto Slab as the default sans-serif font
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
  darkMode: 'false',
}

//  npx tailwindcss -i ./src/css/input.css -o ./src/css/output.css --watch