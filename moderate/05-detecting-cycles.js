//https://www.codeeval.com/open_challenges/5/

var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
   if (line !== "") {
    	line = line.split(" ");

    	var i = 0,
    		curElements = [],
    		len = line.length,
    		output = [];

    	for(i;i<len;i++) {
    		var item = line[i],
    			pos = curElements.indexOf(item);

    		if(pos !== -1) {
    			output = curElements.slice(pos, i);
    			break;
    		}
			curElements.push(line[i]);
    	}

    	console.log(output.join(" "));
    }
});
