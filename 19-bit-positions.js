//https://www.codeeval.com/open_challenges/19/
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        line = line.split(',');
        var num = line[0],
            binaryStr = parseInt(num).toString(2),
            n1 = line[1],
            n2 = line[2],
            p1 = binaryStr[binaryStr.length-n1],
            p2 = binaryStr[binaryStr.length-n2];

        console.log((p1 === p2) ? 'true' : 'false');
    }
});
