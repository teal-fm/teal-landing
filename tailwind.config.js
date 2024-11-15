/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        serif: "Crimson Pro",
        sans: "DM Sans",
        "modern-serif": "Fraunces"
      }
    },
  },
  plugins: [],
};