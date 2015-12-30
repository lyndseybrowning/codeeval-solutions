//https://www.codeeval.com/open_challenges/107/

var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {

    	var i = 0,
    		curElements = [],
    		len = line.length,
    		output = [];

    	for(i;i<len;i++) {
    		var item = line[i],
    			pos = curElements.indexOf(item);

    		if(pos !== -1 && (curElements.join("").toString() === line.slice(i, (i+curElements.length)).toString())) {

				output = curElements.slice(pos, i);
				break;
    		}
			curElements.push(line[i]);
    	}
    	console.log(output.length === 0 ? line.length : output.length);
    }
});
