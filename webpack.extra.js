// webpack.extra.js
const UnocssWebpack = require('@unocss/webpack').default;

module.exports = {
  plugins: [
    UnocssWebpack({
      configFile: './unocss.config.ts'
    })
  ]
};
