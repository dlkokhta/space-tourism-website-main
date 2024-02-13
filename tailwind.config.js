/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
 

  theme: {
    extend: {
      colors: {
        black: "#0B0D17",
        lightPurple: "#D0D6F9",
        white: "#FFFFFF",

      },

      // backgroundImage: {
      //   destinationMobile: "url('./assets/destination/background-destination-mobile.jpg')",
      //   destinationTablet: "url('./assets/destination/background-destination-tablet.jpg')",
       
      // },

    },
    
    
    fontFamily: {
      atkinsonHyperlegible: ["Atkinson Hyperlegible", "sans-serif"],
      barlow: ["Barlow", "sans-serif"],
      barlowCondensed: ["Barlow Condensed", "sans-serif"],
      bellefair: ["Bellefair", "serif"],
    },

    
    // fontSize: {
    //   "3.2xl": "32px",
    // },
    screens: {
      sm: "378px",
      // => @media (min-width: 640px) { ... }

      md: "540px",
      // => @media (min-width: 768px) { ... }

      lg: "768px",
      // => @media (min-width: 1024px) { ... }

      xl: "1440px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },

  plugins: [],
};

