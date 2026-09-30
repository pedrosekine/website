/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        olive: {
          DEFAULT: "#65743A",
          light: "#7A8B5A",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
