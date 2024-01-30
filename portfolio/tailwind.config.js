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
        'MainColor': "#02003B",
        'MainBtn' :'#333366',
        'FrontBtn': "#B020F0",
        'GameBtn': '#FFFFF0',
        'BackBtn': '#22FF00',
        'TechBtn': '#00F3FF',
        'MeBtn': '#FF007B',
        'Idle': '#4E5662',
        'FontColor': '#E0E0E0'
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
        "mainBtn": "inset -7px 12px 4px rgba(0, 0, 0, 0.59)",
        "mainBtnNeonGlow":"0px 0px 18px rgba(255, 255, 255, 0.82), inset -7px 12px 4px rgba(0, 0, 0, 0.59)",
        "neonGlow": "inset 0px 0px 6px #F0F0F0",
        "revertNeonGlow":"0px 0px 10px #F0F0F0",
        "dualNeonGlow": "inset 0px 0px 6px #F0F0F0, 0px 0px 10px #F0F0F0"
      },
      transitionProperty: {
        "hoverScale": "width, background-color"
      },
      fontFamily: {
        'MainFont': 'Orbitron, Arial'
      }
    },
  },
  plugins: [],
  variants: {
    extend: {
      backgroundColor: ['hover']
    },
  },
}

