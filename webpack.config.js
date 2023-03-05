const path = require("path");
const webpack = require("webpack");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  entry: "./index.js",
  output: {
    filename: "WhatsappChatBox.min.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
            options: {
              insert: function insertIntoTarget(element, options) {
                window.chatBoxStyle = element;
              },
            },
          },
          {
            loader: "css-loader",
          },
          "postcss-loader",
        ],
      },
      { test: /\.svg$/, loader: "svg-inline-loader" },
    ],
  },
  plugins: [
    new webpack.BannerPlugin((compilation) => {
      const packageJson = require("./package.json");
      const bannerText = `
        Whatsapp Chat Box v${packageJson.version}
        Copyright (c) ${new Date().getFullYear()}
        License: MIT
      `;
      return bannerText;
    }),
  ],
  optimization: {
    minimizer: [
      new TerserPlugin({
        extractComments: false,
      }),
    ],
  },
};
