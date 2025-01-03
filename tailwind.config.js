/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'Background-color': '#242424',
        'Accent-color': '#FF00FF',
        'Text-color': '#F0F0F0',
        'Highlights-color': '#00FFFF'
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}