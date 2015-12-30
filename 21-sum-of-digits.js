//https://www.codeeval.com/open_challenges/21/
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
		line = line.split('');

		var i = 0, total=0, len = line.length;
		for(i;i<len;i++) {
			total+=parseInt(line[i]);
		}
		console.log(total);
	}
});
