/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        krona: ["Krona One", "sans-serif"],
        Kumbh: ["Kumbh Sans", "sans-serif"],
      },
      colors: {
        mgreen: "#089170",
        mpurple: "#583FBA",
        mash: "#565656",
        1: "#F8F8F8",
        2: "#EBEBEB",
        3: "#000000",
      },
       screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      ll: "1468px",
      xl: "1700px",
      
    },
      
    },
  },
  plugins: [],
};
