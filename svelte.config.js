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
  }),
  adapter: "@sveltejs/adapter-netlify",
};
