/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "480px",
        "3xl": "1720px",
      },
      colors: {
        primary: "#ff0d2f",
        whitesmoke: "#F5F5F5",
      },
      backgroundColor: {
        secondaryBg: "#576c8b",
      },
      fontFamily: {
        mont: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
