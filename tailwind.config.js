/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Mochiy Pop P One", "serif"],
        secondary: ["Montserrat", "serif"],
      },
      colors: {
        primary: "#FDAC07",
        secondary: "#47802B",
        dark: "#03161D",
        // neutral: colors.gray,
      },
      backgroundImage: {
        homepage:
          "linear-gradient(to bottom, rgb(0,0,0,0.5), rgb(0,0,0,0.5)), url('/images/header-1.jpg')",
        product:
          "linear-gradient(to bottom, rgb(0,0,0,0.5), rgb(0,0,0,0.5)), url('/images/header-2.jpg')",
        // 'footer-texture': "url('/img/footer-texture.png')",
      },
    },
  },
  plugins: [],
};
