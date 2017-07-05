const path = require('path')
const webpack = require('webpack')
const vueConfig = require('./vue-loader.config')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const isProd = process.env.NODE_ENV === 'production'

let plugins = isProd ? [
  new webpack.optimize.UglifyJsPlugin({
    compress: { warnings: false }
  }),
  new ExtractTextPlugin({
    filename: 'common.[chunkhash].css'
  })
] : [
  new FriendlyErrorsPlugin()
]

// 如果是分析模式再加入分析插件
if (process.env.ANALYZ) plugins.push(
  new BundleAnalyzerPlugin({
    analyzerMode: 'server',
    analyzerHost: '0.0.0.0',
    analyzerPort: 8181,
    reportFilename: 'report.html',
    defaultSizes: 'parsed',
    openAnalyzer: true,
    generateStatsFile: false,
    statsFilename: 'stats.json',
    statsOptions: null,
    logLevel: 'info'
  })
)

module.exports = {
  devtool: isProd
    ? false
    : '#cheap-module-source-map',
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/dist/',
    filename: '[name].[chunkhash].js'
  },
  resolve: {
    alias: {
      'public': path.resolve(__dirname, '../public'),
      'components': path.resolve(__dirname, '../src/components'),
      'store': path.resolve(__dirname, '../src/store'),
      'views': path.resolve(__dirname, '../src/views')
    }
  },
  module: {
    noParse: /es6-promise\.js$/, // avoid webpack shimming process
    rules: [
      {
        test: /\.vue$/,
        loader: 'eslint-loader',
        include: path.resolve(__dirname, '../'),
        exclude: /node_modules/,
        enforce: 'pre'
      },
      {
        test: /\.js$/,
        loader: 'eslint-loader',
        include: path.resolve(__dirname, '../'),
        exclude: [/node_modules/, /static/, /public/],
        enforce: 'pre'
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: '[name].[ext]?[hash]'
        }
      },
      {
        test: /\.css$/,
        use: isProd
          ? ExtractTextPlugin.extract({
              use: 'css-loader?minimize',
              fallback: 'vue-style-loader'
            })
          : ['vue-style-loader', 'css-loader']
      },
      {
        test: /\.styl$/,
        loader: ['css-loader', 'stylus-loader', 'postcss-loader'],
      }
    ]
  },
  performance: {
    maxEntrypointSize: 300000,
    hints: isProd ? 'warning' : false
  },
  plugins
}
