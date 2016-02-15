// https://www.codeeval.com/open_challenges/227/

var fs  = require("fs");
fs.readFileSync('test.txt').toString().split('\n').forEach(function (line) {
  if(line !== '') {

    var toArray = function(str) {
      return str.split('');
    };

    var toDigits = function(arr) {
      return arr.map(function(item) {
        return parseInt(item, 10);
      });
    };

    var realOrFake = function(digits) {
      var sum = digits.filter(Boolean)
        .reduce(function(prev, current, index) {
          if(index % 2 === 0) {
            return prev + (current * 2);
          }
          return prev + current;
        }, 0);

        return (sum % 10 === 0) ? 'Real' : 'Fake';
    };

    console.log(realOrFake(toDigits(toArray(line))));
  }
});
