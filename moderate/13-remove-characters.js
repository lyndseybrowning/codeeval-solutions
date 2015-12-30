//https://www.codeeval.com/open_challenges/13/
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
   if(line !== '') {
    	var spl = line.split(", "),
    		removeChars = function(s,c) {
    			var output = "",
    				i = 0;

    			while(i < s.length) {
    				if(c.indexOf(s[i]) === -1) {
    					output += s[i];
    				}
    				i++;
    			}

    			return output;
    		};

    	console.log(removeChars(spl[0], spl[1]));
    }
});
