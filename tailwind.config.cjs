module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        techBlue: {
          50: "#f0f7fb",
          100: "#e2f0fa",
          300: "#61aef0",
          500: "#0ea5e9",
          700: "#0369a1",
          900: "#012a3a",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "Segoe UI",
          "Roboto",
          "Helvetica",
          "Arial",
        ],
      },
    },
  },
  plugins: [],
};
