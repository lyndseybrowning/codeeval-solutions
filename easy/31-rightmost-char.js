// https://www.codeeval.com/open_challenges/31/

var fs  = require('fs');
fs.readFileSync('test.txt').toString().split('\n').forEach(function (line) {
  if (line !== '') {

    var getArray = function(str, separator) {
      return str.split(separator);
    };

    var strArray = getArray(line, ','),
        str = strArray[0],
        char = strArray[1];

    console.log(str.lastIndexOf(char));
  }
});
