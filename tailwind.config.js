/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#213555',
        secondary: '#3E5879', 
        accent: '#D8C4B6',
        light: '#F5EFE7',
      },
    },
  },
  plugins: [],
}
