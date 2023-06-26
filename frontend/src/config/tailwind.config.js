/** @type {import('tailwindcss').Config} */
import * as theme from "./theme"

module.exports = {
  content: {
    relative: true,
    files: [
      "../pages/**/*.{js,jsx,ts,tsx}",
      "../components/**/*.{js,jsx,ts,tsx}",
    ]
  },
  theme: {
    ...theme,
  },
  plugins: [],
}
