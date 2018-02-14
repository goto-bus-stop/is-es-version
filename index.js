var acorn = require('acorn')

module.exports = function isESVersion (src, version) {
  if (!version) version = 5
  if (typeof src !== 'string' && !Buffer.isBuffer(src)) {
    throw new TypeError('is-es-version: src must be a string or a Buffer')
  }

  try {
    acorn.parse(src, { ecmaVersion: version })
    return true
  } catch (err) {
    return false
  }
}
