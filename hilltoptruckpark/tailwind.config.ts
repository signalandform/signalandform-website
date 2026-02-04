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
        background: "var(--background)",
        foreground: "var(--foreground)",
        base: "#1a1a1a",
        "base-midtone": "#2d2d2d",
        "contrast-midtone": "#b8b8b8",
        contrast: "#FFFFFF",
        accent: {
          1: "#4a7c59",
          2: "#8bc34a",
          3: "#2d5a27",
          4: "#6b9b6a",
          5: "#a5d6a7",
          6: "#1b3d1f",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
