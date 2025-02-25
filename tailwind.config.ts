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
      },
      width: {
        "128": "32rem"
      },
      height: {
        "160": "40rem",
        "10.5": "2.625rem"
      },
      maxWidth: {
        "128": "32rem"
      },
      maxHeight: {
        "160": "40rem",
      },
      minWidth: {
        "128": "32rem"
      },
      minHeight: {
        "160": "40rem",
      },
      aspectRatio: {
        "4/3": "4 / 3"
      }
    },
  },
  plugins: [],
};
export default config;
