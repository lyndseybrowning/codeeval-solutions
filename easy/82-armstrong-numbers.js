// https://www.codeeval.com/open_challenges/82/

var fs  = require('fs');
fs.readFileSync('test.txt').toString().split('\n').forEach(function (line) {
    if (line !== '') {

      var getDigit = function(n) {
        return parseInt(n, 10);
      };

      var getDigitsArr = function(str) {
        return str.split('').map(function(item) {
          return getDigit(item);
        });
      };

      var sumOfDigits = function(digits) {
        return digits.reduce(function(prev, current) {
          return prev + Math.pow(current, digits.length);
        }, 0);
      };

      var isArmstrongNumber = function(digits, number) {
        return sumOfDigits(digits) === number;
      };

      console.log(isArmstrongNumber(getDigitsArr(line), getDigit(line)) ? 'True' : 'False');
    }
});
