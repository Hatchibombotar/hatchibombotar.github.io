/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {},
    colors: {
      "cool-50": "#fcfcfc",
      "cool-100": "#eeeeee",
      "cool-200": "#a1a1a1",
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

