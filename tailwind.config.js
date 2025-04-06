/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#121212",
        accent: "#E94560",
        secondary: "#6C63FF",
        text: "#F4F4F4",
        highlight: '#6C63FF', 
        lightText: '#F4F4F4',
      },
    },
  },
  plugins: [],
}
