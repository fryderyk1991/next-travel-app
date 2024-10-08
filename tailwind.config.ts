import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
   colors: {
      'primary': '#479c9d',
      'secondary': '#6eb5aa',
      'font-primary': '#F2F3F4'
   }
  },
  plugins: [],
};
export default config;
