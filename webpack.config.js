const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack").container
  .ModuleFederationPlugin;
const path = require("path");

module.exports = {
  entry: "./src/index",
  mode: "development",
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 3001,
  },
  output: {
    publicPath: "http://localhost:3001/",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react", "@babel/preset-typescript"],
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "hello_world_remote",
      library: { type: "var", name: "hello_world_remote" },
      remotes: {},
       filename: "remoteEntry.js",
      exposes: {
        "./HelloComponent": "./src/components/HelloComponent",
        // "./routes": "./src/routes/routes",
      },
      shared: {
      //   react: {
      //     singleton: true,
      //     strictVersion: true,
      //     requiredVersion: "16.11.0"
      // },
      // 'react-dom': {
      //     singleton: true,       
      //     strictVersion: true,
      //     requiredVersion: "16.11.0"
      // },
    },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};