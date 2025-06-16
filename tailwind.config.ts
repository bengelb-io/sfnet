// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      keyframes: {
        grow: {
          "0%": { width: "0%" },
          "100%": { width: "100%" }, // or '200px' for fixed
        },
        rotate: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
      },
      animation: {
        grow: "grow 0.5s ease-out forwards",
        rotate: "rotate 5s linear infinite",
      },
    },
  },
  content: [
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./app.vue",
  ],
  plugins: [],
};
export default config;
