//https://www.codeeval.com/open_challenges/124/

var fs  = require("fs");
var rep = /[a-z, ]/gi;

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        line = line.substring(0, line.length-1);
        line = line.replace(rep, '');

        var spl = line.split(';'),
            arr = spl.sort(function(a,b) { return a-b; }),
            output='';

        for(var i = 0, l = arr.length; i<l; i++) {
            var num = parseInt(arr[i]),
                last = arr.length-1;

            output+= (i === 0) ? num : num-arr[i-1];
            output+= (i < last) ? ',' : '';
        }
        console.log(output);
    }
});
