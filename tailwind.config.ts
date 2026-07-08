import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        pageBg: "#F4F4F5",
        surface: "#EDEDEE",
        primary: "#14141C",
        secondary: "#8A8F98",
        accent: "#16171F",
        whiteCard: "#FFFFFF",
      },
    },
  },
  plugins: [],
} satisfies Config;
