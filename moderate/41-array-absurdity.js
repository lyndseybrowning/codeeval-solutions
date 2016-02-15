// https://www.codeeval.com/open_challenges/41/

var fs  = require('fs');
fs.readFileSync('test.txt').toString().split('\n').forEach(function (line) {
	if (line !== '') {
    var getArray = function(str, separator, index) {
      var arr = str.split(separator);

      if(typeof index !== 'undefined') {
        return arr[index];
      }
      return arr;
    };

    var findDuplicate = function(arr) {
      var digits = getArray(arr, ','),
          duplicated = [],
          duplicatedDigit;

      digits.some(function(digit, index) {

        if(duplicated.indexOf(digit) === -1) {
          duplicated.push(digit);
        } else {
          duplicatedDigit = digit;
          return;
        }
      });

      return duplicatedDigit;
    };

    console.log(findDuplicate(getArray(line, ';', 1)));
  }
});
