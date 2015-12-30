//https://www.codeeval.com/open_challenges/103/
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
    	line = line.replace(/\s/g, '');
    	var i, winner = 0, y = 0;

    	for(i=0;i<line.length;i+=1) {
    		var item = line[i];
    		if(line.indexOf(item) === line.lastIndexOf(item)) {
    			if(winner>parseInt(item) || winner===0) {
    				winner = parseInt(item);
    				y = i+1;
    			}
    		}
    	}
    	console.log(y);
    }
});
