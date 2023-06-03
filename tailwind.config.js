/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/*.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'eerie-black': '#1B1B1D',
        'silver': '#ABABAB',
        'taupe-gray': '#847D7E',
        'night': '#0B0B0B',
        'off-red': 'rgba(248, 0, 0, 1)',
        'jet' :  '#292929ff',
        'platinum': '#DADADCff'
      },
      fontFamily: {
        'poppins': ['Rubik Variable', 'sans-serif']
      },
    },
  },
  plugins: [],
}

