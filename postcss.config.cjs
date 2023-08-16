const nested = require("postcss-nested")
const postCssPresetEnv = require("postcss-preset-env")
const customMedia = require("postcss-custom-media")
const autoprefixer = require("autoprefixer")
const mixins = require("postcss-mixins")

module.exports = {
  plugins:[
    nested(),
    autoprefixer(),
    postCssPresetEnv(),
    customMedia({}),
    mixins({})
  ]
}