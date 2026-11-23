import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0B2C4D",
          50: "#EEF4F9",
          100: "#D7E4F1",
          200: "#B0C9E3",
          300: "#83A9D2",
          400: "#5584BF",
          500: "#3664A5",
          600: "#274D83",
          700: "#1C3C67",
          800: "#0B2C4D",
          900: "#061A2E",
          950: "#030E1A",
        },
        gold: {
          DEFAULT: "#B08D2A",
          50: "#FBF8EF",
          100: "#F6F0DB",
          200: "#ECDDB3",
          300: "#E1C788",
          400: "#D4B05C",
          500: "#B08D2A",
          600: "#8F7220",
          700: "#6E5717",
          800: "#4D3C0F",
          900: "#2F2407",
        },
      },
      fontFamily: {
        urdu: ["'Noto Nastaliq Urdu'", "'Gulzar'", "'Jameel Noori Nastaleeq'", "serif"],
        heading: ["'Times New Roman'", "Times", "serif"],
        sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "'Segoe UI'", "Roboto", "sans-serif"],
      },
      boxShadow: {
        'gold-glow': '0 4px 20px -2px rgba(176, 141, 42, 0.25)',
        'navy-card': '0 10px 30px -5px rgba(11, 44, 77, 0.08)',
      }
    },
  },
  plugins: [],
};
export default config;
