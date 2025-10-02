/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts}"],
  theme: {
    extend: {
      colors: {
        brand: { yellow: "#FFDE00" }
      },
      borderRadius: { xl2: "1rem" }
    }
  },
  plugins: []
}
