/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
        "sm": "640px",
        "md": "768px",
        "lg": "1024px",
        "xl": "1280px",
        "2xl": "1600px"
    },
    colors:{
      "black": "#000000",
      "white": "#ffffff",
      "primary": "#A04668",
      "secondary": "#1E212B",
      "tertiary": "#C8ADC0"
    },
    extend: {},
  },
  plugins: [],
}