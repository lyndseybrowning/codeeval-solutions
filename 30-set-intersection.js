//https://www.codeeval.com/open_challenges/30/
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
   if (line !== "") {
        line = line.split(';');
        var	left = line[0].split(','),
        	right = line[1],
        	inter = '';

        for(var i = 0, l=left.length; i<l; i++) {
        	var num = left[i];
        	if(right.indexOf(num) !== -1) {
        		inter+=','+num;
        	}
        }
        console.log(inter.substring(1));
    }
});
