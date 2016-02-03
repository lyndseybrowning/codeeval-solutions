// https://www.codeeval.com/open_challenges/21/

var fs  = require("fs");
fs.readFileSync('test.txt').toString().split('\n').forEach(function (line) {
  if (line !== '') {

    var sumOfDigits = function(digits) {
      return digits.reduce(function(prev, current) {
        return parseInt(prev, 10) + parseInt(current, 10);
      });
    };

    console.log(sumOfDigits(line.split('')));
  }
});
