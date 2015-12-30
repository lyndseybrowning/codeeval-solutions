//https://www.codeeval.com/open_challenges/192/
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if(line !== "") {
        line = line.split(" ");

        var x = +line[0],
            y = +line[1],
            q = +line[2],
            r = +line[3],
            direction = "";

            if(r > y) {
                direction = "N";
            } else if(r < y) {
                direction = "S";
            }

            if(q > x) {
                direction += "E";
            } else if (q < x) {
                direction += "W";
            }

        console.log(direction === "" ? "here" : direction);
    }
});
