/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend:
    {
      colors: {
        'eerie-black': '#1B1B1D',
        'silver': '#ABABAB',
        'taupe-gray': '#847D7E',
        'night': '#0B0B0B',
        'off-red': 'rgba(248, 0, 0, 1)',
      },
      fontFamily: {
        'poppins': ['Rubik Variable', 'sans-serif']
      },
    },
  },
  plugins: [],
}