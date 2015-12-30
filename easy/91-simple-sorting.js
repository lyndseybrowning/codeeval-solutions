//https://www.codeeval.com/open_challenges/91/
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if(line !== '') {
        line = line.split(' ');
        line = line.sort(function(a,b) { return a-b; });
	    console.log(line.join(' '));
	}
});
