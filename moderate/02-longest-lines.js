//https://www.codeeval.com/open_challenges/2/

var fs = require("fs");
var numLines;
var lines = [];

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line,index) {
    if (line !== "") {
       if(index > 0) {
            line = line.trim();
            lines.push(line);
        }
        else {
            numLines = line;
        }
    }
});

lines = lines.sort(function(a,b) { return b.length-a.length });
for(var i = 0; i<numLines; i++) {
    console.log(lines[i]);
}
