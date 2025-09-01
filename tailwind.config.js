/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        'bni-red': '#d4202a',
        'team-blue': '#1f4e79',
        'team-yellow': '#f4b942',
      },
      boxShadow: {
        glow: "0 0 20px -5px rgba(212, 32, 42, 0.3)",
      }
    }
  },
  plugins: []
};
