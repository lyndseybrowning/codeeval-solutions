//https://www.codeeval.com/open_challenges/167/

var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
    	var x = line;
    	if(line.length>55) {
    		x = line.slice(0,40);
    		if(x.lastIndexOf(' ')!==-1) {
	    		x = x.slice(0, x.lastIndexOf(' '));
	    	}
	    	x+='... <Read More>';
    	}
    	console.log(x);
	}
});
