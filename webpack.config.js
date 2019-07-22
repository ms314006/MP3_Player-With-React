const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: ['./src/index.tsx'],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  output: {
    filename: 'dist/bundle.js',
    path: path.resolve(__dirname, './'),
  },
  module: {
    rules: [
      {
        test: /.ts$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/typescript', '@babel/preset-env'],
          },
        },
      },
      {
        test: /.tsx$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/typescript', '@babel/preset-react', '@babel/preset-env'],
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoader: 1,
              localIdentName: '[path]___[name]__[local]___[hash:base64:5]',
            },
          }
        ],
      },
      {
        test: /\.(scss|sass)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoader: 1,
              localIdentName: '[path]___[name]__[local]___[hash:base64:5]',
            },
          },
          {
            loader: 'sass-loader',
          }
        ],
      }
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: true ? './dist/[name].css' : './dist/[name].[hash].css',
    })
  ],
  devServer: {
    port: 8080,
  },
};
