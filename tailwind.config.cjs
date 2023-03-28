/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            screens:{
                "sm": "640px",
                "md": "768px",
                "lg": "1024px",
                "xl": "1280px",
                "2xl": "1600px"
            },
            fontFamily: {
                'oswald':['"Oswald"'],
                'vollkorn':['"Vollkorn"']
            },
            colors:{
                "black": "#000000",
                "white": "#ffffff",
                "primary": "#A04668",
                "secondary": "#1E212B",
                "tertiary": "#C8ADC0",
                "error":"#E21E1E"
            },
            spacing: {
                '104':'500px',
            },
        },
    },
    plugins: [],
}