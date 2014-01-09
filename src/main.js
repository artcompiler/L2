/* -*- Mode: js; js-indent-level: 2; indent-tabs-mode: nil; tab-width: 2 -*- */
/* vim: set shiftwidth=2 tabstop=2 autoindent cindent expandtab: */
/*
 * Copyright 2014, Art Compiler LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var _ = require('./underscore'),
lexicon = require('./draw-lexicon'),
parser = require('./parse'),
transformer = require('./transform'),
renderer = require('./render')

var nodePool
var nodeStack

var parse = function(src) {
  var stream = new parser.StringStream(src)
  var state = parser.startState()
  var next = function () {
	  return parser.parse(stream, state)
  }
  while (state.cc != null) {
	  next()
	  nodePool = state.nodePool
	  nodeStack = state.nodeStack
  }
  console.log(nodePool)
  console.log(state.nodeStack)
}

var transform = function(nid) {
  var transformer = require("./transform")
  return transformer.transform(nid)
}

var render = function(node) {
  var renderer = require("./render")
  return renderer.render(node)
}

process.argv.forEach(function (val, index, array) {
  if (index < 2) return

  console.log(index + ': ' + val);
  fs = require('fs')
  fs.readFile(val, 'utf8', function (err,data) {
	  if (err) {
	    return console.log(err);
	  }
	  var t0 = new Date;
	  parse(data);
    nodePool.root = (nodePool.length-1)
	  var t1 = new Date;
	  console.log(nodePool)
	  var objAst = transform(nodePool);
	  console.log(JSON.stringify(objAst))
	  var objSrc = render(objAst);
	  console.log(objSrc)
	  console.log("total: " + (t1-t0) + "ms")
	  console.log("scan count: " + parser.scanCount())
	  console.log("scan time: " + parser.scanTime() + "ms")
	  console.log("fold time: " + parser.foldTime() + "ms")
	  console.log("parse count: " + parser.parseCount())
	  console.log("parse time: " + parser.parseTime() + "ms")
  });
});
