//https://www.codeeval.com/open_challenges/40/
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        var o = 1, item, pattern, match;
        for(var i=0, len = line.length; i<len; i++) {
            item = parseInt(line[i]);
            pattern = new RegExp( i, 'g' );
            match = (line.match(pattern) || []).length;

            if (item !== match) {
                o=0;
                break;
            }
        }
        console.log(o);
    }
});
