//https://www.codeeval.com/open_challenges/29/
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
	if (line !== '') {
		var found = [];

	    line = line.split(',');

		for (var i = 0, l = line.length; i < l; i++) {
			var num = line[i];

			if (found.indexOf(num) === -1) {
				found.push(num);
			}
		}
		console.log(found.join());
	}
});
