//https://www.codeeval.com/open_challenges/93/
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
    	line = line.split(' ');
    	var o = '', item, item0;
    	for(var i=0, len = line.length;i<len;i++) {
    		 item = line[i],
    		 item0 = item[0];
    		o+=item0.toUpperCase() + item.replace(item0, '') + ' ';
    	}
    	console.log(o);
    }
});
