/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif']
      },
      colors: {
        brand: { yellow: "#FFDE00" },
        grayBg: "#F2F2F2"
      },
      borderRadius: { xl2: "1rem" }
    }
  },
  plugins: []
}
