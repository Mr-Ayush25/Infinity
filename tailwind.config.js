/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#9b7bf7",
        secondary: "#ed64a6",
        bgColor: "#f8fbff",
        "light-primary": "#a58deb",
        "white-100": "#F4F4F4",
        "white-200": "#EDF0F8",
        "black-100": "#3D4258",
        "neutral-black": "#23263B",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        spaceGrotesk: ["Space Grotesk", "sans-serif"],
      },
      maxWidth: {
        "10xl": "1340px",
      },
      screens: {
        "4xl": "991px",
      },
      boxShadow: {
        "3xl": "9px 9px rgba(255, 255, 255, 0.24)",
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar")({ nocompatible: true }),
    require("@tailwindcss/typography"),
  ],
};
