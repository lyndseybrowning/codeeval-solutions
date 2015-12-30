//https://www.codeeval.com/open_challenges/39/
var t, values = [];

function getHappy(n) {
    t = 0;

    for(var i=0, len = n.length; i<len;i++) {
        var item = n[i];
        t+=Math.pow(item,2);
    }

    if(t === 1) {
        console.log('1');
    } else if(values.indexOf(t) !== -1) {
        console.log('0');
    } else {
        values.push(t);
        getHappy(t.toString());
    }
}

var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        values = [];
        getHappy(line);
    }

});
