//https://www.codeeval.com/open_challenges/8/

var fs  = require("fs");
fs.readFileSync('test.txt').toString().split('\n').forEach(function (line) {
    if (line !== '') {
      console.log(line.split(' ').reverse().join(' '));
    }
});
