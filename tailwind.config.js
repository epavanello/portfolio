const production = !process.env.ROLLUP_WATCH;

module.exports = {
  purge: {
    content: [
      "./src/**/*.svelte",
      // may also want to include base index.html
    ],
    enabled: production, // disable purge in dev
  },
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
