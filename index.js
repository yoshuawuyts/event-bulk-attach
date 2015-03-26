const EventEmitter = require('events').EventEmitter
const assert = require('assert')

module.exports = register

// register all callbacks in
// an object to the emitter
// register(Object:emitter?, Object:obj) -> Object
function register (emitter, obj) {
  if (!obj) {
    obj = emitter
    emitter = new EventEmitter()
  }
  assert.equal(typeof obj, 'object')

  Object.keys(obj).forEach(function (event) {
    var arr = obj[event]
    arr = Array.isArray(arr) ? arr : [arr]

    arr.forEach(function (fn) {
      emitter.on(event, fn)
    })
  })

  return emitter
}
