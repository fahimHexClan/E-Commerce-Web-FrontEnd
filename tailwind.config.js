/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary" : "#f3f3f3",
        "secondary" : "#5e5d5d",
        "accent" : "#cd7225",
      }
    },
  },
  plugins: [],
}

