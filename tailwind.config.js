/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-white": "hsl(275, 100%, 97%)",
        "light-purple": "#AD28EB",
        "Light-pink": "hsl(275, 100%, 97%)",
        "Grayish-purple": "hsl(292, 16%, 49%)",
        "Dark-purple": "hsl(292, 42%, 14%)",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      backgroundImage: {
        "desktop-pattern": "url('/src/assets/background-pattern-desktop.svg')",
        "mobile-pattern": "url('/src/assets/background-pattern-mobile.svg')",
      },
    },
  },
  plugins: [],
};
