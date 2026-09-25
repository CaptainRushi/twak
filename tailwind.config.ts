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
        paper: "#FAF3E3",
        butter: "#F3E2B9",
        sand: "#E8D2A8",
        clay: "#B4512B",
        "clay-deep": "#7C3316",
        cocoa: "#33241A",
        bark: "#3E2A1B",
        gold: "#A9782B",
      },
      fontFamily: {
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        warm: "inset 0 1px 0 rgba(255,255,255,.7), 0 14px 30px -18px rgba(51,36,26,.45)",
        lift: "inset 0 1px 0 rgba(255,255,255,.7), 0 24px 44px -20px rgba(51,36,26,.55)",
      },
    },
  },
  plugins: [],
};
export default config;
