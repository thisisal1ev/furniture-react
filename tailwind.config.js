/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      colors:{
        "darkBlue": '#054C73',
        "333": '#333',
        '666':'#666',
      },
      backgroundImage:{
        'hero-pattern': "url('./img/heroBg.jpg')",
      }
    },
  },
  plugins: [],
}