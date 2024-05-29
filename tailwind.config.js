/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage :{
        sepatu:'url("../public/image/sepatu.jpg")',
      }
    },
  },
  plugins: [],
}

