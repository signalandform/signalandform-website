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
        base: "#181818",
        "base-midtone": "#1C1C1C",
        "contrast-midtone": "#DADADA",
        contrast: "#FFFFFF",
        warm: {
          bg: "var(--warm-bg)",
          "bg-alt": "var(--warm-bg-alt)",
          border: "var(--warm-border)",
        },
        accent: {
          1: "#97C6DF",
          2: "#A1D0F2",
          3: "#2C4F64",
          4: "#A3C4D0",
          5: "#9DD8EC",
          6: "#2E3D42",
        },
      },
      fontFamily: {
        sans: ["var(--font-roboto-flex)", "system-ui", "sans-serif"],
        serif: ["var(--font-playfair)", "Georgia", "serif"],
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "30": "7.5rem",
      },
    },
  },
  plugins: [],
};
export default config;
