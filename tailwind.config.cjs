module.exports = {
  darkMode: ["selector", "[data-theme*='dark']"],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // include your component files
    "./src/global.css", // include your global.css
  ],
  theme: { extend: {} },
  plugins: [],
};
