/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'custom-green': '#00FF00',
        'custom-orange': '#FF7A21',
        'custom-white': '#FFFFFF',
        'custom-black': '#000000',
      },
    },
  },
  plugins: [],
};
