var fs = require("fs");
var split = require("split");
var concat = require("concat-stream");

var headStream = require("./head-stream");
var tailStream = require("./tail-stream");

var filename = process.argv[2];
var head = Math.abs(process.argv[3] || 1);
var tail = Math.abs(process.argv[4] || 1);

var tailLimit = head - tail;

fs.createReadStream(filename)
    .pipe(split())
    .pipe(headStream(head))
    .pipe(tailStream(tailLimit))
    .pipe(concat(function (data) {
        console.log(data);
    }));