/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ED8F02",
        secondary: "black",
      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
      },
    },
    screens: {
      vsm: "375px",
    },
  },
  plugins: [],
};
