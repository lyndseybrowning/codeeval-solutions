//https://www.codeeval.com/open_challenges/196/

var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        line = line.split(" ");

        var len = line.length,
            output = [];

        for(var i=0; i<len; i++) {
            var item = line[i];
            output.push(item[item.length-1] + item.substring(1, item.length-1) + item[0]);
        }
        console.log(output.join(" "));
    }
});
