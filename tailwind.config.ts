import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      opensans: ["Open Sans"],
    },
    extend: {},
  },
  plugins: [],
} satisfies Config;
