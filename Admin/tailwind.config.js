/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ghostwhite: "#f0f2f8",
        lightslategray: {
          "100": "#8c94b3",
          "200": "#8c94b2",
        },
        gray: "#0d1533",
        white: "#fff",
        red: "#e71411",
        gold: "#e7c40b",
        lightgoldenrodyellow: "#fff8d3",
        mediumseagreen: "#6dc16d",
        honeydew: "#dcf8dc",
        darkslategray: "#444d5b",
        tomato: {
          "100": "#fe5e5c",
          "200": "#ff483a",
        },
        khaki: "#ffe76b",
        springgreen: "#7aff7a",
        darkgray: {
          "100": "#adadad",
          "200": "#a2a2a2",
        },
        silver: "#c4c4c4",
        black: "#000",
      },
      spacing: {},
      fontFamily: {
        poppins: "Poppins",
        ubuntu: "Ubuntu",
      },
      borderRadius: {
        "8xs": "5px",
        mini: "15px",
        "7xl": "26px",
      },
    },
    fontSize: {
      sm: "14px",
      base: "16px",
      "5xl": "24px",
      xl: "20px",
      "13xl": "32px",
      xs: "12px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
