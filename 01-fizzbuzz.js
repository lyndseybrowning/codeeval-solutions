//https://www.codeeval.com/open_challenges/1/
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        var sp = line.split(" "),
        	x = sp[0],
        	y = sp[1],
        	t = sp[2],
        	i, o = '';
        for(i=1;i<=t;i+=1) {
        	o+= (i % x === 0 && i % y === 0) ? 'FB' : (i % x === 0) ? 'F' : (i % y === 0) ? 'B' : i;
        	o+= (i < t) ? ' ' : '';
        }
        console.log(o);
    }
});
