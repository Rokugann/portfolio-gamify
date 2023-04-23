/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'CenterBand': "#A4A3A3",
        'MainColor': "#F2F2F2",
        'MainBtn' :'#D9D9D9',
        'FrontBtn': "#ED3354",
        'GameBtn': '#91BC18',
        'BackBtn': '#328BA9',
        'TechBtn': '#BB8E6E',
        'MeBtn': '#596E5C',
        'Idle': '#302E38' 
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
        "rightBold": "4px 0px 0px #000000",
        "mainBtn": "inset -7px 12px 4px rgba(0, 0, 0, 0.59)"
      },
      transitionProperty: {
        "hoverScale": "width, background-color"
      }
    },
  },
  plugins: [],
}

