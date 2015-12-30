//https://www.codeeval.com/open_challenges/136/

var fs  = require("fs");
var index = 0;
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    line = line.trim();
	if (line !== "") {
        var check = line.indexOf('C'),
            gate = line.indexOf('_'),
            replacer = (check !== -1) ? 'C' : '_',
            curIndex = (check !== -1) ? check : gate;

        if(index === 0 || curIndex === index) {
            line = line.replace(replacer, '|');
        } else {
            if(curIndex < index) {
                line = line.replace(replacer, '/');
            } else {
                line = line.replace(replacer, '\\');
            }
        }
        index = (check !== -1) ? check : gate;
        console.log(line);
    }
});
