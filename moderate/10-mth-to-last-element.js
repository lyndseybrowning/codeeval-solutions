//https://www.codeeval.com/open_challenges/10/
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
    	line = line.trim();
    	var i = line.lastIndexOf(' '), num = line.slice(i+1, line.length);

    	line = line.replace(/\s/g, '');
    	line = line.slice(0,line.length-num.length);

	  	if(num > 0 && num <= line.length) {
	    	line = line.split('').reverse().join('');
	    	console.log(line[num-1]);
    	}
    }
});
