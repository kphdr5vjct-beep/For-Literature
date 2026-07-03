import type { onfig } from "tailwindcss";
const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Cormorant Garamond", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      colors: {
        cream: {50: "#fdfcf8", 100: "#faf7f0", 200: "#f4ede0" },
        ink: { 700: "#3d3830", 800: "#2c2820", 900: "#1a1814" },
        forest: { 700: "#2d5a3d", 800: "#1e3d29", 900: "#132819" },
        gold: { 400: "#c9a84c", 500: "#b8932a", 600: "#9a7b22" },
      },
    },
  },
  plugins: [],
};
export default config;
