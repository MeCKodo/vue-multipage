const vueLoaderConfig = require('./vue-loader')();
const { resolve } = require('path');

module.exports = {
  resolve: {
    alias: {
      'vue': 'vue/dist/vue.esm.js',
      components: '../../components' // 组件别名,js里引用路径可直接 'components/xxx/yyy'
    },
    extensions: ['.js', '.vue', '.scss', '.css']
  },
  output: {
    // publicPath: require('./cdn.js'),
    filename: 'js/[name].js',
    chunkFilename: 'js/[id].[hash:7].js?'
  },
  module: {
    noParse: [/vue.js/],
    rules: [
      { test: /\.js$/, use: 'babel-loader?cacheDirectory=true', exclude: /node_modules/ },
      {
        test: /\.(png|jpe?g|gif)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 5000, // 换成你想要得大小
          name: 'images/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf|svg)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 5000, // 换成你想要得大小
          name: 'fonts/[name].[hash:7].[ext]'
        }
      }, {
        test: /\.vue$/,
        loader: 'vue-loader',
        include: [resolve(__dirname, '../src')],
        options: vueLoaderConfig
      }
    ]
  },
  plugins: [],
};
