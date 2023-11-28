/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        "grape-color": "#94618E",
        "dark-grape-color": "#3a213b",
        "eggplant-color": "#49274A",
        "purple-color": "#19153C",
        "light-green-color": "#c6de6f",
        "sand-color": "#F4DEC8",
        "shell-color": "#F8EEE7"
      },
    },
  },
  plugins: [],
}

