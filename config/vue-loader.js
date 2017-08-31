

module.exports = function () {
  const loaders = {
    css: 'vue-style-loader!css-loader',
    scss: 'vue-style-loader!postcss-loader!sass-loader',
    less: 'vue-style-loader!css-loader!postcss-loader!less-loader',
  };
  return {
    loaders,
    postcss: [
      require('autoprefixer')({
        browsers: ['last 20 versions', 'safari 5', 'opera 12.1', 'ios 7', 'android 4', '> 10%']
      }),
    ]
  }
};
