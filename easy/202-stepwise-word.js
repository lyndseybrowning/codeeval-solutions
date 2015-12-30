//https://www.codeeval.com/open_challenges/202/

var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        line = line.trim();

        var spl = line.split(" "), i = 0, len = 0, longest = "", x = 0, out = "",
            repeat = function(n) {
                if(n === len) {
                    return "";
                }
                    var i = 0,
                        repeater = [];

                    while(i < n) {
                        repeater.push("*");
                        i++;
                    }
                return repeater.join("");
            };

        while(i < spl.length) {
            if(spl[i].length > len) {
                longest = spl[i];
                len = spl[i].length;
            }
            i++;
        }

        for(x; x<len; x++) {
            out += longest[x] + " " + repeat(x+1);
        }

        console.log(out);
    }
});
