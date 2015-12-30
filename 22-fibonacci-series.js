//https://www.codeeval.com/open_challenges/22/
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        var fnum = parseInt(line), i = (fnum===1) ? -1 : 0, num = 0;
        console.log(fib(0,1));
    }
    function fib(n,n1) {
        i++;
        if(i<line) {
            num = n1+n;
            fib(n1,num);
        }
        return num;
    }
});
