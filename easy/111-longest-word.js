//https://www.codeeval.com/open_challenges/111/
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== "") {
    line = line.split(' ');

    var longest = 0, w = '', cur;

    for(var i=0, len = line.length; i<len;i++) {
        cur = line[i];
    	if(cur.length > longest) {
    		w = cur;
    		longest = cur.length;
    	}
    }
    console.log(w);
  }
});
