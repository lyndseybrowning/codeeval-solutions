//https://www.codeeval.com/open_challenges/9/

var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
    	var items = line.split(" "),
    		output = "";

    	for(var i = items.length;i>0;i-=2) {
    		output+= items[i-1] + " ";
    	}

    	console.log(output);
    }
});
