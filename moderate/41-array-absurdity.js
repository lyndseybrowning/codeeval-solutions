//https://www.codeeval.com/open_challenges/41/

var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
   line = line.trim();
	if (line !== "") {
        var arr = [],
            numbers = line.split(";")[1].split(","),
            duplicate;

        for(var i = 0, l = numbers.length; i<l; i++) {
            var num = numbers[i];
            if(-1 !== arr.indexOf(num)) {
            	duplicate = num;
            	break;
            }
            arr.push(num);
        }
        console.log(duplicate);
    }
});
