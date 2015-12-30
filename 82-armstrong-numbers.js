//https://www.codeeval.com/open_challenges/82/
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        console.log(isArmstrong(line));
    }
});

function isArmstrong(n) {
    var len = n.length,
        sum = 0, num, pow;

    for(var i=0;i<len;i++) {
        num = parseInt(n[i]);
        pow = Math.pow(num,len);
        sum+=pow;
    }
    return (sum === parseInt(n) ? 'True' : 'False');
}
