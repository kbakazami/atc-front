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
                "primary": "#60A7BF",
                "secondary": "#1E212B",
                "tertiary": "#6DE7AC",
                "error":"#E21E1E"
            },
            spacing: {
                '104':'500px',
            },
        },
    },
    plugins: [],
}