//https://www.codeeval.com/open_challenges/178/

var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
   if (line !== "") {
    	line = line.replace(/[  \r]/g, "");

    	var len = Math.sqrt(line.length),
    		matrix = [],
    		i = 0,
    		n = 0;
    		output = "";

		for(i; i<len; i++) {
			matrix[i] = new Array(len);

			for(var j = 0; j<matrix[i].length; j++) {
				matrix[i][j] = line[j];
			}
			line = line.substr(j, line.length-1);
		}

		var copy = [],
			inc = len-1;

		for(var p = 0; p<len; p++) {
			for(var x = 0; x<len; x++) {
				copy.push(matrix[inc][p]);
				inc-=1;
			}
			inc = len-1;
		}
		console.log(copy.join(" "));
    }
});
