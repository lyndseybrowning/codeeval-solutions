// https://www.codeeval.com/open_challenges/62/

var fs  = require('fs');
fs.readFileSync('test.txt').toString().split('\n').forEach(function (line) {
  if(line !== '') {

    var getDigit = function(str, index) {
      return parseInt(str.split(',')[index], 10);
		};

    var getModulus = function(n, m) {
      return n - (Math.floor(n / m) * m);
    };

    console.log(getModulus(getDigit(line, 0), getDigit(line, 1)));
  }
});
