const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  resolve: {
    modules: [
      path.resolve(__dirname, './node_modules'),
      path.resolve(__dirname, '.'),
    ],
  },
  context: `${__dirname}/src`,
  output: {
    path: `${__dirname}/dist`,
    filename: '[name].js',
    libraryTarget: 'commonjs2',
  },
  entry: {
    scripts: './index.js',
    css: './style.scss',
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      resolve: {
        extensions: ['.js', '.jsx'],
      },
      use: {
        loader: 'babel-loader',
      },
    }, {
      test: /\.scss$/,
      use: [
        {
          loader: MiniCssExtractPlugin.loader,
        },
        'css-loader',
        'sass-loader',
      ],
    }, {
      test: /\.jpg|.png/,
      loader: 'file-loader',
    }, {
      test: /\.(png|woff|woff2|eot|ttf|svg)$/,
      use: 'url-loader',
    }],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles.css',
    }, { allChunks: true }),
  ],
};
