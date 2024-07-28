/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {},
    fontFamily: {
      raleway: ["Raleway",],
      roboto: ["Robto"],
      merriweather: ["Merriweather"]
    }
  },
  module:{
    darkMode: 'selector',
  },
  plugins: [
    flowbite.plugin(),
  ],
};



