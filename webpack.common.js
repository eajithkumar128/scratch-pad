const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");


module.exports = {
  entry: {
    app: "./src/index.js",
  },
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "public"),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  [
                    "postcss-preset-env",
                    {
                      // Options
                    },
                  ],
                ],
              },
            },
          },
        ],
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      // {
      //   test: /\.(png|svg|jpg|gif)$/,
      //   use: [
      //       'file-loader'
      //   ]
      // },
      // {
      //   test: /\.html$/,
      //   use: [
      //       {
      //           loader: "html-loader"
      //       }
      //   ]
      // },
    ],
  },
  plugins: [new MiniCssExtractPlugin()],
};
