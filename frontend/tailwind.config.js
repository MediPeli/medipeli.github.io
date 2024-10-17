/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        surgeonGreen: '#39BDB2',
      },
    },    container: {
      padding: {
        md: "10rem",
      },
    },
  },
  plugins: [],
};