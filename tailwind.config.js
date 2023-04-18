module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto"],
        "major-mono-display": ["Major Mono Display"],
      },
      colors: {
        "fondo-1": "#1F1E1E",
        "site-gold": "#FBB500",
        "site-gold-2": "#C28E08",
        "site-red": "#FF0011",
      },
      transformOrigin: {
        "alias-x": "54deg",
        "alias-y": "278deg",
      },
    },
  },
  plugins: [],
};
