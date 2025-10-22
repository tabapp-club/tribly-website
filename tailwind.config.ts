import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#9747ff",
          dark: "#862ef8",
        },
        background: "#F2F2F2",
        star: {
          DEFAULT: "#FFCB45",
          dark: "#DFB300",
        },
        accent: {
          green: "#5abb80",
          purple: "#e2cbff",
          blue: "#023e8a",
          lightPurple: "#f1ecff",
          lightGreen: "#eafff2",
          lightBlue: "#e2f1fd",
        },
      },
      fontFamily: {
        clash: ["var(--font-clash)", "sans-serif"],
        manrope: ["var(--font-manrope)", "sans-serif"],
      },
      borderRadius: {
        '4xl': '40px',
        '5xl': '99px',
      },
      backdropBlur: {
        xs: '2.5px',
      },
    },
  },
  plugins: [],
};

export default config;

