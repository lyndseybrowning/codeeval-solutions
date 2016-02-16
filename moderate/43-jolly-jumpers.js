// https://www.codeeval.com/open_challenges/43/

var fs  = require('fs');
fs.readFileSync('test.txt').toString().split('\n').forEach(function (line) {
  if(line !== '') {
    var getArray = function(str) {
      return str.split(' ').map(function(item) {
        return parseInt(item, 10);
      });
    };

    var getDifference = function(digits) {
      var differences = [],
          digitsCount = digits.length - 1;

      digits.forEach(function(digit, index) {
        if(differences.length === digitsCount) {
          return;
        }

        var nextDigit = digits[index + 1],
            difference = Math.abs(digit - nextDigit);

        differences.push(difference);
      });

      return differences;
    };

    var isJolly = function(arr) {
      var max = arr[0], // number of iterations
          digits = arr.slice(1, arr.length), // rest of the array
          differences = getDifference(digits),
          i = 1,
          isJolly = true;

      while(i < max) {
        if(differences.indexOf(i) === -1) {
          isJolly = false;
          break;
        }
        i++;
      }

      return (isJolly) ? 'Jolly' : 'Not jolly';
    };

    console.log(isJolly(getArray(line)));
  }
});
