const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
      'primary':{
        50:"#E8FCFA",
        100:"#D1F9F6",
        200:"#A4F3EE",
        300:"#76EEE6",
        400:"#49E8DD",
        500:"#1CE2D5",
        600:"#16B5AA",
        700:"#108880",
        800:"#0B5A55",
        900:"#052D2A",
        DEFAULT: "#16ded7"
      },
      blue: colors.blue,
      white: colors.white,
      sky: colors.sky,
      gray: colors.gray,
      cyan: colors.cyan
    }
  },
  plugins: [],
}
