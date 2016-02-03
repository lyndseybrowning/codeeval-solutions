// https://www.codeeval.com/open_challenges/18/

var fs  = require("fs");
fs.readFileSync('test.txt').toString().split('\n').forEach(function (line) {
    if (line !== '') {
      line = line.split(',');

      var multiplesOf = function(x, n) {
        return (x % n === 0) ? x : multiplesOf(++x, n);
      };

      console.log(multiplesOf(line[0], line[1]));
    }
});
