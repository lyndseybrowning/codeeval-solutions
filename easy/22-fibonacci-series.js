// https://www.codeeval.com/open_challenges/22/

var fs  = require("fs");
fs.readFileSync('test.txt').toString().split('\n').forEach(function (line) {
  if (line !== '') {
    var fibonnaci = function(n) {
      if(n === 0) {
        return 0;
      }

      if(n < 2) {
        return 1;
      }

      return fibonnaci(n-1) + fibonnaci(n-2);
    };

    console.log(fibonnaci(parseInt(line, 10)));
  }
});
