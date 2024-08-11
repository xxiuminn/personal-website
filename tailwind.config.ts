import type { Config } from "tailwindcss";
import { iconsPlugin, getIconCollections } from "@egoist/tailwindcss-icons";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        ptserif: ["PT Serif"],
        worksans: ["Work Sans"],
      },
      fontWeight: {
        light: "300",
        normal: "400",
        medium: "500",
      },
    },
  },
  plugins: [
    iconsPlugin({
      collections: getIconCollections("all"),
    }),
  ],
} satisfies Config;
