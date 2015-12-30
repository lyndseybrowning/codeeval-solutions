//https://www.codeeval.com/open_challenges/62/
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    var sp = line.split(","),
    		n = Number(sp[0]),
    		m = Number(sp[1]),
    		mod = function(n, m) {
    			return n - (Math.floor(n / m) * m);
    		};

    	console.log(mod(n,m));
});
