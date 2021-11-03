const webpack = require('webpack')
const autoprefixer = require('autoprefixer')
const postCSSImport = require('postcss-import')
const postCSSNested = require('postcss-nested')
const postCSSCustomMedia = require('postcss-custom-media')

const media = require('./src/config/media-queries.js')

const postCSSAutoprefixer = autoprefixer({ browsers: ['IE 9', 'iOS 7'] })

const postCssImport = postCSSImport({
  addDependencyTo: webpack,
})

const postCSSCustomMediaConfig = postCSSCustomMedia({
  extensions: {
    '--sm-viewport': media.SM_VIEWPORT,
    '--md-viewport': media.MD_VIEWPORT,
    '--lg-viewport': media.LG_VIEWPORT,
    '--retina-display': media.RETINA_DISPLAY,
  },
})

module.exports = {
  plugins: [
    postCssImport,
    postCSSAutoprefixer,
    postCSSNested,
    postCSSCustomMediaConfig,
  ],
}
