/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        primary: "#12305B",
        buttonColor: "#FC5959",
        fadedBackground: "#FFD7231A",
        fadedPrimary: "#21384299",
        cardBg: "#FBF9F2",
        cardText: "#4D533C",
        borderColor: "#21384218",
        footerText: "#ABABAB",
      },
      boxShadow: {
        custom: "50px 50px 100px 0px rgba(0, 0, 0, 0.15)", 
        card: "0px 100px 100px 0px rgba(0, 0, 0, 0.15)",
        product: "30px 0px 30px 0px rgba(0, 0, 0, 0.05)"

      },
      fontFamily: {
        openSans: ["Open Sans", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
