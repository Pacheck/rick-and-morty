/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#39FF14',
        secondary: '#F8FE76',
        ternary: '#F29901'
      },
      width: {
        100: '100px'
      },
      height: {
        'fullview': "calc(100vh - 56px)"
      }
    },
  },
  plugins: [],
}