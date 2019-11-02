#!/usr/bin/env node

var fs = require('fs')
var isEsVersion = require('./')

var version = process.argv[2]

if (!/^\d+$/.test(version)) {
  console.log('Usage: is-es-version VERSION files...')
  console.log('VERSION=3, 5..10 or 2015..2019')
  process.exit(1)
}

for (var i = 3; i < process.argv.length; i++) {
  var src = fs.readFileSync(process.argv[i])
  if (!isEsVersion(src, version)) {
    process.exit(1)
  }
}
