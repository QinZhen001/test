const LessPluginAutoPrefix = require('less-plugin-autoprefix');
const path = require('path');
var prod = process.env.NODE_ENV === 'production';

module.exports = {
  wpyExt: '.wpy',
  eslint: true,
  cliLogs: !prod,
  compilers: {
    less: {
      compress: true,
      plugins: [new LessPluginAutoPrefix({ browsers: ['Android >= 4.3', 'iOS >= 8'] })]
    },
    /*sass: {
      outputStyle: 'compressed'
    },*/
    babel: {
      sourceMap: true,
      presets: [
        'env'
      ],
      plugins: [
        // 'babel-plugin-transform-class-properties',
        'transform-export-extensions',
        'transform-class-properties',
        'transform-decorators-legacy',
        'transform-object-rest-spread',
        'syntax-export-extensions'
      ]
    }
  },
  plugins: {},
  resolve: {
    alias: {
      '@': path.join(__dirname, 'src')
    },
    modules: ['node_modules']
  },
  appConfig: {
    noPromiseAPI: ['createSelectorQuery']
  }
};

if (prod) {

  module.exports.cliLogs = false;

  delete module.exports.compilers.babel.sourcesMap;
  // 压缩sass
  // module.exports.compilers['sass'] = {outputStyle: 'compressed'}

  // 压缩less
  module.exports.compilers['less'] = {
    compress: true,
    plugins: [new LessPluginAutoPrefix({ browsers: ['Android >= 4.3', 'iOS >= 8'] })]
  };

  // 压缩js
  module.exports.plugins = {
    uglifyjs: {
      filter: /\.js$/,
      config: {}
    },
    imagemin: {
      filter: /\.(jpg|png|jpeg)$/,
      config: {
        jpg: {
          quality: 80
        },
        png: {
          quality: 80
        }
      }
    }
  };
}
