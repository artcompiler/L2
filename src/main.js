require('./underscore')
require('./parse')
require('./transform')
require('./render')

var nodePool
var parse = function(src) {
    var stream = new GraffitiCode.StringStream(src)
    var state = GraffitiCode.parser.startState()
    var next = function () {
	return GraffitiCode.parser.parse(stream, state)
    }
    while (state.cc != null) {
	next()
	nodePool = state.nodePool
    }
    if (stream.peek() !== void 0) {
	throw "characters past end of program"
    }
}

var transform = function(nid) {
    var transformer = GraffitiCode.transformer
    return JSON.stringify(transformer(require("underscore"), nodePool).transform(nid))
}
