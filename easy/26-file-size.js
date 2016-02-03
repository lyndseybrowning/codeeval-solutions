// https://www.codeeval.com/open_challenges/26/

var fs  = require('fs');
var getFileSize = function(e, file) {
 	console.log(file.size);
};

fs.stat('test.txt', getFileSize);
