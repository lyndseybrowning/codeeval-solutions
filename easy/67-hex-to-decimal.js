// https://www.codeeval.com/open_challenges/67/

var fs  = require('fs');
fs.readFileSync('test.txt').toString().split('\n').forEach(function (line) {
    if(line !== '') {
      var hexToDecimal = function(n) {
        return parseInt(n, 16);
      };

      console.log(hexToDecimal(line));
    }
});
