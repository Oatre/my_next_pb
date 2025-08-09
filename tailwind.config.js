/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom colors
        primary: {
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
        },
        accent: "#10b981",
        "race-blue": "#4f46e5",
        "race-green": "#059669",
        "pb-gold": "#f59e0b",
        background: "#2e2d2d",
      },
      fontFamily: {
        montserrat: ["var(--font-montserrat)", "sans-serif"],
      },
    },
  },
  plugins: [],
};