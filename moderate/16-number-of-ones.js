//https://www.codeeval.com/open_challenges/16/

var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        var str = parseInt(line).toString(2), strLen = str.length, ones = str.replace(/[0]/g, '');
        console.log(ones.length);
    }
});
