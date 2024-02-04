/**
 * @format
 * @type {import('tailwindcss').Config}
 */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "430px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        xxl: "1440px",
        "2xl": "1536px",
      },
      fontSize: {
        "xsmall-light": ["12px"], // Tamaño de fuente 12px, línea de altura 18px
        "xsmall-regular": ["12px"], // Tamaño de fuente 12px, línea de altura 20px
        "xsmall-semibold": ["12px"], // Tamaño de fuente 12px, línea de altura 22px
        "xsmall-bold": ["12px"], // Tamaño de fuente 12px, línea de altura 24px

        "small-light": ["14px"],
        "small-regular": ["14px"],
        "small-semibold": ["14px"],
        "small-bold": ["14px"],

        "normal-light": ["16px"],
        "normal-regular": ["16px"],
        "normal-regular-italic": ["16px", { fontStyle: "italic" }],
        "normal-semibold": ["16px"],
        "normal-semibold-italic": ["16px", { fontStyle: "italic" }],
        "normal-bold": ["16px"],

        "medium-light": ["20px"],
        "medium-regular": ["20px"],
        "medium-semibold": ["20px"],
        "medium-bold": ["20px"],

        "large-light": ["24px"],
        "large-regular": ["24px"],
        "large-semibold": ["24px"],
        "large-bold": ["24px"],

        "xlarge-light": ["28px"],
        "xlarge-regular": ["28px"],
        "xlarge-semibold": ["28px"],
        "xlarge-bold": ["28px"],

        "display-light": ["40px"],
        "display-regular": ["32px"],
        "display-semibold": ["32px"],
        "display-bold": ["32px"],
      },
      colors: {
        primary: "#57B7F2",
        secondary: "#6DBFF2",
        tertiary: "#91CDF2",
        quaternary: "#B3DAF2",
        background: "#F2F2F2",
      },
    },
  },
  plugins: [],
};
