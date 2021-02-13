import postcss from "rollup-plugin-postcss";

export default {
    input: "./index.js",
    output: {
      file: "./output.js",
      format: "esm",
    },
    plugins: [
        postcss({
          config: {
            path: "./postcss.config.js",
          },
          extensions: [".css"],
          minimize: true,
          inject: {
            insertAt: "top",
          },
        }),
      ],
      external: ["react", "react-dom"],
  }