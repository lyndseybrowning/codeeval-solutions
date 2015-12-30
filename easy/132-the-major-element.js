//https://www.codeeval.com/open_challenges/132/

var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        var spl = line.split(','),
        obj = {},
        len = 0,
        output = 'None';

        for(var i = 0, l=spl.length; i<l; i++) {
            len+=1;
            var n = spl[i];
            obj[n] = (!obj.hasOwnProperty(n)) ? 1 : obj[n]+1;
        }

        for(var x in obj) {
            if (obj[x] > (len/2)) {
               output = x;
            }
        }

        console.log(output);
    }
});
