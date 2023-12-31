/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "BebasNeue": "Bebas Neue"
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}

