/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "text-white": "#fff",
        "text-body": "#808080",
        "primary-green": "#2abb64",
        "secondary-light-green": "#edf8f4",
        "text-title": "#2e2e2e",
        "other-image-placeholder": "#ebebeb",
        seagreen: "#2b6e46",
        "secondary-light-orange": "#fff0e9",
        "secondary-light-yellow": "#fff6dd",
        "secondary-light-blue": "#e9eefb",
        "primary-yellow": "#ffca45",
        "primary-orange": "#ff8345",
        "text-in-field": "#ccc",
        "text-disable": "#e6e6e6",
        "base-wireframe-blue": "#3371f2",
        "text-body-text": "#666",
        "text-title-text": "#333",
        "base-wireframe-20-blue": "#90acf7",
      },
      spacing: {},
      fontFamily: {
        "heading-bold-heading-6-16": "Inter",
        "caption-12px-medium": "Roboto",
        "headings-bold-24": "Raleway",
      },
      borderRadius: {
        "21xl": "40px",
      },
    },
    fontSize: {
      sm: "14px",
      xs: "12px",
      base: "16px",
      "45xl": "64px",
      "29xl": "48px",
      "5xl": "24px",
      "13xl": "32px",
      "53xl": "72px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
