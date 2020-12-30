module.exports = {
  purge: ["./public/**/*.html", "./src/**/*.svelte"],
  darkMode: "class",
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      backgroundOpacity: ["dark"],
      scale: ["group-hover"],
    },
  },
  plugins: [],
};
