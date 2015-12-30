//https://www.codeeval.com/open_challenges/32/

var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        line = line.split(',');
        console.log(line[0].substring(line[0].length-line[line.length-1].length) === line[line.length-1] ? "1" : "0");
    }
});
