const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
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
      use: 'base64-inline-loader?limit=1000&name=[name].[ext]'
    }],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles.css',
    }, { allChunks: true }),
  ],
};
