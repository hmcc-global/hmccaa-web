/** @type {import('tailwindcss').Config} */
import * as theme from "./theme"

module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    ...theme,
  },
  plugins: [],
}
