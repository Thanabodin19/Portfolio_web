/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primaryTitle: "#7216F2",
        primaryAccess: "#6852F2",
        primaryBase: "#D2D6D9",
        primaryContent: "#30F284",
        primarySubcon: "#F29849",
        primaryBG: "#0D0D0D",
        primaryBG2: "#eeeeee",
      }
    },
  },
  plugins: [],
}