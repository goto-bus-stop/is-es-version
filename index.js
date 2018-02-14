var acorn = require('acorn')

module.exports = function isESVersion (src, version, opts) {
  if (!version) version = 5
  if (!opts) opts = {}
  if (typeof src !== 'string' && !Buffer.isBuffer(src)) {
    throw new TypeError('is-es-version: src must be a string or a Buffer')
  }

  var parser = opts.parser || acorn

  try {
    parser.parse(src, { ecmaVersion: version })
    return true
  } catch (err) {
    return false
  }
}
