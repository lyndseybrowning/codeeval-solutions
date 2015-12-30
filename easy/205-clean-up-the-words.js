//https://www.codeeval.com/open_challenges/205/

var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        console.log(line.toLowerCase().split(/[^a-z]/).filter(function(i) { return i; }).join(" "));
    }
});
