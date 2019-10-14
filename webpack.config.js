const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: path.join(__dirname, 'src/index.tsx'),
  output: {
    filename: '[name].[hash].js',
    path: __dirname
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: 'src/index.html',
    })
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
};
