//https://www.codeeval.com/open_challenges/183/
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if(line !== "") {
        line = line.split(",");

        var count = -1,
            i = 0,
            len = line.length,
            item,
            numDots = 0,
            dotsLen = function(arr) {
                return arr.split("").filter(function(cell, i) {
                    return cell === "." && !isCavity(arr, i);
                }).length;
            },
            isCavity = function(item, i) {
                while(i >= 0) {
                    if(item[i] === "Y") {
                        return true;
                    }
                    i--;
                }
                return false;
            };

        for(i; i<len; i++) {
            item = line[i];

            numDots = dotsLen(item);

            if(count === -1 && numDots > -1) {
                count = numDots;
            } else if(count > -1 && numDots < count) {
                count = numDots;
            }
        }
        console.log(count);
    }
});
