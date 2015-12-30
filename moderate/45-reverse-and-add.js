//https://www.codeeval.com/open_challenges/45/

var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
    	var reverse = function(s) {
    		var len = s.length-1,
				o = '';
			for(len; len>=0; len--) {
				o+= s[len];
			}
			return o;
    	},
    	getPalindrome = function(counter, line) {
			var num = +(line),
				reversal = +(reverse(line)),
				total = num + reversal;

			if(num === reversal) {
				return counter + " " + num;
			}
			return getPalindrome(counter+=1, ""+total);
		};
    	console.log(getPalindrome(0,line));
    }
});
