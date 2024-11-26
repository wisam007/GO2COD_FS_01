/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          100: "#e5f6f5", // Very light shade
          200: "#b2e4e2", // Light shade
          300: "#80d1cf", // Lighter shade
          400: "#4dbfb9", // Slightly lighter shade
          500: "#005652", // Base (given color)
          600: "#004944", // Slightly darker
          700: "#003c38", // Darker
          800: "#002f2b", // Very dark
          900: "#002320", // Nearly black
        },
      },
    },
  },
  plugins: [require("daisyui")],
};
