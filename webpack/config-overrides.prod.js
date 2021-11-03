/* eslint-disable */
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const resolve = require('./_resolve.js')

const moduleRules = [
  {
    test: /\.js$/,
    loader: 'babel-loader',
    exclude: /node_modules/,
  },
  {
    test: /\.css$/,
    include: /node_modules/,
    use: ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: [
        {
          loader: 'css-loader',
          options: {
            modules: false,
            localIdentName: '[name]__[local]___[hash:base64:5]',
          },
        },
      ],
    }),
  },
  {
    test: /\.css$/,
    exclude: /node_modules/,
    use: ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: [
        {
          loader: 'css-loader',
          options: {
            modules: true,
            importLoaders: 2,
            localIdentName: '[name]__[local]___[hash:base64:5]',
          },
        },
        {
          loader: 'postcss-loader',
        },
      ],
    }),
  },
  {
    test: /\.(jpe?g|png|ico|gif|otf)$/i,
    loader: 'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
  },
  {
    test: /\.svg$/,
    use: [
      {
        loader: 'svg-sprite-loader',
        options: {
          symbolId: '[name]_[hash]',
          runtimeCompat: true,
        },
      },
    ],
  },
]

module.exports = config => {
  config.plugins.push(new ExtractTextPlugin('[name].[chunkhash].css'))
  config.module.rules = moduleRules
  config.resolve = resolve
}
