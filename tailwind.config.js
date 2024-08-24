/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        title: ["title-font"],
        extra: ["extra-font"],
      },
      fontSize: {
        "10xl": "9rem",
        "11xl": "10rem",
        "12xl": "12rem",
        "13xl": "15rem",
        "14xl": "17rem",
        "15xl": "20rem",
      },
      backgroundColor: {
        "red-10": "#ff060a",
      },
      colors: {
        "red-10": "#ff060a",
      },
    },
  },
  plugins: [],
};
