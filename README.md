# event-bulk-attach
[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Downloads][downloads-image]][downloads-url]
[![js-standard-style][standard-image]][standard-url]

Attach events to a listener in bulk. Creates an event emitter if none is
provided.

## Installation
```bash
$ npm install event-bulk-attach
```

## Usage
```js
const EventEmitter = require('events').EventEmitter
const attach = require('event-bulk-attach')

const events = {
  foo: [barFn, binFn],
  err: [errFn, blaFn],
  oii: beepFn
}

const emitter = attach(new EventEmitter(), events)

emitter.emit('foo')
// barFn & binFn are called
```

## See Also
- [event-aggregate](https://github.com/yoshuawuyts/event-aggregate) - event multiplexer

## License
[MIT](https://tldrlegal.com/license/mit-license)

[npm-image]: https://img.shields.io/npm/v/event-bulk-attach.svg?style=flat-square
[npm-url]: https://npmjs.org/package/event-bulk-attach
[travis-image]: https://img.shields.io/travis/yoshuawuyts/event-bulk-attach.svg?style=flat-square
[travis-url]: https://travis-ci.org/yoshuawuyts/event-bulk-attach
[coveralls-image]: https://img.shields.io/coveralls/yoshuawuyts/event-bulk-attach.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/yoshuawuyts/event-bulk-attach?branch=master
[downloads-image]: http://img.shields.io/npm/dm/event-bulk-attach.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/event-bulk-attach
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: https://github.com/feross/standard
