var _ = require('./underscore'),
    lexicon = require('./draw-lexicon'),
    parser = require('./parse'),
    transformer = require('./transform'),
    renderer = require('./render')

var nodePool

var parse = function(src) {
    console.log("GraffitiCode="+GraffitiCode)
    console.log("StringStream="+GraffitiCode.StringStream)
    var stream = new parser.StringStream(src)
    var state = parser.startState()
    var next = function () {
	return parser.parse(stream, state)
    }
    while (state.cc != null) {
	next()
	nodePool = state.nodePool
    }
    console.log(nodePool)
}

var transform = function(nid) {
    var transformer = GraffitiCode.transformer
    return JSON.stringify(transformer(require("underscore"), nodePool).transform(nid))
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
	var t1 = new Date;
	console.log("total: " + (t1-t0) + "ms")
	console.log("scan count: " + parser.scanCount())
	console.log("scan time: " + parser.scanTime() + "ms")
	console.log("fold time: " + parser.foldTime() + "ms")
	console.log("parse count: " + parser.parseCount())
	console.log("parse time: " + parser.parseTime() + "ms")
	//transform();
	//render();
    });
});
