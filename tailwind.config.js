/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lato: ['"Lato"'],
        merriweather: ['"Merriweather"'],
      },
      colors: {
        primary: "#003366",
        secondary: "#FFA500",
        accent: "#0099CC",
        background: "#F5F5F5",
      },
    },
  },
  plugins: [],
};
