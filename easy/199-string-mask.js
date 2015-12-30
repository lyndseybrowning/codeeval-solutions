//https://www.codeeval.com/open_challenges/199/

var fs = require("fs");
var out = function(s) {

    s = s.split(" ");

		var o = '',
			l1 = s[1],
			l0 = s[0],
			len = l1.length,
			bin, orig;

    	for(i=0; i<len; i++) {
    		bin = l1[i];
    		orig = l0[i];

    		o+= (bin == "1") ? orig.toUpperCase() : orig;
    	}
    	return o;
	};

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
    	console.log(out(line));
    }d
});
