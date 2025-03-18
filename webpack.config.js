const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js", // Entry file
  output: {
    path: path.resolve(__dirname,
        "dist"), // Output directory
    filename: "bundle.js", // Bundled file name
    },
  mode: "development",
  module: {
    rules: [
            {
        test: /\.js$/, // Apply Babel on JavaScript files
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
                },
            },
            {
        test: /\.css$/, // Load CSS files
        use: [
                    "style-loader",
                    "css-loader"
                ],
            },
        ],
    },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html", // Use custom HTML
        }),
    ],
  devServer: {
    static: "./dist",
    hot: true,
    open: true,
    },
};
