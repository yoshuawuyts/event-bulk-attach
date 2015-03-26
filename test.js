const EventEmitter = require('events').EventEmitter
const test = require('tape')
const attach = require('./')

test('assert input', function (t) {
  t.plan(2)
  t.throws(attach.bind(), 'no args')
  t.throws(attach.bind(null, 1), 'wrong type')
})

test('bulk attaches listeners', function (t) {
  t.plan(2)
  const events = {
    foo: [function () {t.ok(true, 'foo called')}],
    bar: function () {t.ok(true, 'bar called')}
  }
  const emitter = attach(new EventEmitter(), events)
  emitter.emit('foo')
  emitter.emit('bar')
})

test('should create a default emitter', function (t) {
  t.plan(1)
  const emitter = attach({
    bar: function () {t.ok(true, 'bar called')}
  })
  emitter.emit('bar')
})
