let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

let cssLoader = (extra) => {
  let loaders = [
    {
      loader: MiniCssExtractPlugin.loader,
    },
    'css-loader',
    'postcss-loader',
    'group-css-media-queries-loader',
  ];
  if (extra) loaders.push(extra);
  return loaders;
};




module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: {
    main: './scripts/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'script/[name].[hash].js',
    clean: true,
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist/'),
    },
    port: 4000,
    open: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.pug'
    }),
    new MiniCssExtractPlugin({
      filename: 'style/[name].[hash].css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader',
      },
      {
        test: /\.css$/i,
        use: cssLoader(),
      },
      {
        test: /\.s[ac]ss$/i,
        use: cssLoader('sass-loader'),
      },
      {
        test: /\.(png|jpg|svg|gif|jpeg)$/,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name][ext][query]',
        },
      },
      {
        test: /\.(ttf|woff|woff2|eot)$/,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext][query]',
        },
      },
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
    ],
  },
};
