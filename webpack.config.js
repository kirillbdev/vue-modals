let path = require('path');

const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  entry: {
    'vue-modals': './src/js/index.js'
  },
  output: {
      filename: '[name].min.js',
      path: path.resolve(__dirname, 'dist/js')
  },
  plugins: [
    new VueLoaderPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  }
};