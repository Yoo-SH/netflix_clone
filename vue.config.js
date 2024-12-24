const { defineConfig } = require('@vue/cli-service');
const TerserPlugin = require('terser-webpack-plugin'); // TerserPlugin import

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/netflix_clone/'
    : '/',
  configureWebpack: {
    optimization: {
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            compress: {
              drop_console: false, // 콘솔 제거 방지 설정
            },
          },
        }),
      ],
    },
  },
});
