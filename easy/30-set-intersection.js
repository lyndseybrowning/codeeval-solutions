// https://www.codeeval.com/open_challenges/30/

var fs  = require('fs');
fs.readFileSync('test.txt').toString().split('\n').forEach(function (line) {
  if (line !== '') {

    var getArray = function(str, separator) {
      return str.split(separator);
    };

    var getIntersection = function(left, right) {
      var intersection = left.filter(function(item, index) {
        return right.indexOf(item) !== -1;
      });

      return intersection.length ? intersection.join(',') : '';
    };

    var sections = getArray(line, ';');

    console.log(getIntersection(getArray(sections[0], ','), getArray(sections[1], ',')));
  }
});
