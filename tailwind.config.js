/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      minHeight:{
        "parent":"100vh",
        "Modal":"50vh"
      },
      minWidth:{
        "modal":"40rem"
      }
    },
  },
  plugins: [],
}

