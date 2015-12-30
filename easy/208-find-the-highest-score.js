//https://www.codeeval.com/open_challenges/208/
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        line = line.split("|");

        var item, num, arr = [];

        for(var i = 0, len = line.length; i<len; i++) {
            item = line[i];
            item = item.trim();
            item = item.split(" ");

            for(var x = 0, iLen = item.length; x < iLen; x++) {
                if(arr.length < iLen) {
                	arr.push([]);
                }
                num = item[x];
                arr[x][i] = num;
            }
        }

        var totals = [];
        arr.forEach(function(inner) {
            totals.push(Math.max.apply(Math, inner));
        });

        console.log(totals.join(" "));
    }
});
