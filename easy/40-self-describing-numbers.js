// https://www.codeeval.com/open_challenges/40/

var fs  = require('fs');
fs.readFileSync('test.txt').toString().split('\n').forEach(function (line) {
  if (line !== '') {

    var getDigits = function(str) {
      return str.split('').map(function(n) {
        return parseInt(n, 10);
      });
    };

    var getInstancesOf = function(arr, index) {
      return arr.filter(function(item) {
        return item === index;
      }).length;
    };

    var selfDescribing = function(digits) {
      return digits.every(function(digit, index) {
        return getInstancesOf(digits, index) === digit;
      });
    };

    console.log(selfDescribing(getDigits(line)) ? 1 : 0);
  }
});
