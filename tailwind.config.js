/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            height: {
                "screen-20": "calc(100vh - 5rem)",
            },
            maxHeight: {
                "screen-20": "calc(100vh - 5rem)",
            },
            width: {
                "full-20": "calc(100% - 5rem)",
                "1/4-5": "calc(25% - 1rem)",
                "1/2-5": "calc(50% - 1rem)",
            },
            borderWidth: {
                12: "12px",
            },
            margin: {
                "50-percent": "50%",
                "20-percent": "20%",
                "10-percent": "10%",
                "5-percent": "5%",
            },
        },
    },
    plugins: [],
};
