/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#000",
        gainsboro: "#d9d9d9",
        midnightblue: "#1e2a79",
        purple: "#641e79",
        whitesmoke: "#eee",
        gray: {
          "100": "#fbfbfb",
          "200": "#888",
        },
        darkslategray: "#3e3e3e",
        ghostwhite: "#fafaff",
        steelblue: "#8f95c3",
      },
      spacing: {},
      fontFamily: {
        "text-paragraph": "Montserrat",
        h6: "Teko",
      },
      borderRadius: {
        "31xl": "50px",
      },
    },
    fontSize: {
      sm: "14px",
      "5xl": "24px",
      "13xl": "32px",
      lg: "18px",
      "45xl": "64px",
      "17xl": "36px",
      "53xl": "72px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
