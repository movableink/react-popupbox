const { build } = require("esbuild");
const { dependencies } = require("./package.json");

const entryFile = "src/index.js";
const shared = {
  bundle: true,
  entryPoints: [entryFile],
  loader: { '.js': 'jsx' },
  // Treat all dependencies in package.json as externals to keep bundle size to a minimum
  external: Object.keys(dependencies),
  logLevel: "info",
  minify: true,
  sourcemap: true,
};

build({
  ...shared,
  format: "esm",
  outfile: "./dist/react-popupbox.esm.js",
  target: ["esnext"],
});

build({
  ...shared,
  format: "cjs",
  outfile: "./dist/react-popupbox.cjs.js",
  target: ["esnext"],
});