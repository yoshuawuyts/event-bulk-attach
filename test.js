const EventEmitter = require('events').EventEmitter
const test = require('tape')
const index = require('./')

test('assert input', function (t) {
  t.plan(2)
  t.throws(index.bind(), 'no args')
  t.throws(index.bind(null, 1), 'wrong type')
})

test('bulk attaches listeners', function (t) {
  t.plan(2)
  const events = {
    foo: [function () {t.ok(true, 'foo called')}],
    bar: function () {t.ok(true, 'bar called')}
  }
  const emitter = index(new EventEmitter(), events)
  emitter.emit('foo')
  emitter.emit('bar')
})

test('should create a default emitter', function (t) {
  t.plan(1)
  const emitter = index({
    bar: function () {t.ok(true, 'bar called')}
  })
  emitter.emit('bar')
})
