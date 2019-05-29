const resolveTSPathsToAlias = require('ts-paths-to-alias-core')

function resolveTSPathsToBabelAlias(options) {

  return resolveTSPathsToAlias({
    configFile: options.configFile,
    context: options.context,
  })

}

module.exports = resolveTSPathsToBabelAlias
