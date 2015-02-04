var through = require("through");

var tailCounter = 1;

function tailStream(linesQuantity) {
    return through(function (line) {
        if (linesQuantity < tailCounter) {
            this.queue(line + "\n");
        }
        tailCounter++;
    });
}

module.exports = tailStream;