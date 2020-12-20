module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.svelte"],
  darkMode: "class",
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      backgroundOpacity: ["dark"],
      scale: ['group-hover'],
    },
  },
  plugins: [],
};
