/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "selector",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      colors: {
        backgroundDark: "#6a2626",
        backgroundDarkSecondary: "#842f2f",
        background: "#743d3d",
        backgroundSecondary: "#6a3a3a",
        textPrimary: "#cc9b7e",
        textPrimaryDesaturated: "#a99082",
      },
      gridTemplateColumns:{
        setup:"1fr 2fr"
      },
      height:{
        "full-minus-navbar":"calc(100vh - 64px)"
      }
    },
  },
  plugins: [],
};
