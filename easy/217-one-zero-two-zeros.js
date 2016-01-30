// https://www.codeeval.com/open_challenges/217/

var fs  = require("fs");
fs.readFileSync('test.txt').toString().split('\n').forEach(function (line) {
  if (line !== '') {
    line = line.split(' ');

    var numZeros = line[0],
        maxNumber = line[1],
        i = 1,
        count = 0;

   var decToBinary = function(decimal) {
      return (decimal).toString(2);
   };

   var getBinaryZeroCount = function(binary) {
     return (binary.match(/[0]/g) || []).length;
   };

    while(i <= maxNumber) {
      if(getBinaryZeroCount(decToBinary(i)) == numZeros) {
        count++;
      }
      i++;
    }
    console.log(count);
  }
});
