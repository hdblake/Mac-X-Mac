/** @type {import('tailwindcss').Config} */
export default {
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
};
