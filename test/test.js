"use strict"

var ndarray = require("ndarray")
var fill = require("ndarray-fill")
var translate = require("../translate.js")

require("tape").test("ndarray-translate", function(t) {

  var x = ndarray(new Float64Array(5), [5])
  x = fill(x, function(){ return 0 })
  x.set(2, 1)

  translate(x, [1])
  t.equals(x.get(0), 0)
  t.equals(x.get(1), 0)
  t.equals(x.get(2), 0)
  t.equals(x.get(3), 1)
  t.equals(x.get(4), 0)

  translate(x, [-2])
  t.equals(x.get(0), 0)
  t.equals(x.get(1), 1)
  t.equals(x.get(2), 0)
  t.equals(x.get(3), 0)
  t.equals(x.get(4), 0)

  translate(x, [0])
  t.equals(x.get(0), 0)
  t.equals(x.get(1), 1)
  t.equals(x.get(2), 0)
  t.equals(x.get(3), 0)
  t.equals(x.get(4), 0)

  translate(x, [10])
  t.equals(x.get(0), 0)
  t.equals(x.get(1), 0)
  t.equals(x.get(2), 0)
  t.equals(x.get(3), 0)
  t.equals(x.get(4), 0)

  t.end()
})
