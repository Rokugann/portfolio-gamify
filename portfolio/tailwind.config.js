/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'CenterBand': "#2F2F2F",
        'MainColor': "#2c2c2c",
        'FrontBtn': "#ED3354",
        'GameBtn': '#6AF000',
        'BackBtn': '#FAE100',
        'ContactBtn': '#2FB0D9',
        'MeBtn': '#403B3C' 
      },
      backgroundImage: {
        "OctogoneFrame": "url('/public/Vector.svg')"
      },
      skew: {
        "small": "-15deg",
        "smallReverse": "15deg",
        "big": "-20deg",
        "veryBig": "-30deg" 
      },
      boxShadow: {
        "leftBold": "-4px 0px 0px #000000",
        "rightBold": "4px 0px 0px #000000"
      }
    },
  },
  plugins: [],
}

