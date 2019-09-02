const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
  context: `${__dirname}/src`,
  output: {
    path: `${__dirname}/dist`,
    filename: '[name].js',
  },
  entry: {
    scripts: './example.jss',
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
        devMode ? 'style-loader' : {
          loader: MiniCssExtractPlugin.loader,
        },
        'css-loader',
        'sass-loader',
      ],
    }, {
      test: /\.jpg|.png/,
      loader: 'file-loader',
    }],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles.css',
    }, { allChunks: true }),
  ],
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
      }),
    ],
  },
};
