/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT({
  content: ["./src/index.html", "./src/**/*.{js,jsx}"],
  theme: {
    fontFamily: {
      header: ["Great Vibes", "cursive"],
      mainText: ["Raleway", "sans-serif"],
      accentText: ["Cabin", "sans-serif"],
    },
    colors: {
      main: "#c5d6be",
      secondary: "#ffffff",
      accent: "#c292a1",
    },
    extend: {},
  },
  variants: {},
  plugins: [],
});
