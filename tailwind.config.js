/** @type {import('tailwindcss').Config} */
export default {
  purge: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
     extend: {
      colors:{
        primary: "#1512ff",
        secondary: "#cdd7ff",
        accent:"#FFE601",
      },
      fontFamily: {
        // Define custom fonts
        sans: ['Roboto', 'sans-serif'],
        // Add more custom fonts as needed
      },
      // You can extend other parts of the theme like spacing, borderRadius, etc.
    },
  },
  plugins: [],
}

