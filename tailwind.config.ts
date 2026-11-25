import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: { extend: { colors: { forest: "#174D36", leaf: "#4E8B63", sage: "#A7C9A0", cream: "#F7F7F0", ink: "#1E2B23" } } },
  plugins: []
};
export default config;
