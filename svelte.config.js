const sveltePreprocess = require("svelte-preprocess");
module.exports = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: sveltePreprocess({
    defaults: {
      script: "typescript",
    },
    postcss: {
      plugins: [require("tailwindcss")],
    },
    babel: {
      presets: [
        [
          "@babel/preset-env",
          {
            loose: true,
            // No need for babel to resolve modules
            modules: false,
            targets: {
              // ! Very important. Target es6+
              esmodules: true,
            },
          },
        ],
      ],
    },
  }),
  kit: {
    // By default, `npm run build` will create a standard Node app.
    // You can create optimized builds for different platforms by
    // specifying a different adapter
    adapter: "@sveltejs/adapter-node",

    // hydrate the <div id="svelte"> element in src/app.html
    target: "#svelte",
  },
};
