const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  mode: 'production',
  entry: [
    './build/media_source/system/js/fields/pagebuilder/pagebuilder.js'
  ],
  output: {
    path: path.resolve(__dirname, './media/system/js/fields/pagebuilder'),
    filename: 'pagebuilder.min.js',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
  ],
  performance: {
    hints: false
  },
  devtool: 'eval-source-map',
};
