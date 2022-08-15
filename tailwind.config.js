/* eslint-env node */
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            boxShadow: {
                "light-xl": "0 25px 50px -12px rgb(0 0 0 / 0.06)",
                "centered-lg": "0 0px 15px -3px rgb(0 0 0 / 0.13), 0 0px 6px -4px rgb(0 0 0 / 0.13)"
            },
        },
    },
    plugins: [],
};
