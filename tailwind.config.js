/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dark1: "#191C21",
        dark2: "#212833",

        grayScale: {
          DEFAULT: "rgb(78, 93, 120)",
          60: "rgba(78, 93, 120, 0.6 )",
        },
        bluePrimary: {
          DEFAULT: "#377DFF",
        },
        greenPrimary: "#38CB89",
        yellowPrimary: "#FFAB00",
        redPrimary: "#FF5630",
      },
    },
  },
  plugins: [],
};
