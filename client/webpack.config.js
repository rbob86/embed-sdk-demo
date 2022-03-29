const path = require("path");

module.exports = {
  mode: "production",
  entry: {
    demo: path.resolve(__dirname, "./src/demo.js"),
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "./dist"),
  },
  module: {
    rules: [{ test: /\.js|.tsx$/, loader: "babel-loader" }],
  },
  resolve: {
    extensions: [".js"],
  },
};
