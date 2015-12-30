//https://www.codeeval.com/open_challenges/26/
var fs  = require("fs");
fs.stat(process.argv[2], function(e, s){
	console.log(s.size);
});
