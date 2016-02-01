//https://www.codeeval.com/open_challenges/1/

var fs  = require('fs');
fs.readFileSync('test.txt').toString().split('\n').forEach(function (line) {
    if (line !== '') {

      var getArrayItem = function(arr, index) {
        arr = arr.split(' ');
        return arr[index];
      };

      var fizzBuzz = function(maxCount, firstDiv, secondDiv) {
        var i = 1,
            fizzBuzzArray = [];

        while(i <= maxCount) {
          if(i % firstDiv === 0 && i % secondDiv === 0) {
            fizzBuzzArray.push('FB');
          } else if (i % firstDiv === 0) {
            fizzBuzzArray.push('F');
          } else if (i % secondDiv === 0) {
            fizzBuzzArray.push('B');
          } else {
            fizzBuzzArray.push(i);
          }
          i++;
        }

        return fizzBuzzArray.join(' ');
      };

      console.log(fizzBuzz(getArrayItem(line, 2), getArrayItem(line, 0), getArrayItem(line, 1)));
    }
});
