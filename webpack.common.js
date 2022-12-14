const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: { main: './src/index.ts' },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'messenger.bundle.js',
  },
  resolve: {
    extensions: ['.ts', '.js', '.json'],
    fallback: {
      fs: false,
    },
    alias: {
      core: path.resolve(__dirname, 'src/core'),
      pages: path.resolve(__dirname, 'src/pages'),
      components: path.resolve(__dirname, 'src/components'),
      img: path.resolve(__dirname, 'public/image'),
      routes: path.resolve(__dirname, 'src/routes'),
      types: path.resolve(__dirname, 'src/types'),
      vendor: path.resolve(__dirname, 'src/vendor'),
      variables: path.resolve(__dirname, 'src/variables'),
      utils: path.resolve(__dirname, 'src/utils'),
      styles: path.resolve(__dirname, 'src/styles'),
      api: path.resolve(__dirname, 'src/api'),
      services: path.resolve(__dirname, 'src/services'),
      handlebars: 'handlebars/dist/handlebars.js'
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              configFile: path.resolve(__dirname, 'tsconfig.json'),
            },
          },
        ],
        exclude: /(node_modules)/,
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|svg|jpg|gif|woff(2)?|eot|ttf|otf)$/,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new CleanWebpackPlugin()
  ],
};
