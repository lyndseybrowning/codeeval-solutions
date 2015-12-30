//https://www.codeeval.com/open_challenges/96/
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    line = line.split('');
    line = line.map(function(i) {
    	return (i === i.toLowerCase()) ? i.toUpperCase() : i.toLowerCase();
    });
    console.log(line.join(''));
});
