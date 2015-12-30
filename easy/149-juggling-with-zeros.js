//https://www.codeeval.com/open_challenges/149/

var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
    	var item = line.split(" ");
    	var binary = "";

    	for(var i = 0, l = item.length; i<l; i+=2) {
    		var sequence = item[i],
    			nextElement = item[i+1];
    		binary += (sequence === "0") ? nextElement : nextElement.replace(/[0]/g, '1');
    	}
    	console.log(parseInt(binary,2));
    }
});
