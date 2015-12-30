//https://www.codeeval.com/open_challenges/106/

var fs = require("fs");
var romans = {
	1: "I",
	2: "II",
	3: "III",
	4: "IV",
	5: "V",
	6: "VI",
	7: "VII",
	8: "VIII",
	9: "IX",
	10: "X",
	20: "XX",
	30: "XXX",
	40: "XL",
	50: "L",
	60: "LX",
	70: "LXX",
	80: "LXXX",
	90: "XC",
	100: "C",
	200: "CC",
	300: "CCC",
	400: "CD",
	500: "D",
	600: "DC",
	700: "DCC",
	800: "DCCC",
	900: "CM",
	1e3: "M",
	2e3: "MM",
	3e3: "MMM"
};

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
    	line = line.trim();

		var len = line.length;
		var output = "";

		for(var i = 0; i<len; i++) {
		    var item = line[i] + getZeros(i, len);
		    if(line[i] !== "0") {
			    output+= romans[item];
			}
		}
		console.log(output);
    }
});

function getZeros(index, len) {
	var str = "";
	while(index+1 < len) {
	    str+="0";
	    index++;
	}
	return str;
}
