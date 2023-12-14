/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-purple": "hsl(275, 100%, 97%)",
        "Light-pink": "hsl(275, 100%, 97%)",
        "Grayish-purple": "hsl(292, 16%, 49%)",
        "Dark-purple": "hsl(292, 42%, 14%)",
      },
    },
  },
  plugins: [],
};
