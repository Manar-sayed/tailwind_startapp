/** @type {import('tailwindcss').Config} */
module.exports = {
  mode:'jit',// to convert tailwind to css code while writting
  darkMode:'class',
  content: [],
  purge:["./src/**/*.{js,jsx,ts,tsx}"],//to remove any additional css code
  theme: {
    extend: {
      container:{
        center:true,
        padding:'1rem',
      },
      colors: {
        facebook: "#0E69AE",
        twitter: "#68BEF4",
        maingreen: "#3fac8e",
        bg: {
          DEFAULT: "#f8f9ff",
          card: "#f1f3fa",
        },
        darkbg: {
          DEFAULT: "#20222f",
          card: "#252b43",
          dark: "#1d2029",
        },
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          lg: "1024px",
        },
      },
      
    },
  },
  plugins: [],
}

