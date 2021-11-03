const path = require('path')

module.exports = {
  modules: [path.join(__dirname, '..', 'src'), path.join(__dirname, '..', 'node_modules')],
  extensions: ['.js'],
  alias: {
    _modules: path.resolve(__dirname, '..', 'src/modules/'),
    _components: path.resolve(__dirname, '..', 'src/components/'),
    _config: path.resolve(__dirname, '..', 'src/config/'),
    _services: path.resolve(__dirname, '..', 'src/services/'),
    _views: path.resolve(__dirname, '..', 'src/views/'),
    _utils: path.resolve(__dirname, '..', 'src/utils/'),
    _styles: path.resolve(__dirname, '..', 'src/styles/'),
    _assets: path.resolve(__dirname, '..', 'src/assets/'),
    _hocs: path.resolve(__dirname, '..', 'src/hocs/'),
    _middlewares: path.resolve(__dirname, '..', 'src/middlewares/'),
    _privateDependencies: path.resolve(__dirname, '..', 'private-dependencies/'),
  },
}
