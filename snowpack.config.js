// Consult https://www.snowpack.dev to learn about these options
module.exports = {
  extends: "@sveltejs/snowpack-config",
  plugins: [
    [
      "@snowpack/plugin-svelte",
      {
        compilerOptions: {
          hydratable: true,
        },
      },
    ],
  ],
  mount: {
    "src/components": "/_components",
    "src/logic": "/_logic",
  },
  alias: {
    $components: "./src/components",
    $logic: "./src/logic",
  },
};
