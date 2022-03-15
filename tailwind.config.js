module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto"],
        "major-mono-display": ["Major Mono Display"],
      },
      colors: {
        "fondo-1": "#1F1E1E",
        gold: "#FBB500",
      },
      transformOrigin: {
        "alias-x": "54deg",
        "alias-y": "278deg",
      },
    },
  },
  plugins: [],
};
