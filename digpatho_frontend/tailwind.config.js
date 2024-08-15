/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'], // Aplica 'Roboto' como la fuente principal
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(137.92deg, rgba(255, 255, 255, 0.4) 20.43%, rgba(232, 121, 249, 0.26) 49.66%, rgba(204, 171, 238, 0) 92.38%)',
      },
      colors: {
        main:{
          100:"#a92366"
        },
        secondary:{
          100:"#f5f5f5"
        },
      }
    },
  },
  plugins: [],
});
