import solid from "solid-start/vite";
// import nativePlugin from "rollup-plugin-natives";
// import { nodeResolve } from "@rollup/plugin-node-resolve";
// import alias from "@rollup/plugin-alias";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    // solid(),
    // {
    //   name: "native-plugin",
    //   async transform(src: any, id: string) {
    //     if (id.endsWith(".node")) {
    //       return `
    //               try {
    //                   global.process.dlopen(module, '${id}');
    //               } catch(exception) {
    //                   throw new Error('Cannot open  ${id} :'+ exception);
    //               }
    //               export default module.exports;
    //           `;
    //     }
    //   },
    // },

    // nativePlugin({
    //   // Where we want to physically put the extracted .node files
    //   copyTo: "dist/libs",

    //   // Path to the same folder, relative to the output bundle js
    //   // destDir: "./libs",

    //   // Use `dlopen` instead of `require`/`import`.
    //   // This must be set to true if using a different file extension that '.node'
    //   dlopen: false,

    //   // Modify the final filename for specific modules
    //   // A function that receives a full path to the original file, and returns a desired filename
    //   map: (modulePath: string) => "filename.node",

    //   // Generate sourcemap
    //   sourcemap: false,

    //   // If the target is ESM, so we can't use `require` (and .node is not supported in `import` anyway), we will need to use `createRequire` instead.
    //   targetEsm: false,
    // }),

    solid(),
    // nodeResolve({
    //   browser: true,
    // }),
  ],
});
