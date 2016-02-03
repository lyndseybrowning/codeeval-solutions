// https://www.codeeval.com/open_challenges/19/

var fs  = require("fs");
fs.readFileSync('test.txt').toString().split('\n').forEach(function (line) {
    if (line !== '') {
        line = line.split(',');

        var decToBinary = function(n) {
          return n.toString(2);
        };

        var getBit = function(bits, position) {
          return bits[bits.length - position];
        };

        var binaryStr = decToBinary(+line[0]);

        console.log(getBit(binaryStr, line[1]) === getBit(binaryStr, line[2]) ? 'true' : 'false');
    }
});
