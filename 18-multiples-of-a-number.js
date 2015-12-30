//https://www.codeeval.com/open_challenges/18/
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        line = line.split(',');
        var x = parseInt(line[0]),
            n = line[1];

        while(x % n !== 0) {
            x+=1;
        }
        console.log(x);
    }
});
