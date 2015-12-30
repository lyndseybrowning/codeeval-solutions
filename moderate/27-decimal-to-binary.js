//https://www.codeeval.com/open_challenges/27/
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        var x = parseInt(line),
            output = [];
        console.log(convert(x));
    }

    function convert(n) {
        var division = Math.floor(n/2);
        output.unshift(n%2);
        if(division > 0) {
            convert(division);
        }
        return output.join('');
    }
});
