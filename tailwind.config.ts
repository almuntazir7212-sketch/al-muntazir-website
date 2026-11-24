import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#051322",
          900: "#071d33",
          850: "#092542",
          800: "#0B2C4D", // Primary brand navy
          700: "#133C66",
          600: "#1D5084",
          500: "#2B68A6",
          100: "#E6EEF7",
          50: "#F1F5FA",
        },
        gold: {
          light: "#f2d67c",
          DEFAULT: "#e3b93e",
          dark: "#c79a2e",
          brand: "#B08D2A", // Brand gold for borders & certificates
          surface: "#FBF7ED",
          border: "#E7CE82",
        },
        brandGreen: {
          DEFAULT: "#25D366",
          hover: "#20BA5A",
          dark: "#128C7E",
        },
        brandBlue: {
          DEFAULT: "#0284C7",
          hover: "#0369A1",
        },
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "system-ui", "sans-serif"],
        heading: ["var(--font-archivo)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #f2d67c 0%, #e3b93e 50%, #c79a2e 100%)",
        "gold-gradient-hover": "linear-gradient(135deg, #fae298 0%, #ecc44f 50%, #d8ab36 100%)",
        "navy-gradient": "linear-gradient(180deg, #071d33 0%, #0B2C4D 100%)",
        "navy-radial": "radial-gradient(circle at 50% 30%, #133C66 0%, #071d33 100%)",
      },
      boxShadow: {
        "premium-sm": "0 2px 8px -1px rgba(11, 44, 77, 0.08), 0 1px 3px -1px rgba(176, 141, 42, 0.12)",
        "premium": "0 10px 30px -5px rgba(11, 44, 77, 0.12), 0 4px 12px -2px rgba(176, 141, 42, 0.15)",
        "premium-lg": "0 20px 40px -10px rgba(11, 44, 77, 0.2), 0 8px 20px -4px rgba(176, 141, 42, 0.25)",
        "gold-glow": "0 0 25px rgba(227, 185, 62, 0.35)",
      },
    },
  },
  plugins: [],
};
export default config;
