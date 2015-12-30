//https://www.codeeval.com/open_challenges/8/

var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== '') {
        console.log(reverse(line));
    }
});

function reverse(arg) {
    return arg.split(' ').reverse().join(' ');
}
