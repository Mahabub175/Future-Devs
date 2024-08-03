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
        primary: "#005F73",
        primaryLight: "#D1EEEA",
        yellow: "#FFC107",
        textColor: "#C5C5C5",
      },
    },
  },
  plugins: [],
};
