/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        slate900: "#0F172A",
        blue500: "#3B82F6",
      },
    },
  },
  plugins: [],
  presets: [require("nativewind/preset")],
};
