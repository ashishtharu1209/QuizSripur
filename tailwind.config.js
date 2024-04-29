/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      color:{
        'custom-green':"#36A420"
      },
      backgroundImage:{
        'my': "url('/images/pic.png')",
      }
      
    },
  },
  plugins: [],
}