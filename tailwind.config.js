/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Work Sans", "sans-serif"],
      },
      colors: {
        primary: "hsl(292, 42%, 14%)",
        secondary: "hsl(292, 16%, 49%)",
        light: "hsl(275, 100%, 97%)",
      }
    },
  },
  plugins: [],
}
// - Light pink: hsl(275, 100%, 97%)
// - Grayish purple: hsl(292, 16%, 49%)
// - Dark purple: hsl(292, 42%, 14%)
