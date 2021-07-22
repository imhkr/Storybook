module.exports = {
   purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        SkyBlue:{
          100:"#2196F3",
          200:"#2196F5"
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
