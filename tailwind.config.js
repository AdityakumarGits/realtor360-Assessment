/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#d9b32e",
          dark: "#b9961f",
          pale: "#f8f2df",
        },
      },
      boxShadow: {
        card: "0 2px 5px rgba(20, 25, 35, 0.10)",
      },
    },
  },
  plugins: [],
};