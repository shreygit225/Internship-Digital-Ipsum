/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        whitesmoke: "#f0f0f0",
        darkslategray: {
          "100": "#063d43",
          "200": "#073a40",
          "300": "#1c3521",
          "400": "#08373c",
          "500": "#063439",
          "600": "#03292d",
        },
        white: "#fff",
        teal: "#08727d",
        darkorange: "#fa9401",
        silver: "#c0bdbd",
        black: "#101411",
      },
      spacing: {},
      fontFamily: {
        poppins: "Poppins",
        inter: "Inter",
        archivo: "Archivo",
      },
    },
    fontSize: {
      lg: "18px",
      xl: "20px",
      "2xl-3": "21.3px",
      base: "16px",
      "33xl": "52px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
