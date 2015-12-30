//https://www.codeeval.com/open_challenges/24/
var fs  = require("fs");
var total = 0;

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    total += (+line);
});

console.log(total);
