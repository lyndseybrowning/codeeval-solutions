// https://www.codeeval.com/open_challenges/186/

var fs  = require('fs');
fs.readFileSync('test.txt').toString().split('\n').forEach(function (line) {
    if (line !== '') {

      var getArray = function(str, separator) {
        return str.split(separator);
      };

      var getDigitsArray = function(str, separator) {
        return str.split(separator).map(function(digit) {
          return parseInt(digit, 10);
        });
      };

      var getGain = function(figures) {
        return figures.reduce(function(prev, current) {
          return prev + current;
        }, 0);
      };

      var findBiggestGain = function(figures, numDays) {
        var biggestGain = 0;

        // loop figures until it reaches max possible index to calculate from
        figures.some(function(figure, index) {
          // get next (n) days
          var days = figures.slice(index, index + numDays),
          // sum next (n) days
              totalGain = getGain(days);

          if(totalGain > biggestGain) {
            biggestGain = totalGain;
          }

          // return if we can't go any further according to number of days
          return index === figures.length - numDays;
        });

        return biggestGain;
      };

      var arr = getArray(line, ';'),
          numDays = parseInt(arr[0], 10),
          figures = getDigitsArray(arr[1], ' ');

      console.log(findBiggestGain(figures, numDays));
  }
});
