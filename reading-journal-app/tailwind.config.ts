import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      "tickle-me-pink": "#F288AF",
      "blush-pink": "#D95B7D",
      "cherry-blossom-pink": "#F2A7B5",
      "amaranth-pink": "#F2A2C0",
      "eggplant": "#593C47",
    },
  },
  plugins: [],
};
export default config;
