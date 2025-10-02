/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-yellow': '#F5DB13',
        'pokemon-blue': '#3466AF',
        'pokemon-green': '#4CAF50',
        'pokemon-red': '#FF6B6B',
      },
      backgroundImage: {
        'pokemon-gradient': 'linear-gradient(135deg, #F5DB13 0%, #FFE066 50%, #F5DB13 100%)',
      }
    },
  },
  plugins: [],
}