// https://www.codeeval.com/open_challenges/12/

var fs  = require('fs');
fs.readFileSync('test.txt').toString().split('\n').forEach(function (line) {
  if (line !== '') {
    var getArray = function(str) {
      return str.split('');
    };

    var removeFromArray = function(arr, index) {
      return arr.splice(index, 1);
    };

    var arrayCount = function(arr, char) {
      return arr.filter(function(item, index) {
        return item === char;
      }).length;
    };

    var firstNonRepeatChar = function(chars) {
      var first = '';

      chars.some(function(char, index) {
        first = char;
        return arrayCount(chars, char) === 1;
      });

      return first;
    };

    console.log(firstNonRepeatChar(getArray(line)));
  }
});
