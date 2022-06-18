/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                "arsenica-medium": ["ArsenicaMedium"],
            },
            height: {
                "screen-minus-nav": "calc(100vh - 58px)",
            },
            backgroundColor: {
                "portfolio-green": "#E5E85A",
            },
        },
    },
    plugins: [],
}
