//https://www.codeeval.com/open_challenges/104/
var fs  = require("fs"),
    o = { "zero" : 0, "one" : 1, "two" : 2, "three" : 3, "four" : 4,"five" : 5, "six" : 6, "seven" : 7, "eight" : 8, "nine" : 9 };

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
     if (line !== "") {
    	line = line.split(';');
    	var out='', item;

       	for(var i=0;i<line.length;i+=1) {
       		item = line[i];

      		if(o.hasOwnProperty(item)) {
      			out+=o[item];
      		}
    	}
    	console.log(out);
    }
});
