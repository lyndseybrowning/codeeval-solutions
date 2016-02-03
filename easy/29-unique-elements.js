// https://www.codeeval.com/open_challenges/29/

var fs  = require('fs');
fs.readFileSync('test.txt').toString().split('\n').forEach(function (line) {
	if (line !== '') {
		var getArray = function(str, separator) {
			return str.split(separator);
		};

		var elements = getArray(line, ',');
		var uniqueElements = elements.filter(function(item, i) {
			return item !== elements[i - 1];
		});

		console.log(uniqueElements.join(','));
	}
});
