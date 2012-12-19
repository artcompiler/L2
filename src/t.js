var parse = function(src) {
    var stream = new GraffitiCode.StringStream(src)
    var state = GraffitiCode.parser.startState()
    var next = function () {
	return GraffitiCode.parser.parse(stream, state)
    }
    while (stream.peek() !== void 0) {
	next()
    }
}
