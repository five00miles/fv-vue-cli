const analyzer = false // 是否分析包大小

const CompressionPlugin = require('compression-webpack-plugin')
const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
  configureWebpack: (config) => {
    if (process.env.NODE_ENV === 'production') {
      if (process.env.VUE_APP_BASE_SENTRY === 'on') {
        config.devtool = 'hidden-source-map'
      } else config.devtool = false
    } else config.devtool = 'cheap-eval-source-map'

    if (analyzer) {
      config.plugins.push(new BundleAnalyzerPlugin())
    }
  },
  chainWebpack: (config) => {
    if (process.env.NODE_ENV === 'production') {
      config.plugins.delete('prefetch')
      config.plugin('preload').tap(() => [
        {
          rel: 'preload',
          as: 'font',
          fileWhitelist: [/.*\.(woff|ttf|woff2|eot|otf)$/],
          include: 'allAssets',
        },
      ])
      config
        .plugin('ScriptExtHtmlWebpackPlugin')
        .after('html')
        .use('script-ext-html-webpack-plugin', [
          {
            inline: /runtime\..*\.js$/,
          },
        ])

      // 单独提取elementui，如果使用了按需，可以删除
      config.optimization.splitChunks({
        chunks: 'all',
        cacheGroups: {
          elementUI: {
            name: 'chunk-elementUI',
            priority: 10,
            test: /[\\/]node_modules[\\/]_?element-ui(.*)/,
          },
        },
      })
      config.optimization.runtimeChunk('single')

      config.plugin('compressionPlugin').use(
        new CompressionPlugin({
          test: /\.(js|css|woff|eot)$/,
          exclude: [/node_modules/, /\.map\.js./],
          threshold: 5120,
          minRatio: 0.8,
          deleteOriginalAssets: false, // 是否删除源文件，只保留gzip
        })
      )
    }
  },
}
