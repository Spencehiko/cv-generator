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
            },
            borderWidth: {
                12: "12px",
            },
        },
    },
    plugins: [],
};
