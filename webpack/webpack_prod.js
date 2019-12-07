const path = require('path');
const autoprefixer = require('autoprefixer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const PATHS = {
  src: path.resolve(__dirname, '..', 'src'),
  dist: path.resolve(__dirname, '..', 'dist'),
};

let htmlMinifyOptions = {
  collapseWhitespace: true,
  html5: true,
  minifyCSS: true,
  removeComments: true,
  removeEmptyAttributes: true,
};

module.exports = () => ({
  entry: `${PATHS.src}/index.js`,
  output: {
    path: PATHS.dist,
    filename: 'js/bundle.[hash].js',
    publicPath: './',
  },
  module: {
    rules: [
      {
        test: /\.js|.jsx?$/,
        exclude: /(node_modules)/,
        loaders: ['babel-loader'],
      },
      // {
      //   test: /\.scss$/,
      //   use: [
      //     MiniCssExtractPlugin.loader,
      //     {
      //       loader: 'css-loader',
      //     },
      //     {
      //       loader: 'postcss-loader',
      //       options: {
      //         config: {
      //           path: 'postcss.config.js',
      //         },
      //         plugins: [
      //           autoprefixer({
      //             browsers: ['ie > 9', 'last 3 version'],
      //           }),
      //         ],
      //       },
      //     },
      //     'sass-loader',
      //   ],
      //   exclude: /(node_modules)/,
      // },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          // 'postcss-loader',
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'bundle.[hash].css',
      publicPath: './',
    }),
    new HtmlWebpackPlugin({
      template: `${PATHS.src}/index.html`,
      minify: htmlMinifyOptions,
    }),
  ],
  resolve: {
    modules: ['node_modules', path.resolve(__dirname, '..', 'src')],
    extensions: ['.js', '.json', '.jsx', '.css'],
  },
});