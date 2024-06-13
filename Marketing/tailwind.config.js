/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "text-white": "#fff",
        "secondary-orange": "#fa6d24",
        "other-image-placeholder": "#ebebeb",
        darkslateblue: "#1f2a6b",
        "text-title": "#2e2e2e",
        "text-body": "#808080",
        "other-blue-light": "#f9fafe",
        "light-text-color-title": "#11142d",
        "light-text-color-body-1": "#92929d",
        "light-primary-color-50": "#5541d7",
        "light-other-color-info": "#f1f1f6",
        "secondary-green": "#35cb8d",
        "primary-light-blue": "#f1f6ff",
        "primary-80-blue": "#3b4790",
        "text-in-field": "#ccc",
        "primary-20-blue": "#d5dafa",
        "text-disable": "#e6e6e6",
        "primary-60-blue": "#5d67a3",
      },
      spacing: {},
      fontFamily: {
        "heading-bold-heading-2-64": "'DM Sans'",
        "paragraph-regular-16": "Roboto",
        "captions-captions-bold": "Mulish",
      },
    },
    fontSize: {
      base: "16px",
      "45xl": "64px",
      "29xl": "48px",
      "5xl": "24px",
      xs: "12px",
      "4xs": "9px",
      "13xl": "32px",
      sm: "14px",
      "53xl": "72px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
