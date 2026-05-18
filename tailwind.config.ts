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
        bg: "#0D1117",
        surface: "#161B22",
        "surface-2": "#1C2128",
        border: "#30363D",
        accent: "#00C9A7",
        "accent-hover": "#00A889",
        "accent-dim": "rgba(0,201,167,0.12)",
        gold: "#F0A500",
        "text-primary": "#F0F6FC",
        "text-muted": "#8B949E",
        "text-subtle": "#6E7681",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      boxShadow: {
        "glow-accent": "0 0 40px rgba(0,201,167,0.15)",
        "glow-accent-sm": "0 0 20px rgba(0,201,167,0.2)",
      },
    },
  },
  plugins: [],
};

export default config;
