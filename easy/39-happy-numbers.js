// https://www.codeeval.com/open_challenges/39/

var fs  = require('fs');
fs.readFileSync('test.txt').toString().split('\n').forEach(function (line) {
  if (line !== '') {

    var getDigits = function(str) {
      return str.split('').map(function(n) {
        return parseInt(n, 10);
      });
    };

    var sumOfDigits = function(digits) {
      return digits.reduce(function(prev, current) {
        return prev + (current * current);
      }, 0);
    };

    var sumOfSquares = function(str, exSums) {
      exSums = exSums || [];

      var sum = sumOfDigits(getDigits(str));

      if(sum === 1) {
        return 1;
      }

      if(exSums.indexOf(sum) !== -1) {
        return 0;
      } else {
        exSums.push(sum);
      }
      return sumOfSquares(sum.toString(), exSums);
    };

    console.log(sumOfSquares(line));
  }
});
