# is-es-version

check if some source code uses syntax supported by an ES version

You can use this before eg. running Babel with a million transforms on a file. Note that this attempts to parse the file using [acorn](https://github.com/acornjs/acorn), so it is pretty slow; recommended to memoize the result!

[![npm][npm-image]][npm-url]
[![travis][travis-image]][travis-url]
[![standard][standard-image]][standard-url]

[npm-image]: https://img.shields.io/npm/v/is-es-version.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/is-es-version
[travis-image]: https://img.shields.io/travis/goto-bus-stop/is-es-version.svg?style=flat-square
[travis-url]: https://travis-ci.org/goto-bus-stop/is-es-version
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: http://npm.im/standard

## Install

```
npm install is-es-version
```

## Usage

```js
var isEsVersion = require('is-es-version')

isEsVersion('const a = 10', 5) // false
isEsVersion('var a = 10', 5) // true
```

## API

### `isEsVersion(src, version=5, opts={})`

Check if `src` is a source code string that is supported by the EcmaScript version `version`. The default version is 5. Returns true if the syntax is supported by the given version; false if not.

Set `opts.parser` to use a custom parser module, such as [acorn-node](https://github.com/browserify/acorn-node).

```js
isEsVersion('#!/usr/bin/env node\nrequire("./lib/cli")', 5, { parser: require('acorn-node') })
```

## License

[Apache-2.0](LICENSE.md)
