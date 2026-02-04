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
      },
    },
  },
  plugins: [],
};
export default config;
