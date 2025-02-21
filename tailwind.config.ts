import type { Config } from "tailwindcss";

export default {
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
        "lifecheq-primary": "#00B897",
        "lifecheq-teal-dark": "#173F4B",
        "lifecheq-teal-light": "#3C7F90",
      },
    },
  },
  plugins: [],
} satisfies Config;
