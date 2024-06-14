/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gray: "#010101",
        teal: "#217065",
        whitesmoke: "#f4f4f4",
        palegoldenrod: "#f5feb1",
        silver: "#c4c4c4",
      },
      spacing: {},
      fontFamily: {
        outfit: "Outfit",
        "dm-sans": "'DM Sans'",
        "plus-jakarta-sans": "'Plus Jakarta Sans'",
      },
      borderRadius: {
        "19xl": "38px",
        "12xl-6": "31.6px",
        mini: "15px",
        xl: "20px",
        lgi: "19px",
        "7xl-3": "26.3px",
        "4xs": "9px",
        "lgi-2": "19.2px",
        smi: "13px",
        "13xl": "32px",
      },
    },
    fontSize: {
      base: "16px",
      "base-5": "15.5px",
      lg: "18px",
      "5xl-3": "24.3px",
      "13xl": "32px",
      "mid-2": "17.2px",
      "39xl": "58px",
      xl: "20px",
      "38xl-1": "57.1px",
      "6xl": "25px",
      "5xl": "24px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
