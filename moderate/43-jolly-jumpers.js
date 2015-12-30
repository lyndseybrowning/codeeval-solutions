//https://www.codeeval.com/open_challenges/43/

var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    line = line.trim();
	if (line !== "") {
        var spl = line.split(" "),
        	arr = [],
        	n = 0,
        	isJolly = true;

        for(var i=0, l=spl.length; i<l; i++) {
        	var integer = parseInt(spl[i]);
        	var next = parseInt(spl[i+1]);

        	if(integer > n) {
        		n = integer;
        	}

        	if(!isNaN(next)) {
                var sum = (next > integer) ? next-integer : integer-next;
        		arr.push(sum);
        	}
        }
        for(var x=1; x<spl.length-1; x++) {
        	if(-1 === arr.indexOf(x)) {
        		isJolly = false;
        		break;
        	}
        }
        console.log(isJolly ? "Jolly" : "Not jolly");
    }
});
