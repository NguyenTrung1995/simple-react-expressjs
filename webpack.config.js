const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== 'production';

const outputDirectory = 'dist';
const path = require('path');

module.exports = {
  entry: './src/client/index.js',
  output: {
    path: path.join(__dirname, outputDirectory),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|tsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          'ts-loader'
        ]
      },
      {
        test: /\.(sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg|jpe?g)$/i,
        loader: 'url-loader?limit=10000'
      },
      {
        test: /\.(png|ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        include: [path.join(__dirname, "src/assets")],
        loader: "file-loader?name=assets/[name].[ext]"
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    host: '0.0.0.0',
    port: 4000,
    historyApiFallback: true,
    // open: true,
    stats: "errors-only",
    proxy: {
      '/api': 'http://localhost:5000',
    }
  },
  plugins: [
    new CleanWebpackPlugin([outputDirectory]),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css'
    })
  ],
  mode: devMode ? 'development' : 'production'
};
