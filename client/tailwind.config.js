const flowbite = require("flowbite-react/tailwind");
const scrollbar = require('tailwind-scrollbar')
const lineClamp= require('@tailwindcss/line-clamp')

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      keyframes:{
        slidein:{
          from:{
            opacity: "0",
            transform: "translateY(-10px)",
          },
          to:{
            opacity: "1",
            transform: "translateY(0px)",
          },
        },
      },
      animation:{
        slidein: "slidein 1s ease var(--slidein-delay,0) forwards",
      }
    },
  },
  plugins: [
    flowbite.plugin(),
    scrollbar(),
    lineClamp,
  ],
}
