import type { Config } from "tailwindcss";
import { iconsPlugin, getIconCollections } from "@egoist/tailwindcss-icons";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      opensans: ["Open Sans"],
    },
    extend: {},
  },
  plugins: [
    iconsPlugin({
      collections: getIconCollections("all"),
    }),
  ],
} satisfies Config;
