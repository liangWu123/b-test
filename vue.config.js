module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/b-test/' : '/',

  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
};
