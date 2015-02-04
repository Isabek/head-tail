var through = require("through");

var headCounter = 1;

function headStream(linesQuantity) {

    linesQuantity = Math.abs(linesQuantity || 1);

    return through(function (line) {
        if (headCounter > linesQuantity) return;
        headCounter++;
        this.queue(line);
    });
}

module.exports = headStream;
