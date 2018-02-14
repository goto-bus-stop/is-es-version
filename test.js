var test = require('tape')
var isESVersion = require('./')

test('Returns true for correct syntax', function (t) {
  t.equal(isESVersion('var a = 0', 5), true)
  t.equal(isESVersion('const a = 0', 6), true)
  t.equal(isESVersion('async function a () {}', 8), true)
  t.end()
})

test('Returns false for incorrect syntax', function (t) {
  t.equal(isESVersion('const a = 0', 5), false)
  t.equal(isESVersion('async function a () {}', 7), false)
  t.equal(isESVersion('var b = { ...a }', 8), false)
  t.end()
})

test('Defaults to ES5', function (t) {
  t.equal(isESVersion('var a = 0'), true)
  t.equal(isESVersion('const a = 0'), false)
  t.end()
})
