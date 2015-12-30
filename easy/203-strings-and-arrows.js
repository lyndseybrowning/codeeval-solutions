//https://www.codeeval.com/open_challenges/203/
var fs = require("fs"),
    arrowL = "<--<<",
    arrowR = ">>-->";

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if(line !== "") {
        var item,
            i = 0,
            len = line.length-4,
            strItem,
            count = 0,
            str = line;

        line = line.split("");

        for(i; i<len; i++) {
            item = line[i];
            strItem = item + str.substring(i+1, i+5);
            count += (strItem === arrowL || strItem === arrowR) ? 1 : 0;
        }

        console.log(count);
    }
});
