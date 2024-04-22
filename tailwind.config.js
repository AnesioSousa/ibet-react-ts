/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-100": "#D9D9D9",
        "gray-300": "#7C7A7A",
        "primary-100": "#323237",
        "primary-300": "#FFA6A3",
        "primary-500": "#2F2F39",
        "secondary-400": "#F4CA01",
        "secondary-500": "#FFC132",
      },
    },
  },
  plugins: [],
};
